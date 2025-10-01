import React from "react";
import { useState } from 'react'

import './App.css'



function App() {
const [numeros, setNumeros] = useState([0, 0, 0, 0, 0,0, 0, 0, 0, 0]);
  function tabla_multiplicar(){
const vec = new Array(10)
 for (let x = 0; x < vec.length; x++)
      vec[x] = x *  2
    setNumeros(vec)
}
 

 return (
    <div>
      <p>Vector de 10 posiciones con tabla de multiplicar:</p>
      {numeros.map(num => (<p>{num}</p>))}
      <button onClick={tabla_multiplicar}>Generar Tabla de Multiplicar</button>
    </div>
  );
}

export default App

  
  //const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
      
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
    
  //     </div>
  //     <p className="read-the-docs">
  //       Darío Fernando Trabajando...
  //     </p>
  //   </>
  // )







