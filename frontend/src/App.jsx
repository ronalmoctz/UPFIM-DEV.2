import { Route, Routes } from "react-router-dom";
import useDarkMode from "./Hooks/useDarkMode";
import MainRoutes from "./routes/MainRoutes.jsx";
import { AuthProvider } from "./Hooks/AuthContext";
import RoleBasedRoutes from "./routes/RoleBasedRoutes.jsx";

const App = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <AuthProvider>
      <div className={`${darkMode ? "dark" : ""} font-onest`}>
        <AuthProvider>
          <div className={`${darkMode ? "dark" : ""} font-onest`}>
            <Routes>
              {/* Rutas generales */}
              <Route
                path="/*"
                element={
                  <MainRoutes
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                }
              />
              <Route path="/dash/*" element={<RoleBasedRoutes />} />
            </Routes>
          </div>
        </AuthProvider>
      </div>
    </AuthProvider>
  );
};
export default App;
