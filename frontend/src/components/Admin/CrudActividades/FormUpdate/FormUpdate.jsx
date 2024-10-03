import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { actividadSchema } from "../Schemas/actividadSchema";
import useActividad from "./Hooks/useActividad";
import InputField from "./Components/InputField";
import SelectField from "./Components/SelectField";
import TextareaField from "./Components/TextareaField";
import ImageUploader from "./Components/ImageUploader";
import { updateActividad } from "../Utils/Api";

const ActividadEdit = () => {
  const { id_actividad } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(actividadSchema),
  });

  const {
    imagenPreview,
    imagenSize,
    handleImageChange,
    handleRemoveImage,
  } = useActividad(id_actividad, setValue);

  const onSubmit = async (data) => {
    try {
      await updateActividad(id_actividad, data);
      alert("Éxito: Actividad actualizada exitosamente");
      navigate("/");
    } catch (error) {
      alert("Error al actualizar la actividad");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-4 p-4 max-h-max bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700"
    >
      <h2 className="text-xl text-center font-semibold text-green-700 mb-5 sm:mb-5">
        Editar Actividad
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Título"
          id="titulo"
          register={register}
          error={errors.titulo}
        />
        <SelectField
          label="Tipo"
          id="tipo"
          register={register}
          error={errors.tipo}
          options={[
            { value: "deportiva", label: "Deportiva" },
            { value: "cultural", label: "Cultural" },
          ]}
        />
      </div>

      <TextareaField
        label="Descripción"
        id="descripcion"
        register={register}
        error={errors.descripcion}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Fecha"
          id="fecha"
          type="date"
          register={register}
          error={errors.fecha}
        />
        <InputField
          label="Hora"
          id="hora"
          type="time"
          register={register}
          error={errors.hora}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-5">
        <InputField
          label="Ubicación"
          id="ubicacion"
          register={register}
          error={errors.ubicacion}
        />
        <SelectField
          label="Estado"
          id="estado"
          register={register}
          error={errors.estado}
          options={[
            { value: "activa", label: "Activa" },
            { value: "cancelada", label: "Cancelada" },
            { value: "finalizada", label: "Finalizada" },
          ]}
        />
      </div>

      <ImageUploader
        label="Subir Imagen"
        id="imagen"
        onChange={(e) => handleImageChange(e, setValue)}
        preview={imagenPreview}
        onRemove={() => handleRemoveImage(setValue)}
        size={imagenSize}
        error={errors.imagen}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full p-2 rounded ${
          isSubmitting ? "bg-gray-400" : "bg-green-700"
        } text-white hover:${isSubmitting ? "bg-gray-400" : "bg-green-600"}`}
      >
        {isSubmitting ? "Actualizando..." : "Actualizar actividad"}
      </button>

      <div className="text-center mt-4">
        <Link to="/crudActividades" className="text-green-700 hover:underline">
          Regresar
        </Link>
      </div>
    </motion.form>
  );
};

export default ActividadEdit;
