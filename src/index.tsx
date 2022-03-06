import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import { SearchProvider } from "./hooks/search";

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <ToastContainer theme="colored" position="top-center" />
      <App />
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
