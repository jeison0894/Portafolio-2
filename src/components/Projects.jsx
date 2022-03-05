import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Projects = () => {
  const { texts, handleZoomOut, handleZoomIn } = useContext(LanguageContext)

  return (
    <section className="mt-14 mb-24 space-y-8 sm:mt-0" >
      {texts.projects.map(({ imageSRC, title, ariaLabel, description, tags }, index) =>
        <article key={title} role="link" tabIndex="0" aria-label={ariaLabel} onMouseEnter={handleZoomOut} onMouseLeave={handleZoomIn} className="underlineTop flex flex-wrap lg:flex-nowrap cursor-pointer relative ">
          <div className="w-full h-full absolute z-40 "></div>
          <div className=" w-full h-full lg:max-w-sm  overflow-hidden">
            <img className=" object-cover ease-out duration-700" src={imageSRC} alt="Sitio web commerce" />
          </div>

          <div className="w-full flex flex-col justify-between py-5 lg:pb-0 border-gray-500/70 border-b-[0.5px] lg:ml-6 lg:p-4  lg:border-b-[0] lg:border-t-[0.5px]">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex justify-between text-white/90">{title}<span className="text-xs text-gray-400">0{index + 1}</span></h3>
              <p className="text-gray-300 mb-10 ">{description}</p>
            </div>

            <div className="flex space-x-4 text-sm text-gray-400  ">
              {tags.map(tag => <p key={tag}>{tag}</p>)}
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default Projects;










