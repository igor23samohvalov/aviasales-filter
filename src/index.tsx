import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./components/styles/Global";
import App from "./App";
import { FiltersProvider } from "./components/hoc/filtersContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <FiltersProvider>
      <GlobalStyles />
      <App />
    </FiltersProvider>
  </React.StrictMode>,
);
