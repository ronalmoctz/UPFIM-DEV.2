import { useState } from "react";
import Hearder from "./Header/Hearder";
import SideBar from "./SideBar/SideBar";

const MainDash = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <Hearder
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />
      <SideBar isSidebarOpen={isSidebarOpen} />

    </div>
  );
};

export default MainDash;
