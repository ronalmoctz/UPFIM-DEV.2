import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/Generales/Header/NavBar";
import Inicio from "../pages/MainHome";
import CatalogoTalleres from "../pages/MainTaller";
import ActividadMain from "../pages/MainActividad";
import Contact from "../pages/MainContacto";
import Login from "../components/Login/Login";
import Footer from "../components/Generales/Footer/Footer";
import Error404 from "../components/Generales/PageError/Error404";

const MainRoutes = ({ darkMode, toggleDarkMode }) => (
  <>
    <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />
    <Routes>
      <Route path="/" element={<Inicio darkMode={darkMode} />} />
      <Route path="/talleres" element={<CatalogoTalleres />} />
      <Route path="/actividades" element={<ActividadMain />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </>
);

export default MainRoutes;
