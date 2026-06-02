import { useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ReactGA from "react-ga4";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import AnalyticsListener from "./components/AnalyticsListener";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-QJ341M096S");
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <AnalyticsListener />
        <Routes>
          <Route
            path="/"
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
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;