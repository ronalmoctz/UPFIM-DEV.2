import { useState } from 'react';
import { login, logout } from '../services/authService';

export default function useAuth() {
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState(localStorage.getItem('role'));

  const handleLogin = async (userName, password) => {
    try {
      const response = await login(userName, password);
      setAuth(true);
      setRole(response);
      console.log(response.userRol);
      localStorage.setItem('role', response.userRol);
      return { isAuthenticated: true, role: response.userRol };
    } catch (error) {
      setAuth(false);
      setRole(null);
      console.error(error);
      return { isAuthenticated: false, role: null };
    }
  };

  const handleLogout = async () => {
    await logout();
    setAuth(false);
    setRole(null);
    localStorage.removeItem('role');
  };

  return { auth, role, handleLogin, handleLogout };
}
