import React from 'react';
import Hero from './HeroSection/Hero';
import About from './About/About';
import Metas from './Metas/Metas';
import Taller from './TallerHome/Taller';
import Docentes from './DocentesHome/Docentes';
//import Gallery from './Gallery/Gallery';
import Carrusel from './Carrusel/MainCarrusel';

const Home = ({ darkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      <About />
       <Carrusel/> 
      <Metas />
      <Taller />
      <Docentes />
    </>
  );
};

export default Home;
