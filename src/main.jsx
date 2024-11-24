import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ProjectDetailProvider } from "./context/ProjectDetailProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProjectDetailProvider>
        <App />
      </ProjectDetailProvider>
    </BrowserRouter>
  </StrictMode>
);
