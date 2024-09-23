import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Generales/Header/NavBar";
import Inicio from "./pages/MainHome";
import CatalogoTalleres from "./pages/MainTaller";
import ActividadMain from "./pages/MainActividad";
import Contact from "./pages/MainContacto";
import Login from "./components/Login/Login";
import Footer from "./components/Generales/Footer/Footer";
import Error404 from "./components/Generales/PageError/Error404";
import Error408 from "./components/Generales/PageError/Error408";
import useDarkMode from "./Hooks/useDarkMode";
// import MainCrud from './components/Admin/Crud-Actividades/MainCrud'
import MainDash from "./components/Admin/DashBoard/MainDash";
const App = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className={`${darkMode ? "dark" : ""} font-onest`}>
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
                <Contact />
                {/* <MainCrud/> */}
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/dash" element={<MainDash />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/408" element={<Error408 />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;