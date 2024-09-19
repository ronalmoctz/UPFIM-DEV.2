import { useState } from 'react';
import { login, logout, isAuthenticated } from '../services/authService';

export default function useAuth() {
  const [auth, setAuth] = useState(isAuthenticated());

  const handleLogin = async (userName, password) => {
    try {
      await login(userName, password);
      setAuth(true);
    } catch (error) {
      console.error('Error to sing in', error);
      setAuth(false);
    }
  };

  const handleLogout = () => {
    logout();
    setAuth(false);
  };

  return {
    auth,
    handleLogin,
    handleLogout,
  };
}
