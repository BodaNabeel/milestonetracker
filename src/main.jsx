import React from "react";
import * as ReactDOM from "react-dom/client";
import { DataProvider } from "./data/DataContext";
import App from "./App";
import "./style.css"


console.log(`i'm looking for remote internship as a ReactJS dev, if you're hiring for the role kindly DM me on https://twitter.com/BodaNabeel :)`)
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
