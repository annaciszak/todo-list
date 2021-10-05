import Task from '../Task/Task';

function ToDo({ values, setValues }) {
  const removeFromToDoList = (id) => {
    setValues(values.filter((e) => e.id !== id));
  }

  return (
    <table>
      {values.map((element) =>
        <Task id={element.id} value={element.value} selfRemove={removeFromToDoList} />
      )}

      {/* {props.values.map(element => 
        <li>
          {element.value}
          <button onClick={()=> removeFromToDoList(element.id)}>X</button>
        </li>
      )} */}
    </table>
  );
}

export default ToDo;
