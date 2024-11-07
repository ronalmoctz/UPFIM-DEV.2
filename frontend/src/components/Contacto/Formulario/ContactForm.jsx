import { FaPaperPlane } from "react-icons/fa";
import React from "react";
import { useContactForm } from "./useContactForm";

const ContactForm = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 bg-white flex flex-col md:flex-row md:space-x-4 dark:bg-slate-700">
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
            required
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
          placeholder="¿Cuál es tu duda/problema? (máximo 20 palabras)"
          required
          value={formData.subject}
          onChange={(e) => {
            const wordCount = e.target.value.trim().split(/\s+/).filter(Boolean).length;
            if (wordCount <= 20) {
              handleChange(e);
            }
          }}
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
          placeholder="Redacta tu duda/problema... (máximo 100 palabras)"
          required
          value={formData.message}
          onChange={(e) => {
            const wordCount = e.target.value.trim().split(/\s+/).filter(Boolean).length;
            if (wordCount <= 100) {
              handleChange(e);
            }
          }}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-4 px-6 py-2 flex items-center justify-center text-white rounded-lg border-verde bg-verde hover:bg-verdeHover transition-colors duration-300 hover:scale-105 w-full md:w-auto ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <span className="text-center">
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </span>
          <FaPaperPlane className="ml-2" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
