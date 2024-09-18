
import React, { useState } from "react";
import axios from "axios";
import { showAlert } from "../Alerts/Alerts"; 

const InsertTallerForm = () => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [estatus, setEstatus] = useState("");
  const [imagen, setImagen] = useState(null);

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !tipo || !estatus) {
      showAlert("error", "Error", "Todos los campos son requeridos.");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("tipo", tipo);
    formData.append("estatus", estatus);
    if (imagen) formData.append("imagen", imagen);

    try {
      const response = await axios.post("http://localhost:3000/api/insertTaller", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      showAlert("success", "Éxito", response.data.message); 
    } catch (err) {
      showAlert("error", "Error", err.response?.data?.error || "Error al insertar taller"); 
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Insertar Taller</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="nombre">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="tipo">
              Tipo:
            </label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="deportiva">Deportiva</option>
              <option value="cultural">Cultural</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="estatus">
              Estatus:
            </label>
            <div className="flex items-center">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  id="estatus1"
                  value="1"
                  checked={estatus === "1"}
                  onChange={(e) => setEstatus(e.target.value)}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Activo</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="estatus0"
                  value="0"
                  checked={estatus === "0"}
                  onChange={(e) => setEstatus(e.target.value)}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Inactivo</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="imagen">
              Imagen:
            </label>
            <input
              type="file"
              id="imagen"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Insertar Taller
          </button>
        </form>
      </div>
    </div>
  );
};
export default InsertTallerForm;
