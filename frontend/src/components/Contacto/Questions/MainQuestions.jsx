import React from "react";
import Questions from "./Questions";
import Title from "../../Generales/UI/Title";
import Container from "../../Generales/UI/Container";
const MainQuestions = () => {
  return (
    <section className="bg-white p-5 md:p-16 dark:bg-slate-700">
      <Container>
        <Title
          title="Tienes dudas"
          subtitle="Aqui estan unas cuestiones relacionadas con el departamento de cultura y deporte"
        />
        <Questions />
      </Container>
    </section>
  );
};

export default MainQuestions;
