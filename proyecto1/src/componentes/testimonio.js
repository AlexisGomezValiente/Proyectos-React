import React from "react";
import '../hojas-de-estilos/testimonio.css';

function Testimonio(props) {
  return (
    <div className="container-test">
      <img className="imagen-test" src={require(`../img/test-${props.img}.png`)} alt={props.nombre}/>
      <div className="container-personas">
        <p className="nombre">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;