import './App.css';
import Pantalla from './componentes/pantalla.js';
import Boton from './componentes/Boton.js';
import { useState } from 'react';
import {evaluate} from 'mathjs';
import Logo from './componentes/Logo'

function App() {

  const [input, setInput] = useState(''); 
  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const clear = () => {
    setInput('');
  };

  const resultado = () => {
    let arr = input.split('');
    let ejecutar = true;
    for(let i = 0; i < arr.length; i++){
      if(isNaN(Number(arr[i])) && isNaN(Number(arr[i + 1]))){
        ejecutar = false;
      }
    }
    if(input){
      if(ejecutar) setInput(evaluate(input));
      else alert('Ingrese una operacion valida');
    }else{
      alert('Ingrese valores');
    }
  };

  return (
    <div className="App">
      {/* <Logo /> */}

      <div className='calculadora-container'>
        <Pantalla 
          texto={input}
        />

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>  

        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>  

        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>  

        <div className='fila'>
          <Boton manejarClic={resultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>  

        <div className='clear'>
          <button className='clear-boton' onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
