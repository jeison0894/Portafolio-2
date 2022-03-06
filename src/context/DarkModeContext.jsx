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


  const data = { activateDarkMode, logoColor, setLogoColor };

  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};

export default DarkModeContext;
export { DarkModeProvider };

