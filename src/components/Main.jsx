import { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import LanguageContext from "../context/LanguageContext";
import "../index.css"

const Main = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <main className="flex flex-col justify-between sm:grid sm:grid-cols-3 h-full sm:h-[60vh] ">
      <nav className="space-x-5 font-semibold flex md:space-x-0 md:flex-col md:space-y-3 pb-4 border-gray-500/70 border-b-[0.5px] sm:border-b-[0]">
        {texts.navMenu.map(({ name, route }) =>
          <NavLink
            key={name}
            to={route}
            className={({ isActive }) => isActive ? "text-white/90" : "text-gray-400 hover:text-white/90 ease-out duration-700"}>
            {name}
          </NavLink>
        )}
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
