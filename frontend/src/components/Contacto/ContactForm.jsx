import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <form action="#">
      <div className="mt-5 bg-white flex flex-col md:flex-row md:space-x-4  dark:bg-slate-700">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="firstName"
            className="block my-2 text-left text-sm font-medium text-gray-900"
          >
            First Name
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter First Name"
            required
          />
        </div>
        <div className="w-full md:w-1/2">
          <label
            htmlFor="lastName"
            className="block my-2 text-left text-sm font-medium text-gray-900"
          >
            Last Name
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Last Name"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block my-2 text-left text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="abc@geeksforgeeks.org"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block my-2 text-left text-sm font-medium text-gray-900"
        >
          Subject
        </label>
        <input
          type="text"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
          placeholder="What issue/suggestion do you have?"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block my-2 text-left text-sm font-medium text-gray-900"
        >
          Your message
        </label>
        <textarea
          rows="6"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
          placeholder="Query/Suggestion..."
        />
      </div>
      {/* Botón centrado con icono de enviar */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-4 px-6 py-2 flex items-center justify-center text-white rounded-lg border-green-600 bg-green-600 hover:bg-green-700 transition-colors duration-300 hover:scale-105 w-full md:w-auto"
        >
          <span className="text-center">Send message</span>
          <FaPaperPlane className="ml-2" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
