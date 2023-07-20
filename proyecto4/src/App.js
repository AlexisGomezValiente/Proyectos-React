import './App.css';
import Logo from './componentes/Logo';
import ListaTareas from './componentes/ListaTareas.js';

function App() {
  return (
    <div className="App">
      <Logo />

      <div className='tareas-container'>
        <h1 className='tareas-titulo'>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
