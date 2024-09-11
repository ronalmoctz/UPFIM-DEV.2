import React from "react";
import Container from "../../ui/Container";
import Title from "../../ui/Title";
import ReviewList from "./ReviewList";

const Reviews = () => {
  return (
    <section className="bg-slate-300 p-5 dark:bg-slate-700 md:p-16">
      <Container>
        <Title
          title="Lo que nuestros clientes opinan"
          subtitle="Nosotros nos encargamos que nuestros clientes esten satifechos"
        />
        <ReviewList />
      </Container>
    </section>
  );
};

export default Reviews;
