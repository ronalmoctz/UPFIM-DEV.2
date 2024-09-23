import React from "react";
import Hero from "../components/Inicio/HeroSection/Hero";
import About from "../components/Inicio/About/About";
import Metas from "../components/Inicio/Metas/Metas";
import Taller from "../components/Inicio/TallerHome/Taller";
import Docentes from "../components/Inicio/DocentesHome/Docentes";
import Gallery from "../components/Inicio/Gallery/MainGallery";

const Home = ({ darkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      <About />
      <Gallery />
      <Metas />
      <Taller />
      <Docentes />
    </>
  );
};

export default Home;
