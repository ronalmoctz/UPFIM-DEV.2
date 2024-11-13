import React from "react";

const TallerCard = ({ data }) => {
  return (
    <div className="relative w-[212px] h-[312px] bg-black rounded-[12px] flex flex-col justify-between items-center">
      {/* Nombre de la tarjeta */}
      <h1 className="absolute left-[9.43%] right-[46.7%] top-[6.41%] font-semibold text-[19px] leading-[24px] text-white tracking-[-0.04em]">
        {data.name}
      </h1>

      {/* Imagen de fondo */}
      <div className="absolute w-full h-full bg-gradient-to-b from-[#4E575F] to-[#C3DEEF] blur-[36px] top-[65.54%] left-[-18.63%] right-[-16.04%] bottom-[-25.64%] rounded-lg">
        {/* Fondo blur */}
      </div>

      {/* Imagen del taller */}
      <div className="mt-2 font-semibold uppercase tracking-widest">
        <img src={data.image} alt={data.name} className="object-cover" />
      </div>

      {/* Descripción */}
      <p className="absolute left-[31.13%] right-[9.43%] top-[86.54%] bottom-[6.41%] text-[17px] leading-[22px] text-white tracking-[-0.04em] font-space-grotesk text-right flex items-end">
        {data.frase}
      </p>
    </div>
  );
};

export default TallerCard;
