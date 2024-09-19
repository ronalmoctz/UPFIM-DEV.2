import { TbMenu2 } from "react-icons/tb";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from '../../../../assets/logo-upfim.webp';

const Hearder = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleSidebar}
            >
              <TbMenu2 className="text-2xl" />
            </button>
            <a href="" className="flex ms-2 md:me-24">
              <img 
                src={Logo} 
                alt="Logo" 
                className="h-8 w-auto me-3" 
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-verde">
                UPFIM
              </span>
            </a>
          </div>
          <button
            className="dark:bg-verde dark:text-white rounded-full p-2 bg-verde text-white"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Hearder;
