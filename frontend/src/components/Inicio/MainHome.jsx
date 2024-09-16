import React from "react";
import Hero from "./HeroSection/Hero";
import About from "./About/About";
import Metas from "./Metas/Metas";
import Taller from "./TallerHome/Taller";
import Docentes from "./DocentesHome/Docentes";

const Home = ({ darkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      <About />
      <Metas />
      <Taller />
      <Docentes />
    </>
  );
};

export default Home;
