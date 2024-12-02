import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/logo-upfim.webp";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center z-50bg-green-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(144,238,144,0.3),rgba(255,255,255,0))]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
      >
        <motion.div
          className="w-48 h-48 flex items-center justify-center bg-white bg-opacity-20 rounded-3xl shadow-lg"
          animate={{ scale: [1.01, 1.05, 1] }}
          transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
        >
          <motion.img
            src={logo}
            alt="Preloader Logo"
            className="w-40 h-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.h1
          className="mt-4 text-2xl font-semibold text-white"
          animate={{ scale: [1.02, 1.08, 1.02] }}
          transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
        >
          Bienvenido
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
