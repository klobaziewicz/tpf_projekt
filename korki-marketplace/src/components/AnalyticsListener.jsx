import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    try {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    } catch (e) {
      console.warn("ReactGA send pageview failed", e);
    }
  }, [location]);

  return null;
}

export default AnalyticsListener;