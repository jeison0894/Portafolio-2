import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import LanguageContext from "../context/LanguageContext";
import DarkModeBtns from "./DarkModeBtns";
import LanguageLink from "./LanguageLink";
import MyLogo from "./MyLogo";

const Header = () => {
  const { texts } = useContext(LanguageContext)
  const { logoColor } = useContext(DarkModeContext)

  return (
    <>
      <header className="flex justify-between items-center ">
        <MyLogo color={logoColor} />
        <DarkModeBtns />

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
