import { useContext } from "react"
import LanguageContext from "../context/LanguageContext"

const Contact = () => {
  const { texts } = useContext(LanguageContext)

  console.log(texts.personalLinks)
  return (
    <section className="mt-24 absolute top-52 left-0 right-0 bottom-10 flex flex-col justify-between text-center  md:right-7 md:text-right md:max-h-[350px] md:top-64">

      <div className="space-y-3"  >
        <p className=" text-gray-400 font-bold">{texts.ctaTitle}</p>
        <div>
          <a className="underline font-bold  text-[7vw] md:text-2xl" href="mailto:jeisson0894@gmail.com" aria-label={texts.ariaLabel}>jeisson0894@gmail.com</a>
        </div>
      </div>

      <a className="font-bold text-gray-200" href="#">{texts.downloadCVTitle}</a>

      <div className="space-y-3">
        <div>
          <nav className="space-x-5">
            {texts.personalLinks.map(({ socialNetwork, url, ariaLabel }) =>
              <a target="_blank" rel="noopener noreferrer" className="font-bold" key={socialNetwork} href={url} aria-label={ariaLabel}>{socialNetwork}</a>
            )}
          </nav>

        </div>
        <p className="text-sm text-gray-400 font-semibold">{texts.copyright}</p>
      </div>

    </section>
  )
}

export default Contact



