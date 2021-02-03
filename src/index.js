import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./global-style/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStyle>
  </React.StrictMode>,
  document.getElementById("root")
);
