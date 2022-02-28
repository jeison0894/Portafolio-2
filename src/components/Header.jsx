import myLogo from "../assets/JeisonGarzónLogotipo.svg";

const Header = () => {
  return (
    <>
      <header className="flex justify-between ">
        <img src={myLogo} alt="Logotipo Jeison Garzón" />

        <nav className="space-x-5">
          <button aria-label="cambiar idioma a Español">ES</button>
          <button aria-label="cambiar idioma a Ingles">EN</button>
        </nav>
      </header>

    </>
  );
};

export default Header;
