import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const LanguageLink = ({ initial, ariaLabel }) => {
  const { handleLanguage } = useContext(LanguageContext)

  return (
    <NavLink to="/" onClick={() => handleLanguage(initial)}
      className={`hover:text-white  ease-out duration-300 font-semibold text-gray-400 dark:hover:text-black ${initial === localStorage.getItem('language') && "text-white/100 dark:text-black"}`}
      aria-label={ariaLabel}>{initial.toUpperCase()}</NavLink>
  )
}

export default LanguageLink