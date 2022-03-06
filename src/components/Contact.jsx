import { useContext } from "react/cjs/react.development"
import LanguageContext from "../context/LanguageContext"

const Contact = () => {
  const { texts } = useContext(LanguageContext)

  console.log(texts.personalLinks)
  return (
    <section className="mt-24 absolute top-52 left-0 right-0 bottom-10 flex flex-col justify-between text-center  md:right-7 md:text-right md:max-h-[350px] md:top-64">

      <div className="space-y-3"  >
        <p className=" text-gray-400 font-bold">Enviame un correo</p>
        <div>
          <a className="underline font-bold  text-[7vw] md:text-2xl" href="#">jeisson0894@gmail.com</a>

        </div>
      </div>

      <a className="font-bold text-gray-200" href="#">DESCARGAR CV </a>

      <div className="space-y-3">
        <div>
          <nav className="space-x-5">
            {texts.personalLinks.map(({ socialNetwork, url, ariaLabel }) =>
              <a className="font-bold" key={socialNetwork} href={url} aria-label={ariaLabel}>{socialNetwork}</a>
            )}
          </nav>

        </div>
        <p className="text-sm text-gray-400 font-semibold"> JeisonGarzón  -  Todos los derechos reservados </p>
      </div>

    </section>
  )
}

export default Contact

