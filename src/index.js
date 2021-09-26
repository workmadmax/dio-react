import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "../src/assets/css/GlobalStyle";
import  App from "./pages/app/App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
