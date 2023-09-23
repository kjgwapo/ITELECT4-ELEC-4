import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

//const element = <h1>Hello World!</h1>;

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
    , document.getElementById('root'));