import React from 'react';
import ReactDOM from 'react-dom';

// o método ReactDOM.render abaixo renderiza, ou seja coloca em tela, o componente App (importado de './App'), mas
// podeeria ser uma tag div por exemplo, no lugar do componente App;
// ReactDOM.render( <React.StrictMode> <div><h1>Hello World</h1></div> </React.StrictMode>, document.getElementById('root'));

import App from './App';
ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root'));
