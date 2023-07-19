import './App.css';
import Testimonio from './componentes/testimonio';
import personas from './componentes/personas'

function App() {
  return (
    <div className="App">
      <div className='container-prin'>
        <h1 className='titulo'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          img='shawn' 
          nombre={personas['Shawn'].nombre}
          pais={personas['Shawn'].pais}
          empresa={personas['Shawn'].empresa}
          cargo={personas['Shawn'].cargo}
          testimonio={personas['Shawn'].testimonio}
        />

        <Testimonio
          img='sarah' 
          nombre={personas['Sarah'].nombre}
          pais={personas['Sarah'].pais}
          empresa={personas['Sarah'].empresa}
          cargo={personas['Sarah'].cargo}
          testimonio={personas['Sarah'].testimonio}
        />

        <Testimonio
          img='emma' 
          nombre={personas['Emma'].nombre}
          pais={personas['Emma'].pais}
          empresa={personas['Emma'].empresa}
          cargo={personas['Emma'].cargo}
          testimonio={personas['Emma'].testimonio}
        />

      </div>
    </div>
  );
}

export default App;
