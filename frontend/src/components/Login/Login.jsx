import React, { useState } from 'react';
import {
  TbEye,
  TbEyeClosed,
  TbArrowBigRightLineFilled,
  TbHomeMove,
  TbPasswordFingerprint,
  TbUserHexagon,
} from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import fondoImg from '../../assets/poli.webp';
import useAuth from '../../Hooks/useAuth';
import { z } from 'zod';
import { showAlert } from '../Generales/Alerts/Alerts';

// Scehma for validation
const loginSchema = z.object({
  userName: z
    .string()
    .min(1, 'El nombre de usuario es requerido')
    .max(50, 'El nombre de usuario es demasiado largo'),
  password: z
    .string()
    .min(8, 'la contrasena debe ser de almenos 8 caracteres')
    .max(50, 'la contrasena es demaciado larga'),
});

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  // Mostrar/ocultar contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !password) {
      showAlert(
        'error',
        'Campos vacíos',
        'Por favor, ingresa tu usuario y contraseña'
      );
      return;
    }

    try {
      // Validar usando Zod
      loginSchema.parse({ userName, password });

      const isAuthenticated = await handleLogin(userName, password);

      if (isAuthenticated) {
        // Mensaje de éxito y redirección solo si la autenticación fue exitosa
        showAlert('success', 'Bienvenido', 'Tus datos son correctos');
        setUserName('');
        setPassword('');
        navigate('/dash');
      } else {
        // Show message
        showAlert('error', 'Error', 'Nombre de usuario o contrasena no valida');
      }
    } catch (error) {
      showAlert('error', 'Error', 'Datos invalidos');
      console.error('Error al iniciar sesión', error);
    }
  };
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${fondoImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
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
            <span className="text-black font-bold  bg-opacity-20 backdrop-blur-lg px-4 text-xs  uppercase">
              Ingresa tus datos para entrar
            </span>
          </div>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="font-semibold mb-1 text-xs sm:text-sm tracking-wide text-gray-900"
              >
                Usuario:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <TbUserHexagon className="h-6 w-6" />
                </div>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  name="email"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-verde"
                  placeholder="Ingrese su usuario:"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="font-semibold mb-1 text-xs sm:text-sm tracking-wide text-gray-900"
              >
                Contraseña:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <TbPasswordFingerprint className="h-6 w-6" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className=" text-sm sm:text-base placeholder-gray-500 pl-10 pr-10 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-verde"
                  placeholder="Ingrese su contraseña"
                  autoComplete="off"
                />
                <div
                  className="inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <TbEye className="h-6 w-6" />
                  ) : (
                    <TbEyeClosed className="h-6 w-6" />
                  )}
                </div>
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-verde hover:bg-verdeHover rounded py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Entrar</span>
                <TbArrowBigRightLineFilled className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center font-bold text-white hover:text-gray-800 text-xs text-center"
          >
            <TbHomeMove className="h-6 w-6" />
            <span className="ml-2">¿Quieres regresar al inicio?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
