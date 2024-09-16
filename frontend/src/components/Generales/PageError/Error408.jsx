import React from "react";
import { motion } from "framer-motion";
import timeoutImage from "../../../assets/weberror.webp"; 
const Error408 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="flex flex-col items-center"
      >
        <img
          src={timeoutImage}
          alt="408 Timeout"
          className="w-80 md:w-96"
        />
        <p className="text-5xl font-bold text-red-600 mt-8">
          Request Timeout
        </p>
        <p className="text-xl mt-4">
          It looks like the request took too long to complete. Please try again later.
        </p>
        <a
          href="/"
          className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition-colors"
        >
          Go back to home
        </a>
      </motion.div>
    </div>
  );
};

export default Error408;
