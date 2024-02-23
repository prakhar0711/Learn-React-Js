### Steps to Code the To-Do List App with Vite:

1. **Create a New Vite Project:**
   - Initialize a new Vite project using npm:
     ```bash
     npm create vite@latest todo-list
     ```

2. **Navigate to Project Directory:**
   - Move into the newly created project directory:
     ```bash
     cd todo-list
     ```

3. **Install Necessary Dependencies:**
   - Install React and ReactDOM if they're not already included:
     ```bash
     npm install react react-dom
     ```

4. **Open `src/App.jsx` File:**
   - Open the `src/App.jsx` file in your code editor.

5. **Import React and useState Hook:**
   - Import the necessary modules at the top of the file:
     ```jsx
     import React, { useState } from "react";
     import "./App.css"; // If you're using a CSS file for styling
     ```

6. **Create Functional Component:**
   - Create a functional component named `App`:
     ```jsx
     function App() {
       // Logic will go here
     }
     ```

7. **Define State Variables:**
   - Use the `useState` hook to define state variables for the input task and the list of tasks:
     ```jsx
     const [task, setTask] = useState("");
     const [taskList, setTaskList] = useState([]);
     ```

8. **Implement Input Change Handler:**
   - Write a function to handle changes in the input field:
     ```jsx
     const handleChange = (event) => {
       setTask(event.target.value);
     };
     ```

9. **Implement Add Task Functionality:**
   - Write a function to add a task to the task list:
     ```jsx
     const addTask = () => {
       if (task.trim() !== "") {
         setTaskList([...taskList, task]);
         setTask(""); // Clear the input field
       } else {
         alert("Please enter a task");
       }
     };
     ```

10. **Implement Delete Task Functionality:**
    - Write a function to delete a task from the task list based on its index:
      ```jsx
      const deleteTask = (index) => {
        const updatedList = [...taskList];
        updatedList.splice(index, 1);
        setTaskList(updatedList);
      };
      ```

11. **Render UI Elements:**
    - Return JSX elements to render the input field, button, task list, and delete buttons:
      ```jsx
      return (
        <>
          <input
            type="text"
            value={task}
            placeholder="Enter task"
            onChange={handleChange}
          />
          <button onClick={addTask}>Add</button>
          <ul>
            {taskList.map((task, index) => (
              <li key={index}>
                {task} <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      );
      ```

12. **Export the Component:**
    ```jsx
    export default App;
    ```

13. **Style Your App (Optional):**
    - Create a CSS file (`App.css`) and add styles to enhance the appearance of your app.

14. **Run Your App:**
    - Start the Vite development server:
      ```bash
      npm run dev
      ```
    - Open your web browser and navigate to `http://localhost:5173` to view your To-Do List app.

Now you have a fully functional To-Do List app built with React and Vite! You can further enhance it by adding features such as task completion, editing tasks, or storing tasks in local storage for persistence.