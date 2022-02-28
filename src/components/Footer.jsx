import diagonalArrow from "../assets/diagonalArrow.svg";

const Footer = () => {
  return (
    <>
      <a href="#" className="flex space-x-4" aria-label="Enviar correo a Jeison Garzón">
        jeisson0894@gmail.com <img src={diagonalArrow}  />
      </a>
    </>
  );
};

export default Footer;
