import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Perfil from "../pages/Perfil";
import Calificaciones from "../pages/Calificaciones";
import Actividades from "../pages/Actividades";
import Talleres from "../pages/Talleres";
import Galleria from "../pages/Galleria";
import Admins from "../pages/Administradores";
import Alumnos from "../pages/Alumnos";
import Docentes from "../pages/Docentes";
import ChangePassword from "../pages/ChangePassword";
import FormInsert from "../CrudActividades/FormInsert/FormInsert";
import FormUpdate from "../CrudActividades/FormUpdate/FormUpdate";
const App = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/perfil" />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/calificaciones" element={<Calificaciones />} />

          <Route path="/actividades" element={<Actividades />} />
          <Route path="/insertActividades" element={<FormInsert />} />
          <Route path="/edit-products/:id_actividad" element={<FormUpdate />} />

          <Route path="/talleres" element={<Talleres />} />
          <Route path="/galeria" element={<Galleria />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;