import './App.css';
import { useState } from 'react';
import ToDo from './components/ToDo/ToDo';


function handleChange(event, setNew) {
  setNew(event.target.value)
  console.log(event)
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToDo(todos, setTodos, newTask) {
  console.log(newTask)
  if (newTask != undefined && newTask != "") {
    setTodos([...todos, { id: getRandomInt(0, 1000000), value: newTask }])
  }
}

function App() {
  const [newTask, setNewTask] = useState();
  const [todo1, setTodo1] = useState([]);
  const [todo2, setTodo2] = useState([]);
  const [selectedToDo, setSelectedToDo] = useState("list1");

  return (
    <div className="App">
      <input type="text" value={newTask} placeholder="Add new task" onChange={event => handleChange(event, setNewTask)} />
      <select value={selectedToDo} name="list-name" onChange={event => handleChange(event, setSelectedToDo)}>
        <option value="list1">List 1</option>
        <option value="list2">List 2</option>
      </select>
      <button onClick={() => {
        if (selectedToDo === "list1") {
          addToDo(todo1, setTodo1, newTask)
        }
        else {
          addToDo(todo2, setTodo2, newTask)
        }
      }}>Add</button>
      <ToDo values={todo1} setValues={setTodo1}></ToDo>
      <hr />
      <ToDo values={todo2} setValues={setTodo2}></ToDo>
    </div>);
}

export default App;
