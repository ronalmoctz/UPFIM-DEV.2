import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "../components/Admin/CrudActividades/Table/Table";
import ProtectedRoute from "./ProtecedRoute";

// Ejemplo de como son la rutas protedigas ya asignadas por rol
const AdminRoutes = ({ role }) => {
  <ProtectedRoute role={role} requiredRole="admin" element={<Table />}>
    <Routes>
      <Route path="/dash/admin" />
      <Route />
    </Routes>
  </ProtectedRoute>;
};

export default AdminRoutes;
