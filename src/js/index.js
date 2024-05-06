//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Navbar } from "./component/Navbar.jsx";
import {Footer} from "./component/Footer.jsx"

//render your react application
ReactDOM.render(<Navbar/>, document.querySelector("#header"));
ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Footer/>, document.querySelector("#footer"));