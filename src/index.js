import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import App from "./App";
import "./index.css"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <App />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
