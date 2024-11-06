import React, { useState } from 'react'

export default function State() {
  //  let valor = 100;
  const [valor, setValor] = useState(100);
  const [texto, setTexto] = useState('Laíssa');

 function calcular(){
     setValor(valor * 2);
 }

 const calcular2 = () => setValor(valor * 2);

// Outra maneira de calcular com arrow function (=>) :
// const calcular2 = funcion() {
// const calcular = () => setValor(valor * 2);
// };

  return (
    <div>
        <h1>Uso do useState</h1>
        <p>Valor:{valor}</p>
        <p>{typeof calcular2}</p>
        {/*<button onClick={() => setValor(valor *2)}>Calcular</button>*/}
        <button onClick={calcular}>Calcular</button>

        <p>{texto} </p>
        <button onClick={() => setTexto('Neves S2')}>Alterar texto</button>
    </div>
  );




  }
