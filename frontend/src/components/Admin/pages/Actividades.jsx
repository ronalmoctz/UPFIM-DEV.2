// src/pages/Actividades.js
import React from "react";
import Header from "../components/Header";
import Table from "../CrudActividades/Table/Table";
const Actividades = () => {
  return (
    <div className="p-3">
        <Header
          title="Bienvenido a actividades"
          subtitle="Aquí puedes gestionar los eventos a programar"
        />
        <main className="max-w-7xl mx-auto lg:px-8">
          <Table />
        </main>
    </div>
  );
};

export default Actividades;
