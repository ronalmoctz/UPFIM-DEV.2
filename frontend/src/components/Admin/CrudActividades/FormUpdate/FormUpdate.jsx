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
import Header from "../../components/Header";
import { showAlert } from "../../../Generales/Alerts/Alerts";
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

  const { imagenPreview, imagenSize, handleImageChange, handleRemoveImage } =
    useActividad(id_actividad, setValue);

  const onSubmit = async (data) => {
    try {
      await updateActividad(id_actividad, data);
      showAlert("success", "Éxito", " Actividad actualizada exitosamente");
      navigate("/actividades");
    } catch (error) {
      showAlert("error", "Error", "No se pudo actualizar la actividad.");
    }
  };

  return (
    <div className="flex-1 p-3 bg-white">
      <Header
        title="Actulizar Actividad"
        subtitle="Mediante este formulario puedes actualizar el evento"
      />
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto mt-4 p-6 shadow-lg rounded-xl border bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
        <div className="col-span-1 md:col-span-4">
          <TextareaField
            label="Descripción"
            id="descripcion"
            register={register}
            error={errors.descripcion}
          />
        </div>

        <div className="col-span-1 md:col-span-4">
          <ImageUploader
            label="Subir Imagen"
            id="imagen"
            onChange={(e) => handleImageChange(e, setValue)}
            preview={imagenPreview}
            onRemove={() => handleRemoveImage(setValue)}
            size={imagenSize}
            error={errors.imagen}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-2 rounded ${
            isSubmitting ? "bg-gray-400" : "bg-verde"
          } text-white hover:${isSubmitting ? "bg-gray-400" : "bg-verde hover:bg-verdeHover"}`}
        >
          {isSubmitting ? "Actualizando..." : "Actualizar actividad"}
        </button>
        <div className="text-center mt-4">
          <Link to="/actividades" className="text-verde hover:underline">
            Regresar
          </Link>
        </div>
      </motion.form>
    </div>
  );
};

export default ActividadEdit;
