import React from "react";
import Title from "../../Generales/UI/Title";
import Container from "../../Generales/UI/Container";
import { tallerInfo } from "../../../constants";
import TallerCard from "./TallerCard";

const Taller = () => {
  return (
    <section className="bg-white py-2 md:py-2 dark:bg-slate-700">
      <Container>
        <Title
          title="Nuestros talleres"
          subtitle="Te ofrecemos los siguientes talleres"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-20 gap-x-16 mt-14 justify-items-center">
          {tallerInfo.map((data, index) => (
            <TallerCard key={index} data={data} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Taller;
