import axios from 'axios';

const LOGIN_URL = 'http://localhost:3000/api/login';

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

export const isAuthenticated = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/auth/status', {
      withCredentials: true,
    });
    console.log(response);
    return {
      isAuthenticated: response.data.isAuthenticated,
      userRol: response.data.userRol,
    };
  } catch (error) {
    console.error('Error al verificar autenticación:', error);
    return {
      isAuthenticated: false,
      userRol: null,
    };
  }
};
