
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getActividad } from "../../Utils/Api";

const useActividad = (id_actividad, setValue) => {
  const [imagenPreview, setImagenPreview] = useState(null);
  const [imagenSize, setImagenSize] = useState(null);

  useEffect(() => {
    const fetchActividadData = async () => {
      try {
        const actividad = await getActividad(id_actividad);
        const fechaFormateada = dayjs(actividad.fecha).format("YYYY-MM-DD");
        setValue("titulo", actividad.titulo);
        setValue("descripcion", actividad.descripcion);
        setValue("tipo", actividad.tipo);
        setValue("fecha", fechaFormateada);
        setValue("hora", actividad.hora);
        setValue("ubicacion", actividad.ubicacion);
        setValue("estado", actividad.estado);
        setImagenPreview(actividad.imagen_url);
      } catch (error) {
        alert("Error al obtener la actividad");
      }
    };

    fetchActividadData();
  }, [id_actividad, setValue]);

  const handleImageChange = (e, registerImage) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png"];
      const maxSizeInMB = 5;
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

      if (!validTypes.includes(file.type)) {
        alert("Error: Solo se permiten imágenes en formato JPG o PNG.");
        return;
      }
      if (file.size > maxSizeInBytes) {
        alert("Error: El tamaño de la imagen no puede ser mayor a 5 MB.");
        return;
      }
      setImagenPreview(URL.createObjectURL(file));
      setImagenSize(Math.round(file.size / 1024));
      registerImage("imagen", file);
    }
  };

  const handleRemoveImage = (setValue) => {
    setValue("imagen", null);
    setImagenPreview(null);
    setImagenSize(null);
  };

  return {
    imagenPreview,
    imagenSize,
    handleImageChange,
    handleRemoveImage,
  };
};

export default useActividad;
