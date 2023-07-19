import React from "react";
import './Boton.css'

function Boton({ texto, esClic, funcionBoton }) {
  return (
    <div className="container-boton">
      <button
        className={esClic ? "botonClic" : "botonReiniciar"}
        onClick={funcionBoton}
      >
        {texto}
      </button>
    </div>
  );
}

export default Boton;
