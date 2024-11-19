import React from "react";
import { Routes, Route,  Navigate } from "react-router-dom";
import Sidebar from "../components/Admin/components/Sidebar";
// import routes from "../constants/routesConfig";
import Perfil from "../components/Admin/pages/Perfil";
import Calificaciones from "../components/Admin/pages/Perfil";
import Actividades from "../components/Admin/pages/Actividades";
import Talleres from "../components/Admin/pages/Talleres";
import Galleria from "../components/Admin/pages/Galleria";
import Admins from "../components/Admin/pages/Administradores";
import Alumnos from "../components/Admin/pages/Alumnos";
import Docentes from "../components/Admin/pages/Docentes";
import ChangePassword from "../components/Admin/pages/ChangePassword";
import FormInsert from "../components/Admin/CrudActividades/FormInsert/FormInsert";
import FormUpdate from "../components/Admin/CrudActividades/FormUpdate/FormUpdate";
const AdminRoutes = () => {
  return (
    <div>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/perfil" />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/calificaciones" element={<Calificaciones />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/insertActividades" element={<FormInsert />} />
          <Route path="/edit-products/:id_actividad" element={<FormUpdate />} />
          <Route path="/taller" element={<Talleres />} />
          <Route path="/galeria" element={<Galleria />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Routes>
    </div>
  );
};

export default AdminRoutes;
