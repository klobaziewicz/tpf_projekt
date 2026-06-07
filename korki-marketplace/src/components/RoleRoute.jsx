import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getDashboardPath } from "../constants/roles";

export default function RoleRoute({ allowedRoles, children }) {
  const { user, userProfile, loading, logOut } = useAuth();

  if (loading) {
    return <div className="auth-loading">Ładowanie...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!userProfile) {
    logOut();
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userProfile.role)) {
    return <Navigate to={getDashboardPath(userProfile.role)} replace />;
  }

  return children;
}
