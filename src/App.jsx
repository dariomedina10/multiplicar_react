import react from "react";
import { useState } from 'react'
import './App.css'

function tabla_multiplicar(){
const vector = new Array(10)
 for (let x = 0; x < vector.length; x++)
      vec[x] = x *  2
    setNumeros(vec)
 const [numeros, setNumeros] = useState([0, 0, 0, 0, 0,0, 0, 0, 0, 0]);

 return (
    <div>
      <p>Números aleatorios:</p>
      {vector.map(num => (<p>{num}</p>))}
      <button onClick={tabla_multiplicar}>Generar Tabla de Multiplicar</button>
    </div>
  );
}
}

function App() {
  <tabla_multiplicar/>
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    
      </div>
      <p className="read-the-docs">
        Darío Fernando Trabajando...
      </p>
    </>
  )
}

export default App
