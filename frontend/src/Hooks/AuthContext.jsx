import React, { createContext, useContext, useState, useEffect } from "react";
import {
  login,
  logout,
  isAuthenticated as checkSession,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const { isAuthenticated: sessionActive, userRol } =
          await checkSession();
        setIsAuthenticated(sessionActive);
        setRole(userRol);
      } catch (error) {
        setIsAuthenticated(false);
        setRole(null);
      }
    };
    checkAuthStatus();
  }, []);

  const handleLogin = async (userName, password) => {
    try {
      const response = await login(userName, password);
      setIsAuthenticated(true);
      setRole(response.userRol);
      return { isAuthenticated: true, role: response.userRol };
    } catch (error) {
      setIsAuthenticated(false);
      setRole(null);
      return { isAuthenticated: false, role: null };
    }
  };

  const handleLogout = async () => {
    await logout();
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, role, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
