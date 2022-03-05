import { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import LanguageContext from "../context/LanguageContext";
import "../index.css"

const Main = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <main className="flex flex-col justify-between sm:grid sm:grid-cols-3 h-full sm:h-[60vh]">
      <nav>
        <ul className="space-y-2 font-semibold ">
          {texts.navMenu.map(({ name, route }) =>
            <li key={name}>
              <NavLink
                to={route}            
                className={({ isActive }) => isActive ? "text-white" : "text-gray-400 hover:text-gray-500 ease-out duration-100"}>
                {name}
                
              </NavLink>
            </li>
          )}
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
