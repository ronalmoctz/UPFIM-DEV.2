import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { z } from "zod";
import Header from "../components/Header";

const passwordSchema = z
  .object({
    oldPassword: z.string().nonempty("La contraseña antigua es requerida"),
    newPassword: z
      .string()
      .min(10, "La nueva contraseña debe tener al menos 10 caracteres"),
    confirmPassword: z.string().nonempty("Debes confirmar la nueva contraseña"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

const passwordStrength = (password) => {
  const lengthCriteria = password.length >= 10;
  const upperCaseCriteria = /[A-Z]/.test(password);
  const lowerCaseCriteria = /[a-z]/.test(password);
  const numberCriteria = /\d/.test(password);
  const specialCharCriteria = /[!@#$%^&*]/.test(password);

  const criteriaMet = [
    lengthCriteria,
    upperCaseCriteria,
    lowerCaseCriteria,
    numberCriteria,
    specialCharCriteria,
  ].filter(Boolean).length;

  return criteriaMet;
};

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [strength, setStrength] = useState(0);

  const handleBlur = (field) => {
    const result = passwordSchema.safeParse({
      oldPassword,
      newPassword,
      confirmPassword,
    });
    if (!result.success) {
      const errorObject = result.error.format();
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: errorObject[field]?._errors[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { oldPassword, newPassword, confirmPassword };

    const result = passwordSchema.safeParse(formData);

    if (!result.success) {
      const errorObject = result.error.format();
      setErrors({
        oldPassword: errorObject.oldPassword?._errors[0],
        newPassword: errorObject.newPassword?._errors[0],
        confirmPassword: errorObject.confirmPassword?._errors[0],
      });
    } else {
      setErrors({});
      console.log("Formulario enviado con éxito", formData);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setStrength(0);
    }
  };

  const handleNewPasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);
    setStrength(passwordStrength(password));
  };

  const getStrengthColor = (strength) => {
    if (strength === 0) return "transparent";
    if (strength < 3) return "bg-red-500";
    if (strength < 5) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="flex-1 p-3 bg-white">
      <Header
        title="Bienvenido a docentes"
        subtitle="Aquí puedes gestionar las fotos icónicas"
      />
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md"
      >
        <h2 className="text-2xl text-center mb-4">Actualizar Contraseña</h2>

        {/* Contraseña Antigua */}
        <div className="mb-4">
          <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
            Contraseña Antigua
          </label>
          <div className="relative">
            <input
              id="oldPassword"
              type={showOldPassword ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              onBlur={() => handleBlur("oldPassword")}
              className={`w-full px-4 py-2 border rounded-md ${errors.oldPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Contraseña antigua"
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute right-3 top-3 text-xl"
            >
              {showOldPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
          {errors.oldPassword && (
            <p className="text-xs text-red-500 mt-1">{errors.oldPassword}</p>
          )}
        </div>

        {/* Nueva Contraseña */}
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
            Nueva Contraseña
          </label>
          <div className="relative">
            <input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={handleNewPasswordChange}
              onBlur={() => handleBlur("newPassword")}
              className={`w-full px-4 py-2 border rounded-md ${errors.newPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Nueva contraseña"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-3 text-xl"
            >
              {showNewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
          {errors.newPassword && (
            <p className="text-xs text-red-500 mt-1">{errors.newPassword}</p>
          )}
        </div>

        {/* Medidor de Contraseña */}
        <div className="mb-4">
          <div className="w-full h-1 bg-gray-300 rounded-md">
            <div
              className={`h-full ${getStrengthColor(strength)} rounded-md transition-all`}
              style={{ width: `${(strength / 5) * 100}%` }}
            />
          </div>
          <p className="text-sm mt-1 text-gray-600">
            Seguridad: {strength < 3 ? "Bajo" : strength < 5 ? "Medio" : "Fuerte"}
          </p>
        </div>

        {/* Confirmar Nueva Contraseña */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirmar Nueva Contraseña
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => handleBlur("confirmPassword")}
              className={`w-full px-4 py-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Confirmar nueva contraseña"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-xl"
            >
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Botón de Actualizar */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Actualizar Contraseña
        </button>

        {/* Requisitos de Contraseña */}
        <div className="mt-6">
          <p className="text-sm font-medium text-gray-700">
            <strong>Requisitos de la contraseña:</strong>
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
            <li style={{ color: newPassword.length >= 10 ? "green" : "red" }}>
              {newPassword.length >= 10 ? "✔️" : "❌"} Al menos 10 caracteres de longitud.
            </li>
            <li style={{ color: /[A-Z]/.test(newPassword) ? "green" : "red" }}>
              {/[A-Z]/.test(newPassword) ? "✔️" : "❌"} Al menos una letra mayúscula.
            </li>
            <li style={{ color: /[a-z]/.test(newPassword) ? "green" : "red" }}>
              {/[a-z]/.test(newPassword) ? "✔️" : "❌"} Al menos una letra minúscula.
            </li>
            <li style={{ color: /\d/.test(newPassword) ? "green" : "red" }}>
              {/\d/.test(newPassword) ? "✔️" : "❌"} Al menos un número.
            </li>
            <li style={{ color: /[!@#$%^&*]/.test(newPassword) ? "green" : "red" }}>
              {/[!@#$%^&*]/.test(newPassword) ? "✔️" : "❌"} Al menos un carácter especial.
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
