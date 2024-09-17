import React from "react";
import ContactForm from "./ContactForm";
import LocationSection from "./LocationSection";
import Title from "../UI/Title";

const ContactSection = () => {
  return (
    <section className="bg-white p-5 dark:bg-slate-700 md:p-10">
      <div className="py-20 px-4 mx-auto max-w-screen-md dark:bg-slate-700">
        <Title
          title="Contacta al departamento de Cultura & Deporte"
          subtitle="Puedes escribirnos por si tiene alguna duda o problema."
        />
        <ContactForm />
        <LocationSection />
      </div>
    </section>
  );
};

export default ContactSection;
