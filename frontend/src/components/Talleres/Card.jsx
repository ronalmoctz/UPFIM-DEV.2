import React from "react";

const Card = ({ taller }) => {
  return (
    <div className="card relative max-w-[35ch] rounded-lg overflow-hidden transition-transform duration-500 ease-in-out group shadow-lg">
      {/* Imagen de fondo */}
      <img
        src={taller.img_url}
        alt={taller.nombre}
        className="w-full h-[450px] object-cover"
      />

      {/* Contenido de la tarjeta */}
      <div className="card-content absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.3)] to-black transform translate-y-2/3 transition-transform duration-500 ease group-hover:translate-y-0">
        <h2 className="card-title relative text-lg font-semibold text-white">
          Taller: {taller.nombre}
          <span className="absolute left-[-1.5rem] bottom-[-2px] w-[calc(100% + 1.5rem)] h-[4px] bg-green-400 scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 origin-left"></span>
        </h2>
        <p className="card-body text-sm text-white opacity-80">
          Tipo de taller: {taller.tipo}
        </p>
        <p className="card-body text-sm text-white opacity-80">
          Estatus: {taller.estatus}
        </p>

        <button className="mt-4 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
          Inscribirse
        </button>
      </div>
    </div>
  );
};

export default Card;
