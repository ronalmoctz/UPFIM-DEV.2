import React from "react";
import Container from "../../ui/Container";
import Title from "../../ui/Title";
import { steps } from "../../constants";
import GuideCard from "./GuideCard";

const StepGuide = () => {
  return (
    <section className="p-5 dark:bg-slate-600 md:p-16">
      <Container>
        <Title
          title="METAS"
          subtitle="Cosas que conseguimos"
        />

        <div className="grid grid-cols-1 gap-12 text-centera md:grid-cols-3">
            {steps.map((step, index)=>(
                <GuideCard step={step} key={index}/>
            ))}
        </div>

      </Container>
    </section>
  );
};

export default StepGuide;
