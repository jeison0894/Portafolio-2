import { useContext } from "react";
import myLogo from "../assets/imgs/JeisonGarzónLogotipo.svg";
import LanguageContext from "../context/LanguageContext";
import LanguageLink from "./LanguageLink";

const Header = () => {

  const { texts } = useContext(LanguageContext)

  return (
    <>
      <header className="flex justify-between items-center ">
        <img width="54.67" height="32.8" src={myLogo} alt="Logotipo Jeison Garzón" />
        <nav className="space-x-5">

          {texts.languages.map(({ initial, ariaLabel }) =>
           <LanguageLink key={initial} initial={initial} ariaLabel={ariaLabel} />
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
