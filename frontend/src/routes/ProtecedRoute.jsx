// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { auth, role } = useAuth();

  if (!auth) return <Navigate to="/login" replace />;
  if (role !== requiredRole) return <Navigate to="/access-denied" replace />;

  return children;
};

export default ProtectedRoute;
