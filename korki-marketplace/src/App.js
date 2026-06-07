import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactGA from "react-ga4";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Search from "./pages/search/search";
import TutorProfile from "./pages/tutor-profile/tutor-profile";
import DashboardStudent from "./pages/dashboards/dashboard-student/dashboard-student";
import DashboardParent from "./pages/dashboards/dashboard-parent/dashboard-parent";
import DashboardTutor from "./pages/dashboards/dashboard-tutor/dashboard-tutor";
import AnalyticsListener from "./components/AnalyticsListener";
import { AuthProvider } from "./contexts/AuthContext";
import GuestRoute from "./components/GuestRoute";
import RoleRoute from "./components/RoleRoute";
import { ROLES } from "./constants/roles";

function App() {
  useEffect(() => {
    try {
      ReactGA.initialize("G-QJ341M096S");
    } catch (e) {
      console.warn("ReactGA initialize failed", e);
    }
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <AnalyticsListener />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />
          <Route
            path="/register"
            element={
              <GuestRoute>
                <Register />
              </GuestRoute>
            }
          />
          <Route
            path="/dashboard/student"
            element={
              <RoleRoute allowedRoles={[ROLES.STUDENT]}>
                <DashboardStudent />
              </RoleRoute>
            }
          />
          <Route
            path="/dashboard/parent"
            element={
              <RoleRoute allowedRoles={[ROLES.PARENT]}>
                <DashboardParent />
              </RoleRoute>
            }
          />
          <Route
            path="/dashboard/tutor"
            element={
              <RoleRoute allowedRoles={[ROLES.TUTOR]}>
                <DashboardTutor />
              </RoleRoute>
            }
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tutor/:id" element={<TutorProfile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
