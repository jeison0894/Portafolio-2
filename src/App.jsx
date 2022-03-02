import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import CopyHome from "./components/CopyHome";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";


const App = () => {
  return (

    <Router>
      <Header />
      <h1 className="mt-7 mb-14">Diseñador & Desarrollador Frontend</h1>

      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<CopyHome />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/sobreMi" element={<About />} />
        </Route>
      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
