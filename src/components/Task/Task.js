import { useState } from 'react';

function handleChangeCheckbox(event, setNew) {
  setNew(event.target.checked)
  console.log(event)
}

function Task({ id, value, selfRemove }) {
  const [done, setDone] = useState(false);
  return (
    <tr>
      <td><input value={done} type="checkbox" onChange={event => handleChangeCheckbox(event, setDone)} /></td>
      <td>{done ? <s>{value}</s> : value}</td>
      <td><button onClick={() => selfRemove(id)}>X</button></td>
    </tr>
  );
}

export default Task;
