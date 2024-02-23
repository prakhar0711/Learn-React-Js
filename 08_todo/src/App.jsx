import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleChange = (event) => {
    setTask(event.target.value);
    // console.log(task);
  };

  function addTask() {
    setTaskList((taskList) => {
      const updatedList = [...taskList, task];
      setTask("");
      return updatedList;
    });
  }
  function deleteTask(index) {
    setTaskList((prevTaskList) => {
      const updateList = [...prevTaskList];
      updateList.splice(index, 1);
      return updateList;
      
    });
  }
  return (
    <>
      <input
        type="text"
        value={task}
        placeholder="enter task"
        onChange={handleChange}
      />
      <button type="submit" onClick={addTask}>
        Add
      </button>
      <ul>
        {taskList != [] &&
          taskList.map((data, index) => {
            return (
              <>
                <li key={index}>
                  {data}{" "}
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
}

export default App;
