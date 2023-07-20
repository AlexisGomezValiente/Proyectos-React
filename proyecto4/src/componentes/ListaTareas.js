import React, { useState } from "react";
import Input from "./Input.js";
import Tarea from "./Tarea.js";
import "./ListaTareas.css";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.length > 0) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id != id);
    setTareas(tareasActualizadas);
  }

  const tareaCompletada = (id) => {
    const tareasActualizadas = tareas.map(
        tarea => {
            if(tarea.id == id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        }
    )
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <Input onSubmit={agregarTarea} />
      <div className="container-tareas">
        {
            tareas.map((tarea) => (
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        eliminarTarea={eliminarTarea}
                        completarTarea={tareaCompletada}
                    />
                )
            )
        }
      </div>
    </>
  );
};

export default ListaTareas;
