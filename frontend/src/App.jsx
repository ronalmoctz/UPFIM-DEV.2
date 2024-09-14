
import NavBar from "./components/Header/NavBar";
import React, { useState } from "react";
import Hero from './components/HeroSection/Hero'
import Reviews from './components/Reviews/Reviews'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && 'dark'} font-onest`}>
      <NavBar handleDarkMode={handleDarkMode} darkMode={darkMode} />

     <Hero darkMode={darkMode} /> 

     <Reviews/>



    </div>
  );
};

export default App;
