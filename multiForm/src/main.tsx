import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FormStoreProvider } from "./context/FormDataContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FormStoreProvider>
      <App />
    </FormStoreProvider>
  </React.StrictMode>
);
