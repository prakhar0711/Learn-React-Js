import { useState } from "react";
import "./App.css";

function App() {
  // State to store the input task
  const [task, setTask] = useState("");
  // State to store the list of tasks
  const [taskList, setTaskList] = useState([]);

  // Function to handle input change
  const handleChange = (event) => {
    setTask(event.target.value);
    // Uncomment the line below to see the task value in console as it changes
    // console.log(task);
  };

  // Function to add a task to the task list
  function addTask() {
    // Check if the task input is empty
    if (task === "") {
      // Alert the user if the task input is empty
      alert("Please enter a task");
      return; // Exit the function early if the task input is empty
    }
    // Update the task list state with the new task
    setTaskList((taskList) => {
      const updatedList = [...taskList, task];
      setTask(""); // Clear the task input field after adding the task
      return updatedList;
    });
  }

  // Function to delete a task from the task list
  function deleteTask(index) {
    // Update the task list state by removing the task at the specified index
    setTaskList((prevTaskList) => {
      const updatedList = [...prevTaskList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  }

  return (
    <>
      {/* Input field to enter task */}
      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={handleChange}
      />
      {/* Button to add task */}
      <button type="submit" onClick={addTask}>
        Add
      </button>
      {/* List of tasks */}
      <ul>
        {/* Map through taskList to display each task */}
        {taskList.length > 0 && // Check if taskList is not empty
          taskList.map((data, index) => {
            return (
              <>
                {/* Each task item with a delete button */}
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
