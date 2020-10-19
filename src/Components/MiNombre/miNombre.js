import React from "react";
import miFoto from "./mi-foto.png";
import "./miNombre.css";

function MiNombre(props) {
  return (
    <div className="mi-contenedor container">
      <img src={miFoto} className="foto-miniatura" alt="Mi foto" />
      <p className="separador d-none d-md-block">|</p>
      <div className="nombre-completo">
        <h1 className="nombres">GONZALO DANIEL</h1>
        <h1 className="apellidos">ROCHA LINDIMAN</h1>
      </div>
    </div>
  );
}

export default MiNombre;
