import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="auth-loading">Ładowanie...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
