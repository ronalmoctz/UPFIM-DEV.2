import React from "react";

const TallerCard = ({ data }) => {
  return (
    <div className="relative w-[273px] h-[380px] bg-gray-100 rounded-xl flex flex-col justify-between items-center p-6 shadow-md transition-transform transform hover:-translate-y-2 dark:bg-gray-900">
      {/* Nombre de la tarjeta */}
      <h1 className="font-semibold text-[22px] text-gray-900 tracking-wide mb-4 dark:text-gray-100">
        {data.name}
      </h1>

      {/* Imagen del taller */}
      <div className="flex-grow flex items-center justify-center mb-6">
        <img
          src={data.image}
          alt={data.name}
          className="object-cover w-[240px] h-[240px] rounded-lg"
        />
      </div>

      {/* Descripción */}
      <p className="text-[17px] text-gray-900 text-center font-light dark:text-gray-100">
        {data.frase}
      </p>
    </div>
  );
};

export default TallerCard;
