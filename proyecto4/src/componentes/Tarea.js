import React from "react";
import "./Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({id, completada, texto, completarTarea, eliminarTarea}) => {
  return (
    <div
      className={completada ? "tarea-hecha completada" : "tarea-hecha"}
    >
      <div
        className="tarea-texto"
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div
        className="contenedor-tarea-icon"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle clasName="tarea-icon" />
      </div>
    </div>
  );
};

export default Tarea;
