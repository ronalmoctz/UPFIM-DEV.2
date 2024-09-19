import React from "react";
import Carrusel from "./Carrusel";
import Title from "../../UI/Title";
const MainCarrusel = () => {
  return (
    <section  className="bg-white p-5 md:p-16 dark:bg-slate-700">
        <Title
          title="Nuestros mejores recuerdos."
          subtitle="Lo que hemos conseguido"
        />
        <Carrusel/>
    </section>
  );
};

export default MainCarrusel;
