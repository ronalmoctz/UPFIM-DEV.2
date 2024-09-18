
import React from 'react';

const Card = ({ taller }) => {
  return (
    <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg group">
      <img 
        src={taller.img_url} 
        alt={taller.nombre} 
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
        <h2 className="text-lg font-semibold">Taller: {taller.nombre}</h2>
        <p className="text-sm">Tipo de taller: {taller.tipo}</p>
        <p className="text-sm">Estatus: {taller.estatus}</p>
        <button className="mt-4 bg-verde px-4 py-2 rounded-lg hover:bg-verdeHover transition-colors">
          Inscribirse
        </button>
      </div>
    </div>
  );
};

export default Card;
