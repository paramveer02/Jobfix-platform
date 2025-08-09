import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DashboardContextProvider from "./context/DashboardContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DashboardContextProvider>
      <App />
    </DashboardContextProvider>
  </StrictMode>
);
