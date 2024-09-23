import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormActividad from "./Forms/FormActividad";
import ActividadesTable from "./Table/ActividadesTable";
import UpdateActividadForm from "./Forms/UpdateActividadForm";
const MainCrud = () => {
  return (
    <div>
      <Router>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <Routes>
            <Route path="/" element={<ActividadesTable />} />
            <Route path="/insertActividad" element={<FormActividad />} />
            <Route
              path="/editActividad/:id_actividad"
              element={<UpdateActividadForm />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default MainCrud;
