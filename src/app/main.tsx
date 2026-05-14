import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/global.css";
import App from "@/app/App";

import { initGA, logPageView } from "@/analytics";

initGA();
logPageView();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
