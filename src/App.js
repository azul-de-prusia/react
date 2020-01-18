//impotación de la librería React y la clase component
import React from 'react';
import logo from './logo.svg';
import './App.css';

//Esqueleto del componente
function App() {
  //Retorna un componente escrito en JSX
  return (
    //Componente
    <div className="container">
      <h1 className="title">
        Hello world <span aria-label="emoji" role="img">🔥</span>
      </h1>
      <input type="text" className="new-task"/>
    </div>
  );
}

//Exportación del componente principal para que pueda ser importado desde index.js
export default App;
