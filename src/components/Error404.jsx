import { useContext } from "react"
import LanguageContext from "../context/LanguageContext"

const Error404 = () => {

  const { texts } = useContext(LanguageContext)

  return (
    <section className="grid place-content-center h-full text-center">
      <div className="relative mt-5 mb-[13vh] md:my-0">
        <p className="text-[41vw] md:text-[250px] font-bold text-gray-700">404</p>
        <p className="absolute bottom-4 w-full mx-auto" >{texts.error404}</p>
      </div>
    </section>
  )
}

export default Error404