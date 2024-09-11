import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';
import { BsPersonPlus } from 'react-icons/bs';
import logo from '../../assets/logo-upfim.webp';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          Bienvenido
        </div>

        <div className="flex justify-center mt-6">
          <img src={logo} alt="Logo" className="w-1/2 h-auto" />
        </div>

        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-xs text-gray-500 uppercase">Ingresa tus datos para entrar</span>
          </div>
        </div>

        <div className="mt-10">
          <form action="#">
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <FiMail className="h-6 w-6" />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="E-Mail Address"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <FiLock className="h-6 w-6" />
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Login</span>
                <HiArrowRight className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center mt-6">
          <a href="#" target="_blank" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
            <BsPersonPlus className="h-6 w-6" />
            <span className="ml-2">You don't have an account?</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
