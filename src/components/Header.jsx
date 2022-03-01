import myLogo from "../assets/imgs/JeisonGarzónLogotipo.svg";

const Header = () => {
  return (
    <>
      <header className="flex justify-between ">
        <img src={myLogo} alt="Logotipo Jeison Garzón" />

        <nav className="space-x-5 ">
          <button className="font-semibold"aria-label="cambiar idioma a Español">ES</button>
          <button className="font-semibold text-gray-400"aria-label="cambiar idioma a Ingles">EN</button>
        </nav>
      </header>

    </>
  );
};

export default Header;
