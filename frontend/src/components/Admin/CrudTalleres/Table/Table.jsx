import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [talleres, setTalleres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTalleres = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getTallerCrud");
        setTalleres(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener los datos");
        setLoading(false);
      }
    };

    fetchTalleres();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Cargando...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Lista de Talleres</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              
              <th className="py-2 px-4 border-b border-gray-300 text-left">Nombre Taller</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Tipo</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Imagen</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Estatus</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Nombre Completo Docente</th>
            </tr>
          </thead>
          <tbody>
            {talleres.map((taller) => (
              <tr key={taller.id_taller}>
               
                <td className="py-2 px-4 border-b border-gray-300">{taller.nombre_taller}</td>
                <td className="py-2 px-4 border-b border-gray-300">{taller.tipo}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <img
                    src={taller.imagen_taller}
                    alt={taller.nombre_taller}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td
                  className={`py-2 px-4 border-b border-gray-300 ${
                    taller.estatus_taller === "Activo" ? "text-green-600" : "text-red-600"
                  } font-bold`}
                >
                  {taller.estatus_taller}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">{taller.nombre_completo_docente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
