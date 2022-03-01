const About = () => {
  return (
    <section className="">
      <div className="sm:relative sm:h-3/6">
      <nav className="flex justify-end my-8 mb-12 sm:absolute sm:bottom-0">
        <ul className="space-y-2 ">
          <li>
            <a href="#" class="hover:text-gray-200">GitHub</a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-200">Dribble</a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-200">Linkedin</a>
          </li>
        </ul>
      </nav>
      </div>

      <div className="md:flex md:justify-end" >
        <div className=" md:max-w-[379px] space-y-6 md:text-lg font-semibold ">
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


