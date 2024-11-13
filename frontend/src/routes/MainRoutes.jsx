import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../components/Generales/Header/NavBar";
import Inicio from "../pages/MainHome";
import CatalogoTalleres from "../pages/MainTaller";
import ActividadMain from "../pages/MainActividad";
import Contact from "../pages/MainContacto";
import Login from "../components/Login/Login";
import Footer from "../components/Generales/Footer/Footer";
import Error404 from "../components/Generales/PageError/Error404";
import Preloader from "../components/Generales/Preload/Preloader";

const MainRoutes = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(location.pathname === "/");
  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          {!isLoginPage && <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />}
          <Routes>
            <Route path="/" element={<Inicio darkMode={darkMode} />} />
            <Route path="/talleres" element={<CatalogoTalleres />} />
            <Route path="/actividades" element={<ActividadMain />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error404 />} />


          </Routes>
          {!isLoginPage && <Footer />}
        </>
      )}
    </>
  );
};

export default MainRoutes;

