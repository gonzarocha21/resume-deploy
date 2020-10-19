import React from "react";
import "./header.css";
import MiNombre from "../MiNombre";
//import logo from "./logo.svg";
//<img src={logo} className="Logo-Header" alt="logo" />
function Header(props) {
  return (
    <header className="App-header">
      <MiNombre></MiNombre>
    </header>
  );
}

export default Header;
