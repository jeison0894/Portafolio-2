import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import CopyHome from "./components/CopyHome";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import LanguageContext from "./context/LanguageContext";
import CursorCicle from "./components/CursorCicle";

const App = () => {
  const { texts, handleLanguage } = useContext(LanguageContext)

  useEffect(() => {
    handleLanguage(localStorage.getItem('language'))
  }, [texts])

  return (
    <Router>
      <Header />
      <h1 className="mt-7 mb-14">{texts.headerTitle}</h1>
      <CursorCicle />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<CopyHome />} />
          <Route path={texts.navMenu[1].route} element={<Projects />} />
          <Route path={texts.navMenu[2].route} element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
