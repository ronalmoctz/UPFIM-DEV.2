import axios from 'axios';

const LOGIN_URL = 'http://localhost:3000/api/auth/login';

export const login = async (userName, password) => {
  // Aviability send cookies

  const response = await axios.post(
    LOGIN_URL,
    { userName, password },
    { withCredentials: true } // -> hace que se mande en automatico
  );

  //La cookie hace su trabajo
  return response.data;
};

export const logout = async () => {
  // Delete de cookie
  await axios.post(`${LOGIN_URL}/logout`, {}, { withCredentials: true });
};

export const isAuthenticated = () => {
  // No hay una manera directa de verificar cookies en el cliente sin un backend.
  // Podrías enviar una solicitud al backend para verificar si la sesión está activa
  // o manejar el estado de "auth" en el frontend una vez que el usuario ha iniciado sesión.
  return true; // O manejar esto de manera más robusta como explico a continuación
};
