import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const CopyHome = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <section className="grid  ">
      <h2 className=" place-self-end max-w-[220px] text-lg font-semibold absolute bottom-14 lg:bottom-32 md:text-xl">
        {texts.headerSubtitle}
      </h2>
    </section>
  );
};

export default CopyHome;




