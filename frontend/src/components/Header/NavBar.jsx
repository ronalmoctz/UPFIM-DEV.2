import { useState } from "react";
import { menuItems } from "../../constants";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaSun,FaMoon } from "react-icons/fa";

const NavBar = ({ handleDarkMode,darkMode}) => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
      <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-800 dark:text-slate-300 md:flex-row">
        <div className="flex w-full items-center justify-between md:flex-row">
          <h1 className="font-bold text-2xl">
            <a href="#">Cars Vista</a>
          </h1>
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
            {menuItems.map((item, index) => (
              <li key={index} className="w-full md:w-auto">
                <a
                  href={item.href}
                  className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-5 rounded-full p-2 dark:bg-slate-50 dark:text-slate-700 md:ml-5 md:mt-0" onClick={handleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
