import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import React, { useState } from "react";
import { showAlert } from "../Alerts/Alerts";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/sendEmail",
        formData
      );
      if (response.status === 200) {
        showAlert(
          "success",
          "Exito",
          "Tu mensaje ha sido enviado correctamente"
        );
      } else {
        showAlert("error", "Error", "Hubo un error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el email:", error);
      showAlert("error", "Error", "Hubo un error al enviar el mensaje");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 bg-white flex flex-col md:flex-row md:space-x-4  dark:bg-slate-700">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="firstName"
            className="block my-2 text-left text-sm font-medium text-gray-900"
          >
            Nombre:
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Ingrese su nombre"
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2">
          <label
            htmlFor="lastName"
            className="block my-2 text-left text-sm font-medium text-gray-900"
          >
            Apellidos:
          </label>
          <input
            type="text"
            name="lastName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Ingrese sus apellidos"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block my-2 text-left text-sm font-medium text-gray-900"
        >
          Correo:
        </label>
        <input
          type="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="abcde12345@gmail.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block my-2 text-left text-sm font-medium text-gray-900"
        >
          Asunto:
        </label>
        <input
          type="text"
          name="subject"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
          placeholder="Cual es tu duda/problema?"
          required
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block my-2 text-left text-sm font-medium text-gray-900"
        >
          Su mensaje:
        </label>
        <textarea
          rows="6"
          name="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
          placeholder="Redacta tu duda/problema..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-4 px-6 py-2 flex items-center justify-center text-white rounded-lg border-green-600 bg-green-600 hover:bg-green-700 transition-colors duration-300 hover:scale-105 w-full md:w-auto"
        >
          <span className="text-center">Enviar Mensaje</span>
          <FaPaperPlane className="ml-2" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
