import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "../components/Admin/CrudActividades/Table/Table";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dash/admin" element={<Table />} />
      {/* Puedes agregar más rutas de administrador aquí */}
    </Routes>
  );
};

export default AdminRoutes;
