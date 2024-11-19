import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UploadFeaturedImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsUploading(true); // Deshabilitar botón mientras se sube

    if (!selectedFile) {
      setError("Por favor, selecciona una imagen.");
      setIsUploading(false);
      return;
    }

    const formData = new FormData();
    formData.append("imagen", selectedFile); // Campo de imagen
    formData.append("description", description);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/insertFeaturedImages",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess(response.data.message);
      setDescription("");
      setSelectedFile(null);
    } catch (err) {
      console.error("Error al subir la imagen:", err);
      setError(
        err.response?.data?.error || "Ocurrió un error al subir la imagen."
      );
    } finally {
      setIsUploading(false); // Habilitar botón después de completar
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Subir Imagen Destacada
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Entrada de archivo */}
        <div>
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Seleccionar Imagen:
          </label>
          <input
            type="file"
            id="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
        </div>

        {/* Campo de descripción */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Descripción:
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isUploading}
          className={`w-full py-2 px-4 font-medium text-white rounded-md focus:outline-none ${
            isUploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isUploading ? "Subiendo..." : "Subir Imagen"}
        </button>
        <Link
          to="/galeria"
          className="block text-center mt-4 text-verde hover:underline"
        >
          Regresar
        </Link>
      </form>

      {/* Mensaje sobre el límite de imágenes */}
      <p className="mt-4 text-sm text-gray-600 text-center">
        Nota: Solo se permiten un máximo de 10 imágenes para no saturar el servidor. Sin embargo, es posible editar y actualizar las imágenes en el futuro.
      </p>

      {/* Mensajes */}
      {error && (
        <p className="mt-4 text-center text-sm text-red-600">{error}</p>
      )}
      {success && (
        <p className="mt-4 text-center text-sm text-green-600">{success}</p>
      )}
    </div>
  );
};

export default UploadFeaturedImage;
