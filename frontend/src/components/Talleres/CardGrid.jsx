import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const CardGrid = () => {
  const [talleres, setTalleres] = useState([]);

  useEffect(() => {
    const fetchTalleres = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/getTalleres"
        );
        setTalleres(response.data);
      } catch (error) {
        console.error("Error al obtener talleres:", error);
      }
    };
    fetchTalleres();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fit gap-8 p-10 shadow-lg dark:bg-slate-700">
      {talleres.map((taller) => (
        <Card key={taller.id_taller} taller={taller} />
      ))}
    </div>
  );
};

export default CardGrid;
