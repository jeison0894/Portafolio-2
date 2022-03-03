import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Footer = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <>
      <a id="footer" href="mailto:jeisson0894@gmail.com" className="ease-out duration-100 inline-block mb-10 text-gray-200 font-bold hover:text-gray-400" aria-label="Enviar correo a Jeison Garzón">
        {texts.footerTitle} &nbsp; ↗
      </a>
    </>
  );
};

export default Footer;
