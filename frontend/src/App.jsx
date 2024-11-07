import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtecedRoute.jsx";
import useDarkMode from "./Hooks/useDarkMode";
import MainRoutes from "./routes/MainRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";

const App = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
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
        <Route
          path="/dash/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/dash/*"
          element={
            isAuthenticated && role === "alumno" ? (
              <AlumnoRoutes role={role} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/dash/*"
          element={
            isAuthenticated && role === "docente" ? (
              <DocenteRoutes role={role} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        /> */}
      </Routes>
    </div>
  );
};

export default App;
