import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "../components/Admin/CrudActividades/Table/Table";
import ProtectedRoute from "./ProtecedRoute";
import { useAuth } from "../Hooks/AuthContext";

const AdminRoutes = () => {
  const { role } = useAuth();

  return (
    <ProtectedRoute role={role} requiredRole="admin">
      <Routes>
        <Route path="/dash/admin" element={<Table />} />
      </Routes>
    </ProtectedRoute>
  );
};

export default AdminRoutes;
