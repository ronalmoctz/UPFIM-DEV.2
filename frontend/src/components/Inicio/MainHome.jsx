import React from 'react';
import Hero from './HeroSection/Hero';
import About from './About/About';
import Metas from './Metas/Metas';
// import Gallery from './Gallery/Gallery';
import Taller from './TallerHome/Taller';
import Docentes from './DocentesHome/Docentes';
import Gallery from './Gallery/Gallery';

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
