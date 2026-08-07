import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Merchandise } from "./screens/Merchandise";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Merchandise />
  </StrictMode>,
);
