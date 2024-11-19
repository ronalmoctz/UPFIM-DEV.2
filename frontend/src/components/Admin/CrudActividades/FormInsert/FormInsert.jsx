import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { actividadSchema } from "../Schemas/actividadSchema";
import { useImageUpload } from "../FormInsert/Hooks/useImageUpload";
import { insertActividad } from "../Utils/Api";
import TextInput from "../FormInsert/Components/TextInput";
import SelectInput from "../FormInsert/Components/SelectInput";
import TextArea from "../FormInsert/Components/TextArea";
import FileInput from "../FormInsert/Components/FileInput";
import ImagePreview from "../FormInsert/Components/ImagePreview";
import { showAlert } from "../../../Generales/Alerts/Alerts";
import Header from "../../components/Header";
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
      showAlert("error", "Error", "Por favor, sube una imagen.");
      setIsSubmitting(false);
      return;
    }
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    try {
      await insertActividad(formData);
      showAlert("success", "Éxito", "Actividad agregada exitosamente.");
      reset();
      resetImage();
    } catch (error) {
      console.error("Error al agregar actividad", error);
      showAlert("error", "Error", "No se pudo agregar la actividad.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 p-3 bg-white">
      <Header
        title="Agregar Actividad"
        subtitle="Mediante este formulario puedes Agregar un nuevo evento"
      />
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto mt-4 p-6 shadow-lg rounded-xl border bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
          <div className="col-span-1 md:col-span-4">
            <TextArea
              label="Descripción"
              name="descripcion"
              register={register}
              errors={errors}
              placeholder="Ingrese la descripción de la actividad"
              rows={4}
            />
          </div>
          <div className="col-span-1 md:col-span-4">
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
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full bg-verde text-white py-2 rounded-lg hover:bg-verdeHover disabled:bg-gray-400"
        >
          {isSubmitting ? "Subiendo, espere..." : "Agregar"}
        </button>
        <Link
          to="/actividades"
          className="block text-center mt-4 text-verde hover:underline"
        >
          Regresar
        </Link>
      </motion.form>
    </div>
  );
};

export default FormInsert;
