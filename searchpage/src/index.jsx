import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Search } from "./screens/Search/Search";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Search />
  </StrictMode>,
);
