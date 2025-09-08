import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cv from "./components/cv";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cv></Cv>
  </StrictMode>
);
