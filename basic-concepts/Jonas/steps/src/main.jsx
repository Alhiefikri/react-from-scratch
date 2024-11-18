import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App_v2 from "./App_v2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <App_v2 />
  </StrictMode>
);