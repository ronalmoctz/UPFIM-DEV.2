import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const login = async (userName, password) => {
  const response = await axios.post(`${API_URL}/login`, { userName, password });
  if (response.data.token) {
    sessionStorage.setItem('token', response.data.token);
  }

  return response.data;
};

export const logout = () => {
  sessionStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!sessionStorage.getItem('token');
};
