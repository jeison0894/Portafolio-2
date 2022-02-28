import CopyHome from "./CopyHome";

const Main = () => {
  return (
    <main className="grid grid-cols-2 h-[68vh] mb-10">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Sobre mi</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      <CopyHome />
    </main>
  );
};

export default Main;
