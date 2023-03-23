import React from "react";
import * as ReactDOM from "react-dom/client";
import { DataProvider } from "./data/DataStore";
import App from "./App";
import "./style.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
