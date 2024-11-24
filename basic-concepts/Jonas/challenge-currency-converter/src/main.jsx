import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Currency from "./Currency.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Currency /> */}
  </StrictMode>
);
