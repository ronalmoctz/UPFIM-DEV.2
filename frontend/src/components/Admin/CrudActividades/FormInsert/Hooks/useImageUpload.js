import { useState } from "react";

const validTypes = ["image/jpeg", "image/png"];
const maxSizeInMB = 5;
const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

export const useImageUpload = (setValue) => {
  const [imagenPreview, setImagenPreview] = useState(null);
  const [imagenSize, setImagenSize] = useState(null);

  const handleChange = (e) => {
    const { files } = e.target;
    if (files) {
      const file = files[0];
      if (!validTypes.includes(file.type)) {
        alert("Error: Solo se permiten imágenes en formato JPG o PNG.");
        setValue("imagen", null);
        setImagenPreview(null);
        return;
      }
      if (file.size > maxSizeInBytes) {
        alert("Error: El tamaño de la imagen no puede ser mayor a 5 MB.");
        setValue("imagen", null);
        setImagenPreview(null);
        return;
      }
      setValue("imagen", file);
      setImagenPreview(URL.createObjectURL(file));
      setImagenSize((file.size / 1024).toFixed(2));
    }
  };

  const resetImage = () => {
    setValue("imagen", null);
    setImagenPreview(null);
    setImagenSize(null);
  };

  return { imagenPreview, imagenSize, handleChange, resetImage };
};
