import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const About = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <section className="sm:relative sm:h-full mb-24 mt-24 md:mt-0">
      <div className="sm:relative sm:h-3/6">
        <nav className="flex justify-end my-8 mb-12 sm:absolute sm:bottom-0">
          <ul className="space-y-1  ">
            {texts.personalLinks.map(({ socialNetwork, url, ariaLabel }) =>
              <li key={socialNetwork}>
                <a href={url} aria-label={ariaLabel} target="_blank" rel="noreferrer"
                  className="underlineBottom text-lg md:text-base">{socialNetwork} &nbsp; ↗</a>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <div className="md:flex md:justify-end" >
        <div className=" md:max-w-[379px] space-y-6 font-semibold text-gray-200">
          {texts.myInfo.map((paragraph) =>
            <p key={paragraph}>{paragraph}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;


