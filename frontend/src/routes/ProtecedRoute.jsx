import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, requiredRole, children }) => {
  if (role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
