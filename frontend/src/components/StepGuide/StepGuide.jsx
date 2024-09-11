import React from "react";
import Container from "../../ui/Container";
import Title from "../../ui/Title";
import { steps } from "../../constants";
import GuideCard from "./GuideCard";

const StepGuide = () => {
  return (
    <section className="bg-slate-400 p-5 dark:bg-slate-600 md:p-16">
      <Container>
        <Title
          title="How It Works"
          subtitle="Our step-by-step guide to finding your dream car"
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
