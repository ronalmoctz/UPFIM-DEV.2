
import { useState } from "react";
import axios from "axios";
import { contactFormSchema } from "./contactFormSchema";
import { showAlert } from "../../Generales/Alerts/Alerts";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      contactFormSchema.parse(formData);
      const response = await axios.post(
        "http://localhost:3000/api/sendEmail",
        formData
      );

      if (response.status === 200) {
        showAlert("success", "Éxito", "Tu mensaje ha sido enviado correctamente");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        showAlert("error", "Error", "Hubo un error al enviar el mensaje");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        showAlert(
          "error",
          "Error de Validación",
          error.errors.map((err) => err.message).join(", ")
        );
      } else {
        console.error("Error al enviar el email:", error);
        showAlert("error", "Error", "Hubo un error al enviar el mensaje");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
