import React from "react";
import Container from "../../Generales/UI/Container";
import Title from "../../Generales/UI/Title";
import DocenteList from "./DocenteList";

const Docentes = () => {
  return (
    <section className="bg-slate-300 p-5 dark:bg-slate-700 md:p-16">
      <Container>
        <Title
          title="Docentes"
          subtitle="Conoce nuestros docentes que imparten talleres"
        />
        <DocenteList />
      </Container>
    </section>
  );
};

export default Docentes;
