
import React from "react";
import { motion } from "framer-motion";
import err from "../../../assets/err404.webp";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="flex flex-col items-center"
      >
        <img
          src={err} // Reemplaza con la URL de tu imagen
          alt="404"
          className="w-80 md:w-96"
        />
        <p className="text-5xl font-bold text-verde mt-8">
          Oops! Page not found.
        </p>
        <a
          href="/"
          className="mt-8 px-6 py-3 bg-verde text-white rounded-lg shadow-lg hover:bg-verdeHover transition-colors"
        >
          Go back to home
        </a>

      </motion.div>
    </div>
  );
};

export default Error;
