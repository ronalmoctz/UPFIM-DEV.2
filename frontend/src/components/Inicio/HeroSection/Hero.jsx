import React from "react";
import bg from "../../../assets/cuarto.webp";
import Wave from "./Wave";
import Intro from "./Intro";

const Hero = ({ darkMode }) => {
  return (
    <div className="relative h-[800px] overflow-hidden bg-slate-950 md:p-16 p-5">
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="bg-image"
          className="h-full w-full object-cover opacity-70 dark:opacity-50"
        />
      </div>
      <Intro/>
      <Wave darkMode={darkMode} />
    </div>
  );
};

export default Hero;
