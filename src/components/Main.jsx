import { NavLink, Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import "../index.css"

const Main = () => {
  return (


    <main className="flex flex-col justify-between sm:grid sm:grid-cols-3 h-full sm:h-[60vh]">

      <nav>
        <ul className="space-y-2 font-semibold text-gray-400 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400 hover:text-gray-500  "
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/proyectos"
              className={({ isActive }) =>
                isActive ? "text-white " : "text-gray-400 hover:text-gray-500 "
              }
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobreMi"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400 hover:text-gray-500  "
              }
            >
              Sobre mi
            </NavLink>
          </li>


        </ul>
      </nav>
      <TransitionGroup component={null} enter={true} exit={false}>
        <CSSTransition key={useLocation().pathname} timeout={500} classNames="fade" >
          <div className=" col-span-2">
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </main>

  );
};

export default Main;
