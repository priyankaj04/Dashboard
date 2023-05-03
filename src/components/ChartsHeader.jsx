import React from 'react'

const ChartsHeader = ({ category, title }) => {
  
  const Capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return (
    <div className="mb-10">
      <div>
        <p className="text-lg text-gray-400">Chart</p>
        <p className="text=3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">{Capitalize(category)}</p>
      </div>
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{title}</p>
    </div>
  )
}

export default ChartsHeader