import React from "react";
import Header from "../../components/Header";
import RegisterForm from "./RegisterForm";
const Talleres = () => {
  return (
    <div className="flex-1 p-3 bg-white">
      <Header
        title="Bienvenido a Talleres"
        subtitle="Aquí puedes gestionar los talleres"
      />
      <RegisterForm />
    </div>
  );
};

export default Talleres;
