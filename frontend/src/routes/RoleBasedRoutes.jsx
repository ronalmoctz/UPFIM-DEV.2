import React from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoute from "./ProtecedRoute";
import { useAuth } from "../Hooks/AuthContext";

const RoleBasedRoutes = () => {
  const location = useLocation();
  const { role } = useAuth();

  // Log para verificar la ruta actual y el rol
  console.log("Ruta actual:", location.pathname);
  console.log("Rol actual del usuario:", role);

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      {role === "admin" && (
        <Route
          path="admin/*"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
      )}

      {role === "alumno" && (
        <Route
          path="alumno/*"
          element={
            <ProtectedRoute requiredRole="alumno">
              <div>Dashboard Alumno (Pendiente de implementar)</div>
            </ProtectedRoute>
          }
        />
      )}

      {role === "docente" && (
        <Route
          path="docente/*"
          element={
            <ProtectedRoute requiredRole="docente">
              <div>Dashboard Docente (Pendiente de implementar)</div>
            </ProtectedRoute>
          }
        />
      )}

      {/* Redirigir si el rol no está definido */}
      <Route path="*" element={<Navigate to="/access-denied" replace />} />
    </Routes>
  );
};

export default RoleBasedRoutes;
