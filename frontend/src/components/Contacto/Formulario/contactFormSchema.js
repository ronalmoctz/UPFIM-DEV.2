
import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "El nombre es requerido"),
  lastName: z.string().min(1, "El apellido es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  subject: z.string().min(1, "El asunto es requerido"),
  message: z.string().min(1, "El mensaje es requerido")
});
