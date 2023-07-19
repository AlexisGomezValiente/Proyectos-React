import './App.css';
import logo from "./img/logo.png";
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {

  const [numClic, setNumClic] = useState(0);
  const funcionCl = () => {
    setNumClic(numClic + 1);
  };

  const funcionRei = () => {
    setNumClic(0);
  };

  return (
    <div className="App">
      <div>
        <img className='logo' src={logo} alt='Logo freeCodeCamp' />
      </div>

      <Contador numClics={numClic}/>

      <Boton 
        texto='Click'
        esClic={true}
        funcionBoton={funcionCl}
      />

      <Boton 
        texto='Reiniciar'
        esClic={false}
        funcionBoton={funcionRei}
      />
    </div>
  );
}

export default App;
