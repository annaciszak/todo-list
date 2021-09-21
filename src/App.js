import './App.css';
import {useState} from 'react';

function handleChange(event, setNewTask) {
  setNewTask(event.target.value)
  console.log(event)
}

function addToDo(todos, setTodos, newTask){
  console.log(newTask)
  if(newTask!=undefined && newTask!=""){
    setTodos([...todos, newTask])
  }
}

function App() {
  const[newTask, setNewTask] = useState();
  const[todos, setTodos] = useState(['first','second']);
  const toDoList = todos.map((element) =>
  <div><li>{element}</li><button>X</button></div>
);

  return (
    <div className="App">
    <input type="text" value={newTask} placeholder="Add new task" onChange={event => handleChange(event, setNewTask)} />
    <button onClick={() => addToDo(todos, setTodos, newTask)}>Add</button>
    <ul>
    {toDoList}
    </ul>
    </div>
  );
}

export default App;
