import React from "react";
import Container from "../../UI/Container";
import Title from "../../UI/Title";
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
