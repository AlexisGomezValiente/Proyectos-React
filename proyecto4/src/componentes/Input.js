import React, {useState} from 'react';
import './Input.css';
import { v4 as uuidv4 } from 'uuid';

const Input = (props) => {
    const [input, setInput] = useState('');

    const manejarCambio = (e) => {
        setInput(e.target.value);
    }

    const manejarEnvio = (e) => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        e.value = '';
        props.onSubmit(tareaNueva);
    }

    return(
        <form className='tareas-input' onSubmit={manejarEnvio}>
            <input className='input' placeholder='Ingresa una tarea' type='text' onChange={manejarCambio} name='text'></input>
            <button className='tareas-agregar'>Agregar</button>
        </form>
    );
}

export default Input;