import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import logo from '../../public/img/logo.webp'
const NavBar = () => {
  // Estado para controlar el menú colapsable
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el clic del botón del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo con imagen */}
          <div className="flex items-center">
            <a href="#">
            <img
                src={logo} 
                alt="Logo"
                className="h-12 w-auto" 
              />
            </a>
          </div>

          {/* Opciones centradas en el medio (ocultas en pantallas pequeñas) */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Talleres</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Actividades</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contacto</a>
          </div>

          {/* Botón en la derecha */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Botón
            </button>
          </div>

          {/* Icono del menú (visible en pantallas pequeñas) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <HiOutlineX size={30} /> : <IoMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable (visible solo en pantallas pequeñas cuando se hace clic en el icono) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Talleres</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Actividades</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Contacto</a>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Botón
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
