import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "../components/Generales/Header/NavBar";
import Inicio from "../pages/MainHome";
import CatalogoTalleres from "../pages/MainTaller";
import ActividadMain from "../pages/MainActividad";
import Contact from "../pages/MainContacto";
import Login from "../components/Login/Login";
import Footer from "../components/Generales/Footer/Footer";
import Error404 from "../components/Generales/PageError/Error404";
import Preloader from "../components/Generales/Preload/Preloader";

const pageVariants = {
  initial: { opacity: 0, y: "-50px" },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: "-50px" },
};

const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

const MainRoutes = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(location.pathname === "/");

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          {!isLoginPage && <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                  >
                    <Inicio darkMode={darkMode} />
                  </motion.div>
                }
              />
              <Route
                path="/talleres"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                  >
                    <CatalogoTalleres />
                  </motion.div>
                }
              />
              <Route
                path="/actividades"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                  >
                    <ActividadMain />
                  </motion.div>
                }
              />
              <Route
                path="/contacto"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                  >
                    <Contact />
                  </motion.div>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="*"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                  >
                    <Error404 />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
          {!isLoginPage && <Footer />}
        </>
      )}
    </>
  );
};

export default MainRoutes;
