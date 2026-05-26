import { useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga4";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Platform from "./pages/platform/platform";
import AnalyticsListener from "./components/AnalyticsListener";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-QJ341M096S");
  }, []);

  return (
    <BrowserRouter>
      <AnalyticsListener />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/platform" element={<Platform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;