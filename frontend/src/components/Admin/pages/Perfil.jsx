
import React from "react";
import Header from "../components/Header";

const Perfil = () => {
  return (
    <div className="flex-1 p-3 bg-white">
      <Header 
        title="Bienvenido a Perfil"
        subtitle="Aquí puedes visualizar tu perfil y estatus dentro de tu taller"
      />
      
      <div className="max-w-md mx-auto mt-6 bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center">
        {/* Imagen de perfil */}
        <img 
          src="https://via.placeholder.com/150" 
          alt="Foto de perfil" 
          className="rounded-full w-32 h-32 object-cover mb-4"
        />
        
        {/* Información del perfil */}
        <h2 className="text-xl font-semibold text-gray-800">Nombre de Usuario</h2>
        <p className="text-gray-600 mt-2 text-center">
          Descripción breve del usuario. Aquí puedes añadir una breve introducción o descripción del perfil.
        </p>
      </div>
    </div>
  );
};

export default Perfil;
