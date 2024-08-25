import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import NewsList from "./NewsList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewsList />
  </StrictMode>
);
