import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./component/ErrorBoundary";
import ReactPortal from "./pages/ReactPortal";
import CodeSnippet from "./pages/CodeSnippet";
import PdfConversion from "./pages/pdfConversion";
import UseDeferredHooks from "./pages/UseDeferredHooks";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/reactPortal" element={<ReactPortal />} />
          <Route path="/snippet" element={<CodeSnippet />} />
          <Route path="/pdfConversion" element={<PdfConversion />} />
          <Route path="/useDeferredHooks" element={<UseDeferredHooks />} />
        </Routes>
      </Router>
      <div id="modal-renderer"></div>
    </ErrorBoundary>
  </StrictMode>,
);
