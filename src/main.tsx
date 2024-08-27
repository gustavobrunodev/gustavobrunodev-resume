import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import "./register-fonts";
import enData from "./data/en.json";
import ptBRData from "./data/pt_BR.json";
import jpJPData from "./data/jp_JP.json";
import { Lang } from "./types/index.ts";

const dataLanguageMapping = {
  en: enData,
  pt_BR: ptBRData,
  jp_JP: jpJPData,
};

// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  const [searchParams] = useSearchParams();
  const allowedLangs: Lang[] = ["en", "pt_BR", "jp_JP"];

  let lang = (searchParams.get("lang") as Lang) || "en";

  if (!allowedLangs.includes(lang)) {
    lang = "en";
  }

  const data = dataLanguageMapping[lang];

  return (
    <PDFViewer className="pdf-viewer">
      <App {...data} lang={data.lang as Lang} />
    </PDFViewer>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
