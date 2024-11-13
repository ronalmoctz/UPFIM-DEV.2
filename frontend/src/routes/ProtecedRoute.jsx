import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, role } = useAuth();

  console.log("Estado de autenticación en ProtectedRoute:", isAuthenticated);
  console.log("Rol del usuario en ProtectedRoute:", role);

  if (isAuthenticated === undefined || role === undefined) {
    return null;
  }

  if (!isAuthenticated) {
    console.log("Usuario no autenticado, redirigiendo a login");
    return <Navigate to="/login" replace />;
  }

  if (role !== requiredRole) {
    console.log(
      `Acceso denegado. Rol requerido: ${requiredRole}, rol actual: ${role}`
    );
    return <Navigate to="/access-denied" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requiredRole: PropTypes.string.isRequired,
};

export default ProtectedRoute;
