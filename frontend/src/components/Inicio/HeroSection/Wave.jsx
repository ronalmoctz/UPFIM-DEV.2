import React from "react";

const Wave = ({ darkMode }) => {
  return (
    <div className="absolute inset-x-0 bottom-0 z-0">
      <svg
        className="block w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={`${darkMode ? "#334155" : "white"}`}
          fillOpacity="1"
          d="M0,224L40,240C80,256,160,288,240,293.3C320,299,400,277,480,261.3C560,245,640,235,720,240C800,245,880,267,960,277.3C1040,288,1120,288,1200,261.3C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
