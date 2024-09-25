import { useState } from 'react';
import { login, logout } from '../services/authService';

export default function useAuth() {
  const [auth, setAuth] = useState(false);

  const handleLogin = async (userName, password) => {
    try {
      await login(userName, password);
      setAuth(true);
    } catch (error) {
      console.error('Error to sing in', error);
      setAuth(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setAuth(false);
    } catch (error) {
      console.error('Error al cerrar sesion', error);
    }
  };

  return {
    auth,
    handleLogin,
    handleLogout,
  };
}
