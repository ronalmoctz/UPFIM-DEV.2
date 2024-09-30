import axios from "axios";
const API_URL = "http://localhost:3000/api";

export const updateActividad = async (id_actividad, formData) => {
  try {
    const response = await axios.put(
      `${API_URL}/updateActividad/${id_actividad}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al actualizar actividad: " + error.message);
  }
};


export const getActividad = async (id_actividad) => {
  try {
    const response = await axios.get(`${API_URL}/getActividad/${id_actividad}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener la actividad: " + error.message);
  }
};

export const insertActividad = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/insertActividad`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Error al agregar actividad: " + error.message);
    }
  };
  
