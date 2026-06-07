import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === "development") {
  const ignoreErrors = [
    "The user aborted a request",
    "popup-closed-by-user",
    "auth/popup-closed-by-user",
  ];

  window.addEventListener("unhandledrejection", (event) => {
    const message = event.reason?.message || String(event.reason);
    const code = event.reason?.code;
    
    if (
      ignoreErrors.some((err) => message.includes(err)) ||
      (code && ignoreErrors.some((err) => code.includes(err)))
    ) {
      event.preventDefault();
      console.warn("Ignored uncaught rejection:", message);
    }
  });

  window.addEventListener("error", (event) => {
    const message = event.message || "";
    if (ignoreErrors.some((err) => message.includes(err))) {
      event.preventDefault();
      console.warn("Ignored uncaught error:", message);
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
