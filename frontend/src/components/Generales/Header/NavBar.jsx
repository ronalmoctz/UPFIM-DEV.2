import { useState } from "react";
import { Link } from "react-router-dom"; // Importar Link de react-router-dom
import logo from "../../../assets/logo-borde.webp";
import { TbMoonStars, TbSunHigh, TbMenu2 } from "react-icons/tb";

const NavBar = ({ handleDarkMode, darkMode }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
      <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-3xl border-2 bg-slate-50 border-slate-400 bg-opacity-10 backdrop-blur-lg px-2 py-2 dark:bg-slate-800 dark:text-slate-300 dark:border-verde md:flex-row">
        <div className="flex w-full items-center justify-between md:flex-row">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="UPFIM Logo" className="h-10 w-auto md:h-12" />
          </Link>
          <button
            className="cursor-pointer rounded-full bg-verde p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
            onClick={handleToggleMenu}
          >
            <TbMenu2 className="text-2xl" />
          </button>
        </div>
        <div
          className={`${
            toggleMenu ? "block" : "hidden"
          } w-full flex-col md:flex md:flex-row md:w-auto md:items-center`}
        >
          <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
            <li className="w-full md:w-auto">
              <Link
                to="/"
                className="text-slate-950  font-bold block rounded-3xl p-2 px-4 hover:bg-verde hover:text-white dark:hover:bg-slate-700 dark:text-verde"
              >
                Inicio
              </Link>
            </li>

            <li className="w-full md:w-auto">
              <Link
                to="/talleres"
                className="text-slate-950 font-bold block rounded-3xl p-2 px-4 hover:bg-verde hover:text-white dark:hover:bg-slate-700 dark:text-verde"
              >
                Talleres
              </Link>
            </li>

            <li className="w-full md:w-auto">
              <Link
                to="/actividades"
                className="text-slate-950 font-bold block rounded-3xl p-2 px-4 hover:bg-verde hover:text-white dark:hover:bg-slate-700 dark:text-verde"
              >
                Actividades
              </Link>
            </li>

            <li className="w-full md:w-auto">
              <Link
                to="/contacto"
                className="text-slate-950 font-bold block rounded-3xl p-2 px-4 hover:bg-verde hover:text-white dark:hover:bg-slate-700 dark:text-verde"
              >
                Contacto
              </Link>
            </li>

            <li className="w-full md:w-auto ">
              <Link
                to="/login"
                className="text-slate-950 font-bold block rounded-3xl p-2 px-4 hover:bg-verde hover:text-white dark:hover:bg-slate-700 dark:text-verde"
              >
                Login
              </Link>
            </li>
          </ul>
          <button
            className="bg-verde mt-5 text-white rounded-full p-2 dark:bg-slate-50 dark:text-verde md:ml-5 md:mt-0"
            onClick={handleDarkMode}
          >
            {darkMode ? <TbSunHigh /> : <TbMoonStars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
