import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}></Provider>,
    <App></App>,
    document.getElementById("root")
);
