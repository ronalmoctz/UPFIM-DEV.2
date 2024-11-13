import React from "react";
import Title from "../../Generales/UI/Title";
import Container from "../../Generales/UI/Container";
import { tallerInfo } from "../../../constants";
import TallerCard from "./TallerCard";

const Taller = () => {
  return (
    <section className="bg-white p-5 md:p-16 dark:bg-slate-700">
      <Container>
        <Title
          title="Nuestros talleres"
          subtitle="Te ofrecemos los siguientes talleres"
        />
        <div className="flex flex-col md:flex-row gap-5">
          {tallerInfo.map((data, index) => (
            <TallerCard key={index} data={data} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Taller;
