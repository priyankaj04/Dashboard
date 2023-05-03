import React, {useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { motion } from "framer-motion"


const variants = {
  visible: { rotate: 360 },
  hidden: { rotate: 0}
};
const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();


  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900)
      setActiveMenu(false)
  }


  return (
    <motion.div layout style={{ overflow: "scroll" }} className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {
        activeMenu && (<>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => { handleCloseSideBar() }} className="items-center flex mt-4 gap-3 ml-3 font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /><span>Shopppy </span>
            </Link>
            <TooltipComponent content="Close" position="BottomCenter">
              <button type="button" style={{ color: currentColor }} onClick={() => { setActiveMenu((prevActiveMenu) => !prevActiveMenu) }} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {
              links.map((item) => (
                <div  key={item.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                  {
                    item.links.map((link) => (
                      <NavLink to={`/${link.name}`} key={link.name} onClick={() => handleCloseSideBar()}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : '',
                        })}
                        className={({ isActive }) => isActive ? activeLink : normalLink}>
                        <motion.span whileHover={{ scale: 1.5 }} animate={isAnimating ? "visible" : "hidden"} variants={variants} onAnimationComplete={() => setIsAnimating(false)}>{link.icon}</motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} className="capitalize">{link.name}</motion.span>
                      </NavLink>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </>)}
    </motion.div>
  )
}

export default Sidebar