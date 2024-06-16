import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import data from "./data/en.json";
import { Lang } from "./types/index.ts";
import { PDFViewer } from "@react-pdf/renderer";
import './register-fonts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PDFViewer className="pdf-viewer">
      <App {...data} lang={data.lang as Lang} />
    </PDFViewer>
  </React.StrictMode>
);
