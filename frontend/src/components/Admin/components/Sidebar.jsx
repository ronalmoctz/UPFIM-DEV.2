import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assets/admin.png";
import img from "../../../assets/logo-borde.webp";
import { CgProfile } from "react-icons/cg";
import {
  FaStar,
  FaRegCalendarAlt,
  FaPalette,
  FaUserGraduate,
} from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdAdminPanelSettings, MdOutlinePassword } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed inset-y-0 left-0 w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } 
    md:translate-x-0 transition-transform duration-300 ease-in-out shadow-lg bg-[#2b2b2b] text-white z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Admin" className="w-10 h-10 rounded-full" />
            <h2 className="text-xl font-semibold">Administrador</h2>
          </div>
          <button onClick={toggleSidebar} className="text-white md:hidden">
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <img
            src={img}
            alt="UPFIM Logo"
            className="w-32 h-auto md:w-35 lg:w-30"
          />
        </div>

        <nav className="mt-4">
          <NavLink
            to="perfil"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-200 mb-4 ${
                isActive
                  ? "bg-[#60a611] text-white"
                  : "hover:bg-blue-700 text-white"
              }`
            }
          >
            <CgProfile className="mr-3" size={20} />
            Perfil
          </NavLink>

          <NavLink
            to="calificaciones"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-200 mb-4 ${
                isActive
                  ? "bg-[#60a611] text-white"
                  : "hover:bg-blue-700 text-white"
              }`
            }
          >
            <FaStar className="mr-3" size={20} />
            Calificaciones
          </NavLink>

          <NavLink
            to="actividades"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-200 mb-4 ${
                isActive
                  ? "bg-[#60a611] text-white"
                  : "hover:bg-blue-700 text-white"
              }`
            }
          >
            <FaRegCalendarAlt className="mr-3" size={20} />
            Actividades
          </NavLink>

          <NavLink
            to="talleres"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-200 mb-4 ${
                isActive
                  ? "bg-[#60a611] text-white"
                  : "hover:bg-blue-700 text-white"
              }`
            }
          >
            <FaPalette className="mr-3" size={20} />
            Talleres
          </NavLink>

          <NavLink
            to="galleria"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-200 mb-4 ${
                isActive
                  ? "bg-[#60a611] text-white"
                  : "hover:bg-blue-700 text-white"
              }`
            }
          >
            <GrGallery className="mr-3" size={20} />
            Galería
          </NavLink>

          <NavLink
            to="admins"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-200 mb-4 ${
                isActive
                  ? "bg-[#60a611] text-white"
                  : "hover:bg-blue-700 text-white"
              }`
            }
          >
            <MdAdminPanelSettings className="mr-3" size={20} />
            Administradores
          </NavLink>

          <NavLink
            to="alumnado"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-200 mb-4 ${
                isActive
                  ? "bg-[#60a611] text-white"
                  : "hover:bg-blue-700 text-white"
              }`
            }
          >
            <FaUserGraduate className="mr-3" size={20} />
            Alumnos
          </NavLink>

          <NavLink
            to="docentes"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-200 mb-4 ${
                isActive
                  ? "bg-[#60a611] text-white"
                  : "hover:bg-blue-700 text-white"
              }`
            }
          >
            <LiaChalkboardTeacherSolid className="mr-3" size={20} />
            Docentes
          </NavLink>

          <NavLink
            to="changePassword"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-200 mb-4 ${
                isActive
                  ? "bg-[#60a611] text-white"
                  : "hover:bg-blue-700 text-white"
              }`
            }
          >
            <MdOutlinePassword className="mr-3" size={20} />
            Contraseña
          </NavLink>
        </nav>
      </div>
      <div className="flex-1 flex flex-col md:ml-64">
        <header className="flex items-center justify-between bg-[#60a611] p-4 shadow-md md:hidden">
          <button onClick={toggleSidebar} className="text-[#ffffff]">
            <AiOutlineMenu size={24} />
          </button>
          <h1 className="text-xl font-semibold text-[#ffffff]">SICD</h1>
        </header>
      </div>
    </div>
  );
};

export default Sidebar;