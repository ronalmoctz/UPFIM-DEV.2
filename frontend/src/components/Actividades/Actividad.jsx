import React from 'react';
const Actividad = ({ actividad }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 justify-center border border-gray-300">
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={actividad.img_url}
          alt={actividad.titulo}
          className="w-full h-64 object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">{actividad.titulo}</h2>
        <p className="text-gray-700 mb-2">{actividad.descripcion}</p>
        <div className="text-gray-500 mb-2">
          <p><strong>Tipo:</strong> {actividad.tipo}</p>
          <p><strong>Estado:</strong> {actividad.estado}</p>
        </div>
        <div className="text-gray-600">
          <p><strong>Ubicación:</strong> {actividad.ubicacion}</p>
          <p><strong>Fecha:</strong> {new Date(actividad.fecha).toLocaleDateString()}</p>
          <p><strong>Hora:</strong> {actividad.hora}</p>
        </div>
      </div>
    </div>
  );
};
export default Actividad;
