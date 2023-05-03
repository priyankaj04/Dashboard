import React from 'react';
import { motion } from "framer-motion";

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} type="button" style={{ background: bgColor, color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </motion.button>
  )
}

export default Button
