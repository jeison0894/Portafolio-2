import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const CopyHome = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <section className="grid  ">
      <h2 className=" place-self-end max-w-[220px] text-lg font-semibold text-white/90 absolute bottom-14 lg:bottom-24 md:text-xl">
        {texts.headerSubtitle}
      </h2>
    </section>
  );
};

export default CopyHome;




