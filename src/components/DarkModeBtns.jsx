import React from 'react'
import { useContext } from 'react'
import DarkModeContext from '../context/DarkModeContext'

const DarkModeBtns = () => {
  const { activateDarkMode } = useContext(DarkModeContext)

  return (
    <nav className="flex space-x-3 ">
      <div onClick={() => activateDarkMode(false)} className="cursor-pointer w-4 h-4 rounded-full bg-neutral-900 "></div>
      <div onClick={() => activateDarkMode(true)} className="cursor-pointer w-4 h-4 rounded-full bg-white "></div>
    </nav>
  )
}

export default DarkModeBtns