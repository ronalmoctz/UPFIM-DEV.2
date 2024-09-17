import React from "react";
import Container from "../UI/Container";
import Title from "../UI/Title";
import CardGrid from "./CardGrid";
const Talleres = () => {
  return (
    <section className=" p-10 dark:bg-slate-700 md:p-20">
        <div className="p-6"></div>
      <Container>
        <Title
          title="Talleres"
          subtitle="Conoce nuestros todos los talleres que ofrece la UPFIM"
        />
        <CardGrid />
      </Container>
    </section>
  );
};

export default Talleres;
