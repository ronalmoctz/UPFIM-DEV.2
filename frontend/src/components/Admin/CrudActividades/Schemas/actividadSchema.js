import { z } from "zod";
export const actividadSchema = z.object({
  titulo: z.string().min(1, "El título es requerido"),
  descripcion: z.string().min(1, "La descripción es requerida"),
  tipo: z.enum(["deportiva", "cultural"]),
  fecha: z.string().min(1, "La fecha es requerida"),
  hora: z.string().min(1, "La hora es requerida"),
  ubicacion: z.string().min(1, "La ubicación es requerida"),
  estado: z.enum(["activa", "cancelada", "finalizada"]),
  imagen: z
    .any()
    .nullable()
    .refine((file) => {
      if (!file) return true;
      const validTypes = ["image/jpeg", "image/png"];
      const maxSizeInMB = 5;
      return (
        validTypes.includes(file.type) && file.size <= maxSizeInMB * 1024 * 1024
      );
    }, "La imagen debe ser JPG o PNG y no exceder 5 MB"),
});
