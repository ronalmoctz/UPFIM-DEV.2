import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";
import { showAlert } from "../../../Generales/Alerts/Alerts"; // SweetAlert import
import { Link } from "react-router-dom";
const schema = z.object({
  userName: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  adminName: z.string().min(1, "Admin name is required"),
  surnameP: z.string().min(1, "First surname is required"),
  surnameM: z.string().min(1, "Second surname is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
});

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    adminName: "",
    surnameP: "",
    surnameM: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationResult = schema.safeParse(formData);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.reduce(
        (acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        },
        {}
      );

      setErrors(errorMessages);
      showAlert(
        "error",
        "Form Validation Error",
        "Please correct the form errors."
      );
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:3000/api/admin/register", formData);
      showAlert("success", "Success", "Admin registered successfully!");
      setFormData({
        userName: "",
        password: "",
        adminName: "",
        surnameP: "",
        surnameM: "",
        email: "",
      });
    } catch (error) {
      showAlert(
        "error",
        "Error registering admin",
        error.response?.data?.message || error.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Usuario</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Ingrese su usuario"
          className="mt-2 w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.userName && (
          <p className="text-red-500 text-sm">{errors.userName}</p>
        )}
      </div>

      <div className="mb-4 relative">
        <label className="block text-gray-700 font-medium">Contraseña</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Ingrese su contraseña"
          className="mt-2 w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 bottom-[-30px] flex items-center text-gray-500 hover:text-green-600 transition duration-200"
        >
          {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </button>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Nombre</label>
        <input
          type="text"
          name="adminName"
          value={formData.adminName}
          onChange={handleChange}
          placeholder="Ingrese su nombre"
          className="mt-2 w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.adminName && (
          <p className="text-red-500 text-sm">{errors.adminName}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">
          Apellido Paterno
        </label>
        <input
          type="text"
          name="surnameP"
          value={formData.surnameP}
          onChange={handleChange}
          placeholder="Ingrese su apellido paterno"
          className="mt-2 w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.surnameP && (
          <p className="text-red-500 text-sm">{errors.surnameP}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">
          Apellido Materno
        </label>
        <input
          type="text"
          name="surnameM"
          value={formData.surnameM}
          onChange={handleChange}
          placeholder="Ingrese su apellido materno"
          className="mt-2 w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.surnameM && (
          <p className="text-red-500 text-sm">{errors.surnameM}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">
          Correo Electrónico
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ingrese su correo electrónico"
          className="mt-2 w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-verde hover:bg-verdeHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verde ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Subiendo..." : "Agregar"}
      </button>
      <Link
        to="/admins"
        className="block text-center mt-4 text-verde hover:underline hover:text-verdeHover"
      >
        Regresar
      </Link>
    </form>
  );
};

export default RegisterForm;
