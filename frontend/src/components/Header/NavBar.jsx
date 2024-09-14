import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../../assets/logo-upfim.webp";

const NavBar = ({ handleDarkMode, darkMode }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
      <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-600 bg-slate-50 px-3 py-3 dark:bg-slate-800 dark:text-slate-300 dark:border-verde md:flex-row">
        <div className="flex w-full items-center justify-between md:flex-row">
          <a href="#" className="flex items-center">
            <img src={logo} alt="UPFIM Logo" className="h-10 w-auto md:h-12" />
          </a>
          <button
            className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
            onClick={handleToggleMenu}
          >
            <BiMenuAltLeft className="text-2xl" />
          </button>
        </div>
        <div
          className={`${
            toggleMenu ? "block" : "hidden"
          } w-full flex-col md:flex md:flex-row md:w-auto md:items-center`}
        >
          <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
            <li className="w-full md:w-auto">
              <a
                href="#home"
                className="font-bold block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                Inicio
              </a>
            </li>

            <li className="w-full md:w-auto">
              <a
                href="#about"
                className="font-bold block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                Talleres
              </a>
            </li>

            <li className="w-full md:w-auto">
              <a
                href="#services"
                className="font-bold block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                Actividade
              </a>
            </li>

            <li className="w-full md:w-auto">
              <a
                href="#contact"
                className="font-bold block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                Contacto
              </a>
            </li>

            <li className="w-full md:w-auto md:ml-5">
              <a
                href="#login"
                className="font-bold block rounded-lg p-2 px-4 text-white bg-verde hover:bg-verdeHover dark:bg-green-600 dark:hover:bg-green-700"
              >
                Login
              </a>
            </li>
          </ul>
          <button
            className="mt-5 text-verde rounded-lg p-2 dark:bg-slate-50 dark:text-slate-700 dark:text-verde md:ml-5 md:mt-0"
            onClick={handleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
