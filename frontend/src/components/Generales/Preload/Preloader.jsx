import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../../public/svg/logo.svg";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2100);

    return () => clearTimeout(timeout);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-green-300"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
      >
        <div className="w-48 h-48 flex items-center justify-center bg-white bg-opacity-20 rounded-3xl shadow-lg">
          <motion.img
            src={logo}
            alt="Preloader Logo"
            className="w-40 h-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <motion.h1
          className="mt-4 text-2xl font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
        >
          Bienvenido
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
