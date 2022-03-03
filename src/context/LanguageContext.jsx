import project1 from "../assets/imgs/project1.jpg"
import project2 from "../assets/imgs/project2.jpg"

import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";
const translations = {
  es: {
    languages: [{
      initial: "es",
      ariaLabel: "cambiar idioma a Español"
    },
    {
      initial: "en",
      ariaLabel: "cambiar idioma a Ingles"
    }],
    //Home & NavMenu
    headerTitle: "Diseñador & Desarrollador Frontend",
    navMenu: [{
      name: "Inicio",
      route: "/",
    }, {
      name: "Proyectos",
      route: "/proyectos",
    }, {
      name: "Sobre mi",
      route: "/sobreMi",
    }],
    headerSubtitle:
      "Diseño y desarrollo soluciones digitales y sitios web 100% rápidos, accesibles, visualmente estéticos y funcionales, con excelente usabilidad y optimización SEO.",

    //projects
    projects: [{
      imageSRC: project2,
      ariaLabel: "Ir al proyecto Ecommerce ",
      title: "Ecommerce",
      description: "Ecommerce con pasarela de pagos.",
      tags: ["UX/UI", "Stripe", "MongoDB", "React"]
    }, {
      imageSRC: project1,
      ariaLabel: "Ir al proyecto Twitter Clon ",
      title: "Twitter Clon",
      description: "Copia de Twitter con login e información administrada desde una base de datos.",
      tags: ["React", "NodeJS"]
    }],

    //about
    personalLinks: [
      { socialNetwork: "GitHub", url: "https://github.com/jeison0894", ariaLabel: "Ir a GitHub " },
      { socialNetwork: "Dribble", url: "https://dribbble.com/JasonGarzon", ariaLabel: "Ir a Dribble" },
      { socialNetwork: "Linkedin", url: "https://www.linkedin.com/in/jeison-alexander-garzon-pe%C3%B1a/", ariaLabel: "Ir a Linkedin " },
    ],
    myInfo: [
      "Desarrollador autodidacta, estudie diseño grafico en la universidad durante 5 años y trabaje como diseñador Freelancer por 3 años antes de hacer el cambio. Esta experiencia me permitió ser más sensible a los detalles visuales, la animación y la tipografía.",
      "Mi objetivo, crear experiencias visuales que atraigan y comuniquen efectivamente ayudando a resolver una necesidad.",
      "Me especializo en el stack MERN.",
    ],

    footerTitle: "Contáctame",
  },

  en: {
    languages: [{
      initial: "es",
      ariaLabel: "Change language to Spanish"
    },
    {
      initial: "en",
      ariaLabel: "Change language to English"
    }],
    //Home & NavMenu
    headerTitle: "Designer & Frontend Developer",
    navMenu: [{
      name: "Home",
      route: "/",
    }, {
      name: "Projects",
      route: "/projects",
    }, {
      name: "About me",
      route: "/aboutMe",
    }],
    headerSubtitle:
      "Design and development digital solutions and websites that are 100% fast, accessible, visually aesthetic and functional, with excellent usability and SEO optimization.",

    //projects
    projects: [{
      imageSRC: project2,
      ariaLabel: "Go to project Ecommerce ",
      title: "Ecommerce",
      description: "Ecommerce with payment gateway.",
      tags: ["UX/UI", "Stripe", "MongoDB", "React"]
    }, {
      imageSRC: project1,
      ariaLabel: "Go to project Twitter Clone ",
      title: "Twitter Clone",
      description: "Copy of Twitter with login and information managed from a database.",
      tags: ["React", "NodeJS"]
    }],

    //about
    personalLinks: [
      { socialNetwork: "GitHub", url: "https://github.com/jeison0894", ariaLabel: "Go to GitHub" },
      { socialNetwork: "Dribble", url: "https://dribbble.com/JasonGarzon", ariaLabel: "Go to Dribble" },
      { socialNetwork: "Linkedin", url: "https://www.linkedin.com/in/jeison-alexander-garzon-pe%C3%B1a/", ariaLabel: "Go to Linkedin" },
    ],
    myInfo: [
      "Autodidact developer, I studied graphic design at university for 5 years and worked as a freelance designer for 3 years before making the switch. This experience allowed me to be more sensitive to visual details, animation and typography.",
      "My goal, to create visual experiences that attract and communicate effectively, helping to solve a need.",
      "I specialize in the MERN stack.",
    ],

    footerTitle: "Contact me",
  },

};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (language) => {
    if (language === "es") {
      localStorage.setItem("language", language)
      setLanguage("es");
      setTexts(translations.es);
    } else {
      localStorage.setItem("language", language)
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  //ProjectsContext
  const handleZoomOut = (e) => {
    const imageZoomOut = e.target.nextElementSibling.firstChild
    imageZoomOut.classList.add("scale-125")
  }

  const handleZoomIn = (e) => {
    const imageZoomIn = e.target.nextElementSibling.firstChild
    imageZoomIn.classList.remove("scale-125")
  }

  const data = { texts, handleLanguage, handleZoomOut, handleZoomIn };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export default LanguageContext;
export { LanguageProvider };
