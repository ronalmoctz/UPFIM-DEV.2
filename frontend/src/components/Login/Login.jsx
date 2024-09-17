import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';
import { FaHome } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa6'; 
import { Link } from 'react-router-dom'; 
import logo from '../../assets/logo-borde.webp';
import fondoImg from '../../assets/poli.webp';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${fondoImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col  bg-opacity-30 backdrop-blur-lg  border-white border-2 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-bold self-center text-xl sm:text-2xl uppercase text-black">
          Bienvenido
        </div>

        <div className="flex justify-center mt-6">
          <img src={logo} alt="Logo" className="w-1/2 h-auto" />
        </div>

        <div className="relative mt-10 h-px">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="text-black font-bold  bg-opacity-20 backdrop-blur-lg px-4 text-xs  uppercase">Ingresa tus datos para entrar</span>
          </div>
        </div>

        <div className="mt-10">
          <form action="#">
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="font-semibold mb-1 text-xs sm:text-sm tracking-wide text-gray-900">
                Correo Electronico:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <FiMail className="h-6 w-6" />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-verde"
                  placeholder="E-Mail Address"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="font-semibold mb-1 text-xs sm:text-sm tracking-wide text-gray-900">
                Contraseña:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <FiLock className="h-6 w-6" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'} 
                  name="password"
                  className=" text-sm sm:text-base placeholder-gray-500 pl-10 pr-10 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-verde"
                  placeholder="Password"
                />
                <div
                  className="inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility} 
                >
                  {showPassword ? <FaEye className="h-6 w-6" /> : <FaEyeSlash className="h-6 w-6" />}
                </div>
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-verde hover:bg-verdeHover rounded py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Login</span>
                <HiArrowRight className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center mt-6">
          <Link to="/" className="inline-flex items-center font-bold text-white hover:text-gray-800 text-xs text-center">
            <FaHome className="h-6 w-6" />
            <span className="ml-2">¿Quieres regresar al inicio?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
