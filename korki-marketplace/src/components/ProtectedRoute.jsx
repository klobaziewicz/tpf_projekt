import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children, requireProfile = true }) {
  const { user, userProfile, loading, logOut } = useAuth();

  if (loading) {
    return <div className="auth-loading">Ładowanie...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requireProfile && !userProfile) {
    logOut();
    return <Navigate to="/login" replace />;
  }

  return children;
}
