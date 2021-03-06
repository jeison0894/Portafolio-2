import React from 'react'
import { useContext } from 'react'
import DarkModeContext from '../context/DarkModeContext'

const DarkModeBtns = () => {
  const { activateDarkMode } = useContext(DarkModeContext)

  return (
    <nav className="flex space-x-5 ">
      <button aria-label='dark Mode' tabIndex="0" onClick={() => activateDarkMode(false)} className="cursor-pointer w-4 h-4 rounded-full bg-neutral-900 border-[1px] border-white"></button>
      <button aria-label='Ligth Mode' tabIndex="0" onClick={() => activateDarkMode(true)} className="cursor-pointer w-4 h-4 rounded-full bg-white border-[1px] border-black"></button>
    </nav >
  )
}

export default DarkModeBtns