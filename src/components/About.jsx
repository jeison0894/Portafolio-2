const About = () => {
  return (
    <section className="sm:relative sm:h-full mb-24">
      <div className="sm:relative sm:h-3/6">
        <nav className="flex justify-end my-8 mb-12 sm:absolute sm:bottom-0">
          <ul className="space-y-1  ">
            <li>
              <a href="https://github.com/jeison0894" target="_blank" rel="noreferrer" className="hover:text-gray-300">GitHub &nbsp; ↗</a>
            </li>
            <li>
              <a href="https://dribbble.com/JasonGarzon" target="_blank" rel="noreferrer" className="hover:text-gray-300">Dribble &nbsp; ↗</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jeison-alexander-garzon-pe%C3%B1a/" target="_blank" rel="noreferrer" className="hover:text-gray-300">Linkedin &nbsp; ↗</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="md:flex md:justify-end" >
        <div className=" md:max-w-[379px] space-y-6 font-semibold text-gray-200">
          <p>
            Desarrollador autodidacta, estudie diseño grafico en la universidad
            durante 5 años y trabaje como diseñador Freelancer por 3 años antes de
            hacer el cambio. Esta experiencia me permitió ser más sensible a los
            detalles visuales, la animación y la tipografía.
          </p>

          <p>
            Mi objetivo, crear experiencias visuales que atraigan y comuniquen
            efectivamente ayudando a resolver una necesidad.
          </p>

          <p>Me especializo en el stack MERN.</p>
        </div>
      </div>
    </section>
  );
};

export default About;


