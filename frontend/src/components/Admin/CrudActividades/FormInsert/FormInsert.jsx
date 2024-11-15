import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { actividadSchema } from '../Schemas/actividadSchema'
import { useImageUpload } from "../FormInsert/Hooks/useImageUpload";
import { insertActividad } from "../Utils/Api";
import TextInput from "../FormInsert/Components/TextInput";
import SelectInput from "../FormInsert/Components/SelectInput";
import TextArea from "../FormInsert/Components/TextArea";
import FileInput from "../FormInsert/Components/FileInput";
import ImagePreview from "../FormInsert/Components/ImagePreview";
import { showAlert } from "../../../Generales/Alerts/Alerts";

const FormInsert = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(actividadSchema),
  });
  const { imagenPreview, imagenSize, handleChange, resetImage } =
    useImageUpload(setValue);
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    if (!data.imagen) {
      alert("Error: Por favor, sube una imagen.");
      setIsSubmitting(false);
      return;
    }
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    try {
      await insertActividad(formData);
      alert("Éxito: Actividad agregada exitosamente");
      reset();
      resetImage();
    } catch (error) {
      console.error("Error al agregar actividad", error);
      alert("Error: No se pudo agregar la actividad");
    } finally {
      setIsSubmitting(false);
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
      <h3 className="text-xl text-center font-semibold text-green-700 mb-5 sm:mb-5">
        Añadir nueva actividad
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          label="Título"
          name="titulo"
          register={register}
          errors={errors}
          placeholder="Título"
        />
        <SelectInput
          label="Tipo de Actividad"
          name="tipo"
          register={register}
          errors={errors}
          options={[
            { value: "deportiva", label: "Deportiva" },
            { value: "cultural", label: "Cultural" },
          ]}
        />
      </div>
      <div className="mt-4">
        <TextArea
          label="Descripción"
          name="descripcion"
          register={register}
          errors={errors}
          placeholder="Ingrese la descripción de la actividad"
          rows={4}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <TextInput
          label="Fecha"
          name="fecha"
          type="date"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Hora"
          name="hora"
          type="time"
          register={register}
          errors={errors}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <TextInput
          label="Ubicación"
          name="ubicacion"
          register={register}
          errors={errors}
          placeholder="Ubicación"
        />
        <SelectInput
          label="Estado"
          name="estado"
          register={register}
          errors={errors}
          options={[
            { value: "activa", label: "Activa" },
            { value: "cancelada", label: "Cancelada" },
            { value: "finalizada", label: "Finalizada" },
          ]}
        />
      </div>

      <div className="mt-4">
        <FileInput
          label="Subir Imagen"
          name="imagen"
          onChange={handleChange}
          errors={errors}
        />
        {imagenPreview && (
          <ImagePreview
            src={imagenPreview}
            size={imagenSize}
            onReset={resetImage}
          />
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full bg-green-600 text-white p-2 rounded hover:bg-green-500 disabled:bg-gray-400"
      >
        {isSubmitting ? "Subiendo..." : "Agregar Actividad"}
      </button>
      <Link to="/actividades" className="block text-center mt-4 text-green-700 hover:underline">
        Regresar
      </Link>
    </motion.form>
  );
};
export default FormInsert;
