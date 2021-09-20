import './App.css';
import {button, useState} from 'react';

function addToDo(todos, setTodos){
  setTodos([...todos, 'third'])
}

function App() {

  const[todos, setTodos] = useState(['first','second']);
  const toDoList = todos.map((element) =>
  <li>{element}</li>);

  return (
    <div className="App">
    <button onClick={() => addToDo(todos, setTodos)}>Add</button>
    <ul>
    {toDoList}
    </ul>
    </div>
  );
}

export default App;
