import { createContext, useState } from "react";

const DarkModeContext = createContext();


const DarkModeProvider = ({ children }) => {
  const [logoColor, setLogoColor] = useState("white")

  const activateDarkMode = (boolean) => {
    const root = document.documentElement
    if (boolean) {
      root.classList.add("dark")
      setLogoColor("black")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      setLogoColor("white")
      localStorage.removeItem("theme")
    }
  }

  const changeHoverLines = () => {
    if (document.documentElement.classList.contains("dark")) {
      const linksContactHover = document.querySelectorAll(".underlineBottom")
      const linksProjectsHover = document.querySelectorAll(".underlineTop")
      linksContactHover.forEach(link => link.classList.add("underlineBlack"))
      linksProjectsHover.forEach(link => link.classList.add("underlineBlack"))
    } else {
      const linksContactHover = document.querySelectorAll(".underlineBottom")
      const linksProjectsHover = document.querySelectorAll(".underlineTop")
      linksContactHover.forEach(link => link.classList.remove("underlineBlack"))
      linksProjectsHover.forEach(link => link.classList.remove("underlineBlack"))
    }
  }

  const changeColorIconDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark")
      setLogoColor("black")
    }
  }
  
  const data = { activateDarkMode, logoColor, setLogoColor, changeHoverLines, changeColorIconDarkMode };

  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};

export default DarkModeContext;
export { DarkModeProvider };

