import React from "react";
import AcordeonFunction from "./AcordeonFunction";

const Questions = () => {
  return (
    <div className="text-verde font-bold p-4 bg-gray-100 rounded-lg dark:bg-gray-900">
      <AcordeonFunction
        title="¿Que es el departament de Cultura & Deportes?"
        answer="I like to use iOS products"
      />
      <AcordeonFunction
        title="¿Por que debo cursar un taller?"
        answer="I like to use Tailwind"
      />
      <AcordeonFunction title="¿Cuanto tiempo dura el cursar un taller?" answer="I am using Supabase!" />
      <AcordeonFunction title="¿Cuanto tiempo dura el cursar un taller?" answer="I am using Supabase!" />
      <AcordeonFunction title="¿Cuanto tiempo dura el cursar un taller?" answer="I am using Supabase!" />
      <AcordeonFunction title="¿Cuanto tiempo dura el cursar un taller?" answer="I am using Supabase!" />
    </div>
  );
};

export default Questions;
