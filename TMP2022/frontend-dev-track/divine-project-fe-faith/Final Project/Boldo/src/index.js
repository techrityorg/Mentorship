import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import StoreProvider from "./store/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>
);
