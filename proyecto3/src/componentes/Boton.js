import React from 'react';
import './Boton.css';

function Boton(props) {

    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }

    const funcionAgregar = () => {
        props.manejarClic(props.children);
    }

    return (
        <div className={`boton-container ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={funcionAgregar}>
            {props.children}
        </div>
    );
}

export default Boton;