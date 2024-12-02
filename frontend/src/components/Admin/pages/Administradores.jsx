import React from "react";
import Header from "../components/Header";
import Table from "../CrudAdminis/Table/Index";
const Administradores = () => {
  return (
    <div className="flex-1 p-3 bg-white">
      <Header
        title="Bienvenido a administradores"
        subtitle="Aquí puedes gestionar los administradores"
      />
      <main className="max-w-7xl mx-auto lg:px-8">
      <Table />  
      </main>
    </div>
  );
};

export default Administradores;
