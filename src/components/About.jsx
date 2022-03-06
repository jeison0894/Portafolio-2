import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import profilePhoto from "../assets/imgs/personalPhoto.jpg"

const About = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <section className="mt-24 mb-16 ml-auto flex flex-col max-w-[720px] md:mt-[16vh] lg:mt-[12vh]">

  <img className="mb-7 md:w-64" src={profilePhoto} alt="foto " />

  <div className="md:flex md:justify-end" >
    <div className="lg:max-w-[379px] space-y-6 font-semibold">
      {texts.myInfo.map((paragraph) =>
        <p key={paragraph}>{paragraph}</p>
      )}
    </div>
  </div>
</section>
  );
};

export default About;
