import React, { useEffect, useState } from "react";
import axios from "axios";
import DocenteCards from "./DocenteCards"; // Asegúrate de tener este componente
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const DocenteList = () => {
  const [docentes, setDocentes] = useState([]); // Para almacenar los datos de la API
  const [startIndex, setStartIndex] = useState(0); // Para controlar el índice inicial del carrusel
  const reviewPerPage = 3; // Cantidad de docentes a mostrar por página

  // Hacer la solicitud a la API para obtener los docentes
  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getDocentes");
        setDocentes(response.data); // Guardar los datos en el estado
      } catch (error) {
        console.error("Error al obtener docentes:", error);
      }
    };
    fetchDocentes();
  }, []);

  // Función para mover a la página anterior en el carrusel
  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - reviewPerPage, 0));
  };

  // Función para mover a la página siguiente en el carrusel
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + reviewPerPage, docentes.length - reviewPerPage)
    );
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Contenedor de las tarjetas de docentes */}
      <div className="flex flex-col gap-5 lg:flex-row">
        {docentes
          .slice(startIndex, startIndex + reviewPerPage) // Mostrar solo los docentes en el rango actual
          .map((docente, index) => (
            <DocenteCards docente={docente} key={index} /> // Generar una tarjeta por cada docente
          ))}
      </div>

      {/* Controles para el carrusel */}
      <div className="mt-5 flex items-center justify-center gap-6">
        <button
          className="rounded-full border-2 border-gray-400 px-4 py-2 disabled:opacity-40"
          onClick={handlePrevious}
          disabled={startIndex === 0} // Deshabilitar el botón si estamos al principio
        >
          <FaArrowLeftLong />
        </button>
        <button
          className="rounded-full border-2 border-gray-400 px-4 py-2 disabled:opacity-40"
          onClick={handleNext}
          disabled={startIndex + reviewPerPage >= docentes.length} // Deshabilitar el botón si estamos al final
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default DocenteList;
