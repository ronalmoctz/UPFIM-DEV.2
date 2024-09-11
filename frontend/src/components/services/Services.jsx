import React from "react";
import Title from "../../ui/Title";
import Container  from "../../ui/Container";
import { carsInfo } from "../../constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="p-5 md:p-16 dark:bg-slate-700">
      <Container>
        <Title
          title="Nuestros Servicios"
          subtitle="Nosotros ofecemos un gran servicio para ayudarte a encontrar el carro perfecto que necesitas"
        />
        <div className="flex flex-col md:flex-row gap-5">
            {
                carsInfo.map((data, index)=>(
                    <ServiceCard key={index} data={data}/>
                ))
            }
        </div>
      </Container>
    </section>
  );
};

export default Services;
