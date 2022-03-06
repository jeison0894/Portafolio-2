import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import profilePhoto from "../assets/imgs/personalPhoto.jpg"

const About = () => {
  const { texts } = useContext(LanguageContext)

  return (
   <section className="flex flex-col max-w-[720px] ml-auto mt-24 mb-16 md:mt-[26vh] lg:mt-[12vh]">

  <img className="mb-7 md:w-64" src={profilePhoto} alt="foto " />

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


{/*  */}