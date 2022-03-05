import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Footer = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <>
      <a href="mailto:jeisson0894@gmail.com"
        className="font-bold inline-block mb-10 text-gray-400 hover:text-white/90 ease-out duration-500" aria-label="Enviar correo a Jeison Garzón">
        {texts.footerTitle} &nbsp; ↗
      </a>
    </>
  );
};

export default Footer;
