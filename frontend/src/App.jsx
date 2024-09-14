import NavBar from './components/Header/NavBar';
import React, { useState } from 'react';
import Hero from './components/HeroSection/Hero';
import Services from './components/services/Services';
import Reviews from './components/Reviews/Reviews';
import Info from './components/Info/Info';
import StepGuide from './components/StepGuide/StepGuide';
import Footer from './components/Footer/Footer';
// import Login from "./components/Login/Login";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && 'dark'} font-onest`}>
      <NavBar handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <Services />
      <Reviews />
      <Info />
      <StepGuide />
      <Footer />
      {/* <Login />  */}
    </div>
  );
};

export default App;
