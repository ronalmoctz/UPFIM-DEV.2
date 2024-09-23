import React from "react";
import ContactForm from "../components/Contacto/Formulario/ContactForm";
import LocationSection from "../components/Contacto/Mapa/LocationSection";
import Title from "../components/Generales/UI/Title";
import MainQuestions from "../components/Contacto/Questions/MainQuestions";

const ContactSection = () => {
  return (
    <section className="bg-white p-5 dark:bg-slate-700 md:p-10">
      <div className="py-20 px-4 mx-auto max-w-screen-md dark:bg-slate-700">
        <Title
          title="Contacta al departamento de Cultura & Deporte"
          subtitle="Puedes escribirnos por si tiene alguna duda o problema."
        />
        <ContactForm />
        <MainQuestions />
        <LocationSection />
      </div>
    </section>
  );
};

export default ContactSection;
