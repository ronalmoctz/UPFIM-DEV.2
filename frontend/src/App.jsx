import React, { useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./components/Generales/Header/NavBar";
import Footer from "./components/Generales/Footer/Footer";
import useDarkMode from "./Hooks/useDarkMode";
import Preloader from "./components/Generales/Loader/Preload";
const Inicio = lazy(() => import("./pages/MainHome"));
const CatalogoTalleres = lazy(() => import("./pages/MainTaller"));
const ActividadMain = lazy(() => import("./pages/MainActividad"));
const Contact = lazy(() => import("./pages/MainContacto"));
const Login = lazy(() => import("./components/Login/Login"));
const Error404 = lazy(() => import("./components/Generales/PageError/Error404"));
const Error408 = lazy(() => import("./components/Generales/PageError/Error408"));
const Table = lazy(() => import("./components/Admin/CrudActividades/Table/Table"));

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -50,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.2,
};

const App = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <div className={`${darkMode ? "dark" : ""} font-onest`}>
      {loading && <Preloader setLoading={setLoading} />}
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <>
                    <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <Inicio darkMode={darkMode} />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/talleres"
                element={
                  <>
                    <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <CatalogoTalleres />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/actividades"
                element={
                  <>
                    <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <ActividadMain />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/contacto"
                element={
                  <>
                    <NavBar handleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <Contact />
                    <Footer />
                  </>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Error404 />} />
              <Route path="/dash" element={<Table />} />
              <Route path="/408" element={<Error408 />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
