import React, { useState, useEffect } from "react";
import axios from "axios";
import Actividad from "./ActividadCard";

const ActividadesGrid = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/getActividades"
        );
        setActividades(response.data);
      } catch (error) {
        console.error("Error fetching actividades:", error);
      }
    };

    fetchActividades();
  }, []);

  return (
    <div className="p-2 flex justify-center mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {actividades.map((actividad) => (
          <Actividad key={actividad.id} actividad={actividad} />
        ))}
      </div>
    </div>
  );
};

export default ActividadesGrid;
