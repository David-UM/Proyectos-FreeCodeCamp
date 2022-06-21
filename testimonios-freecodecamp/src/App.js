
//import logo from './logo.svg';
import './App.css';
import perfiles from './data/data';
import ConjuntoTestimonios from './componentes/ConjuntoTestimonios.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <ConjuntoTestimonios
          perfiles={perfiles}
        />
      </div>
      
    </div>
  );
}

export default App;
