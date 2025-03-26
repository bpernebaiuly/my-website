import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";  // Бұл жол бар екеніне көз жеткіз
import App from "./App";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
