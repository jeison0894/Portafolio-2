import { useContext } from "react";
import myLogo from "../assets/imgs/JeisonGarzónLogotipo.svg";
import LanguageContext from "../context/LanguageContext";
import { NavLink } from "react-router-dom";

const Header = () => {

  const { texts, handleLanguage } = useContext(LanguageContext)

  return (
    <>
      <header className="flex justify-between items-center ">
        <img width="54.67" height="32.8" src={myLogo} alt="Logotipo Jeison Garzón" />
        <nav className="space-x-5 ">

          {texts.languages.map(({ initial, ariaLabel }) =>
            <NavLink key={initial} to="/" onClick={() => handleLanguage(initial)} className="link font-semibold" aria-label={ariaLabel}>{initial.toUpperCase()}</NavLink>
          )}
        </nav>
      </header>

    </>
  );
};

export default Header;
