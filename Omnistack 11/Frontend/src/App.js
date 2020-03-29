import React from 'react';
import './global.css';

/* Um Componente no react é uma função com html, que pode ter comportamento javascript, css */
/* Quando um html esta escrito dentro de um javascript, chamamos de jsx */

import Logon from './Pages/Logon';

function App() {

  return (
    <Logon />    
  );

  //counter é um estado, o que conceitualmente ao se alterar, atualizará o valor em todo lugar onde é renderizado.
  //para inicializar um estado, utilizamos useState passando por parametro o valor inicial
  // useState retorna um array de 2 posiçoes, onde no primeiro index temos o valor inicial
  // e no segundo index uma função para arualizar o valor.
  // const [counter, setCounter] = useState(0);

  // function increment(){
  //   setCounter(counter+1);
  // }

  // return ( 
  //   <div>
  //     <Header>Contador = {counter}</Header>
  //     <button onClick={increment} >Incrementar</button>
  //   </div>    
  // );

}

export default App;
