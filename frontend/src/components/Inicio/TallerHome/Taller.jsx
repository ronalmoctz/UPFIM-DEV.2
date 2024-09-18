import React from "react";
import Title from "../../UI/Title";
import Container from "../../UI/Container";
import { tallerInfo } from "../../../constants";
import TallerCard from "./TallerCard";

const Taller = () => {
  return (
    <section className="bg-slate-400 p-5 md:p-16 dark:bg-slate-700">
      <Container>
        <Title
          title="Nuestros talleres"
          subtitle="Te ofrecemos los sifuientes talleres"
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