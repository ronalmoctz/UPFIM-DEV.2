import React, { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Admin/components/Sidebar";
import routes from "../constants/routesConfig";

const AdminRoutes = () => {
  // Log para depurar las rutas cargadas
  useEffect(() => {
    console.log("Rutas admin cargadas:", routes.admin);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Routes>
          {/* Redirección predeterminada al perfil */}
          <Route path="/" element={<Navigate to="perfil" replace />} />
          {routes.admin.map(({ path, component }, index) => (
            <Route
              key={index}
              path={path}
              element={React.createElement(component)}
            />
          ))}
          {/* Ruta para manejar rutas no encontradas */}
          <Route path="*" element={<div>Ruta no encontrada</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;
