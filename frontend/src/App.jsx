
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Generales/Header/NavBar";
import Footer from "./components/Generales/Footer/Footer";
import Inicio from "./components/Inicio/MainHome";
import CatalogoTalleres from "./components/Talleres/Talleres";
import Login from "./components/Login/Login";
import Error404 from "./components/Generales/PageError/Error404";
import Error408 from "./components/Generales/PageError/Error408";
import useDarkMode from "./Hooks/useDarkMode";
//import Contact from "./components/Contacto/ContactSection";
import FormInsertTaller from './components/Admin/Forms/FormInsertTaller'
import ActividadMain from "./components/Actividades/ActividadMain";
//import MainDash from "./components/Admin/DashBoard/MainDash";

const App = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  return (


    <div className={`${darkMode ? 'dark' : ''} font-onest`}>

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <Inicio darkMode={darkMode} />
                <Footer />
              </>
            }
          />
          <Route
            path="/talleres"
            element={
              <>
                <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <CatalogoTalleres />
                <Footer />
              </>
            }
          />
          <Route
            path="/actividades"
            element={
              <>
                <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <ActividadMain />
                <Footer />
              </>
            }
          />
          <Route
            path="/contacto"
            element={
              <>
                <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />
                {/* <MainDash/> */}
                <FormInsertTaller/>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/408" element={<Error408 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
