//impotación de la librería React y la clase component
import React, {Component} from 'react';
import './App.css';
import Task from './components/task';
import Title from './components/title';

//Esqueleto del componente
class App extends Component {
  constructor(props) {
    super(props)
    //estado:
    this.state = {
       newTask: "",
       tasks: []
    };
 }
 
  handleTaskChange = (event) => {
    this.setState({
     newTask: event.target.value,
    })
  }

  //preventDefault evita el refresh, se guarda una copia de las tareas en newTasks, luego empuja el contenido del input dentro del arreglo y deja el input limpio para no duplicar]
  handleSubmit = (event) => {
    event.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask)
    this.setState({
    newTask: "",
    tasks: newTasks
  })
}

 render() {
  //Retorna un componente escrito en JSX
  return (
    <div className="container">
        <Title/>
       [onChangecambia el valor del estado en el input, onSubmit hace que se recargue porque debería enviar los datos a un servidor, preventDefault evita el refresh]
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newTask} 
            onChange={this.handleTaskChange}
            type="text" 
            className="new-task" 
          />
        </form>

[este pedacito usa .map de JS para iterar Task y almacena en un h3 con lo que podremos después mostrar el contenido]
      {
        this.state.tasks.map(task =>
        <Task/>
        )
      }
    </div>
 );
}
}

//Exportación del componente principal para que pueda ser importado desde index.js
export default App;
