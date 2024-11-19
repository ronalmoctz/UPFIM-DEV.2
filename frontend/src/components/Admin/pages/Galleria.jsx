import React from "react";
import Header from "../components/Header";
import Table from "../CrudGalleria/Table/Table";
const Galleria = () => {
  return (
    <div className="flex-1 p-3 bg-white">
      <Header
        title="Bienvenido a galleria"
        subtitle="Aquí puedes gestionar las fotos"
      />
      <main className="max-w-7xl mx-auto lg:px-8">
        <Table />
      </main>
    </div>
  );
};

export default Galleria;
