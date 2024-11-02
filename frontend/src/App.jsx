import React from "react";
import { Route, Routes } from "react-router-dom";
import useDarkMode from "./Hooks/useDarkMode";
import MainRoutes from "./routes/MainRoutes.jsx";
const App = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  // const { role, isAuthenticated } = useAuth();

  return (
    <div className={`${darkMode ? "dark" : ""} font-onest`}>
      <Routes>
        {/* Rutas generales */}
        <Route
          path="/*"
          element={
            <MainRoutes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />

        {/* Rutas protegidas por rol */}
        {/* <Route path="/dash/*" element={isAuthenticated && role === 'admin' ? <AdminRoutes role={role} /> : <Navigate to="/login" replace />} />
              <Route path="/dash/*" element={isAuthenticated && role === 'alumno' ? <AlumnoRoutes role={role} /> : <Navigate to="/login" replace />} />
              <Route path="/dash/*" element={isAuthenticated && role === 'docente' ? <DocenteRoutes role={role} /> : <Navigate to="/login" replace />} /> */}
      </Routes>
    </div>
  );
};

export default App;
