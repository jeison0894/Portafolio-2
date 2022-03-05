import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const CopyHome = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <section className="grid sm:relative sm:h-full min-h-[37vh] mb-24 ">
      <h2 className={`place-self-end max-w-[220px] lg:text-xl font-semibold text-white/90`}>
        {texts.headerSubtitle}
      </h2>
    </section>
  );
};

export default CopyHome;




