import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Admin/components/Sidebar";
import routes from "../constants/routesConfig";

const AdminRoutes = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Routes>
          {routes.admin.map(({ path, component }, index) => (
            <Route
              key={index}
              path={path}
              element={React.createElement(component)}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;
