import React from "react";

const LocationSection = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4">
        Ubícanos
      </h2>
      <div className="flex justify-center">
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14975.37638003041!2d-99.09934888531468!3d20.22379861493732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8834414fae7%3A0xf86f22374a408730!2sUniversidad%20Polit%C3%A9cnica%20de%20Francisco%20I.%20Madero!5e0!3m2!1ses!2smx!4v1696727876047!5m2!1ses!2smx"
          className="w-full md:w-3/4 h-60 rounded-lg shadow-md border border-gray-300"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationSection;
