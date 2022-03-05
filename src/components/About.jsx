import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import profilePhoto from "../assets/imgs/personalPhoto.jpg"

const About = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <section className="sm:h-full mb-24 mt-28 md:mt-0 flex flex-col max-w-[760px] ml-auto ">

      <div className=" h-1/2 flex flex-col justify-end">
        <img className="mb-7 md:w-64" src={profilePhoto} alt="foto" />
      </div>

      <div className="md:flex md:justify-end" >
        <div className="lg:max-w-[379px] space-y-6 font-semibold text-gray-200">
          {texts.myInfo.map((paragraph) =>
            <p key={paragraph}>{paragraph}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

