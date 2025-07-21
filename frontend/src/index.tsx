console.log('index.tsx is loading');
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { searchCompanies } from "./api";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log('About to call searchCompanies');
searchCompanies("tsla").then(result => console.log('Final result:', result)).catch(error => console.error('Error:', error));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);