import './App.css';
import { useState } from 'react';

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

function Task({ id, value, selfRemove }) {
  const [done, setDone] = useState(false);
  return (
    <li>
      <input value={done} type="checkbox" onChange={event => handleChange(event, setDone)} />
      {done ? <s>{value}</s> : value}
      <button onClick={() => selfRemove(id)}>X</button>
    </li>
  );
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

function ToDo({ values, setValues }) {
  const removeFromToDoList = (id) => {
    setValues(values.filter((e) => e.id !== id));
  }

  return (
    <ul>
      {values.map((element) =>
        <Task id={element.id} value={element.value} selfRemove={removeFromToDoList} />
      )}

      {/* {props.values.map(element => 
        <li>
          {element.value}
          <button onClick={()=> removeFromToDoList(element.id)}>X</button>
        </li>
      )} */}
    </ul>
  );
}

export default App;
