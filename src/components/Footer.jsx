import diagonalArrow from "../assets/imgs/diagonalArrow.svg";

const Footer = () => {
  return (
    <>
      <a href="#" className="flex space-x-4 mt-16 text-gray-400 font-bold" aria-label="Enviar correo a Jeison Garzón">
        jeisson0894@gmail.com <img className="ml-3" src={diagonalArrow}  />
      </a>
    </>
  );
};

export default Footer;
