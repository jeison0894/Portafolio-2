import project1 from "../assets/imgs/project1.jpg"
import project2 from "../assets/imgs/project2.jpg"

const Projects = () => {



  return (
    <section className="mt-14 mb-8 space-y-8 sm:mt-0">

      <article className="flex flex-wrap lg:flex-nowrap cursor-pointer ">
        <div className=" w-full h-full lg:max-w-sm relative overflow-hidden">
          <img className="object-cover hover:scale-125 ease-out duration-500" src={project2} alt="Sitio web commerce" />
        </div>

        <div className="w-full flex flex-col justify-between py-5 lg:pb-0 border-gray-500/70 border-b-[0.5px] lg:ml-6 lg:p-4  lg:border-b-[0] lg:border-t-[0.5px]">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex justify-between">Ecommerce<span >→</span></h3>
            <p className="text-gray-300 mb-10">Ecommerce con pasarela de pagos.</p>
          </div>

          <div className="flex space-x-4 text-sm text-gray-400  ">
            <p>UX/UI</p>
            <p>Stripe</p>
            <p>MongoDB</p>
            <p>React</p>
          </div>
        </div>
      </article>

      <article className="flex flex-wrap lg:flex-nowrap cursor-pointer">


        <div className=" w-full h-full lg:max-w-sm relative overflow-hidden">
          <img className="object-cover hover:scale-125 ease-out duration-500" src={project1} alt="Twitter Clon" />
        </div>


        <div className="w-full flex flex-col justify-between py-5 lg:pb-0 border-gray-500/70 border-b-[0.5px] lg:ml-6 lg:p-4  lg:border-b-[0] lg:border-t-[0.5px]">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex justify-between">Twitter Clon<span >→</span></h3>
            <p className="text-gray-300 mb-10">Copia de Twitter con login e información administrada desde una base de datos.</p>
          </div>

          <div className="flex space-x-4 text-sm text-gray-400  ">
            <p>React</p>
            <p>Node</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;










