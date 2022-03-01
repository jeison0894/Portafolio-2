import CopyHome from "./CopyHome";

const Main = () => {
  return (
    <main className="grid grid-cols-2 h-[68vh]">
      <nav>
        <ul className="space-y-2 font-semibold text-gray-400 ">
          <li>
            <a href="#" className="text-white ">Inicio</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Proyectos</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Sobre mi</a>
          </li>         
        </ul>
      </nav>

      <CopyHome />
    </main>
  );
};

export default Main;
