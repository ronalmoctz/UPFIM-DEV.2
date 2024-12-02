import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { z } from "zod";
import { showAlert } from "../../../Generales/Alerts/Alerts";
import { TbTrashX } from "react-icons/tb"; 

const uploadSchema = z.object({
  imagen: z
    .instanceof(File)
    .refine(
      (file) => file.type === "image/jpeg" || file.type === "image/png",
      "El archivo debe ser de tipo JPG o PNG."
    )
    .refine(
      (file) => file.size <= 5 * 1024 * 1024, 
      "El archivo no debe ser mayor a 5 MB."
    ),
  description: z.string().min(1, "La descripción es obligatoria."),
});

const ImagePreview = ({ src, size, onReset }) => (
  <div className="mt-4 border border-gray-300 rounded">
    <img
      src={src}
      alt="Vista previa de la imagen"
      className="h-48 w-full object-cover rounded-t"
    />
    <div className="p-2 flex justify-between items-center">
      <span>{`Tamaño: ${size} KB`}</span>
      <button
        type="button"
        onClick={onReset}
        className="text-red-600 hover:text-red-800"
      >
        <TbTrashX size={25} />
      </button>
    </div>
  </div>
);

const UploadFeaturedImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleResetFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      uploadSchema.parse({
        imagen: selectedFile,
        description,
      });
      const formData = new FormData();
      formData.append("imagen", selectedFile);
      formData.append("description", description);
      const response = await axios.post(
        "http://localhost:3000/api/insertFeaturedImages",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      showAlert("success", "Imagen subida", response.data.message);
      setDescription("");
      setSelectedFile(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        showAlert("error", "Error de validación", error.errors[0].message);
      } else {
        console.error("Error al subir la imagen:", error);
        showAlert(
          "error",
          "Error al subir la imagen",
          error.response?.data?.error || "Ocurrió un error inesperado."
        );
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Subir Imagen Destacada
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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
            ref={fileInputRef}
          />
        </div>
        {selectedFile && (
          <ImagePreview
            src={URL.createObjectURL(selectedFile)}
            size={(selectedFile.size / 1024).toFixed(2)}
            onReset={handleResetFile}
          />
        )}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Descripción:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
          />
        </div>
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
      <p className="mt-4 text-sm text-gray-600 text-center">
        Nota: Solo se permiten un máximo de 10 imágenes para no saturar el
        servidor. Sin embargo, es posible editar y actualizar las imágenes en el
        futuro.
      </p>
    </div>
  );
};

export default UploadFeaturedImage;
