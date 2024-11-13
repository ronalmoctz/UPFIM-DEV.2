import React from "react";
import { Route, Routes } from "react-router-dom";
import useDarkMode from "./Hooks/useDarkMode";
import MainRoutes from "./routes/MainRoutes.jsx";

// import AdminRoutes from "./routes/AdminRoutes.jsx";
import { AuthProvider } from "./Hooks/AuthContext"; // Importa el contexto
import Dash from "./components/Admin/CrudActividades/MainCrudActividades";




const App = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <AuthProvider>
      <div className={`${darkMode ? "dark" : ""} font-onest`}>
        <Routes>
          {/* Rutas generales */}
          <Route
            path="/*"
            element={
              <MainRoutes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route path="/dash" element={<Dash />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
