import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Merchandise } from "./screens/Merchandise/Merchandise";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Merchandise />
  </StrictMode>,
);
