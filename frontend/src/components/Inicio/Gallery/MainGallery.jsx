import React from "react";
import Gallery from "./Gallery";
import Title from "../../Generales/UI/Title";
import Container from "../../Generales/UI/Container";
const MainGallery = () => {
  return (
    <section className="bg-white p-5 md:p-16 dark:bg-slate-700">
      <Container>
        <Title
          title="Nuestros mejores momentos"
          subtitle="Rememora nuestros recuerdos"
        />
        <Gallery/>
      </Container>
    </section>
  );
};

export default MainGallery;
