### Steps to Code the To-Do List App:

1. **Set Up Your React Environment:**
   - Make sure you have Node.js and npm installed on your machine.
   - Create a new React app using Create React App:
     ```bash
     npx create-react-app todo-list
     ```
   - Navigate to the project directory:
     ```bash
     cd todo-list
     ```

2. **Open `src/App.js` File:**
   - Open the `src/App.js` file in your code editor.

3. **Import React and useState Hook:**
   - Import the necessary modules at the top of the file:
     ```javascript
     import React, { useState } from "react";
     import "./App.css"; // If you're using a CSS file for styling
     ```

4. **Create Functional Component:**
   - Create a functional component named `App`:
     ```javascript
     function App() {
       // Logic will go here
     }
     ```

5. **Define State Variables:**
   - Use the `useState` hook to define state variables for the input task and the list of tasks:
     ```javascript
     const [task, setTask] = useState("");
     const [taskList, setTaskList] = useState([]);
     ```

6. **Implement Input Change Handler:**
   - Write a function to handle changes in the input field:
     ```javascript
     const handleChange = (event) => {
       setTask(event.target.value);
     };
     ```

7. **Implement Add Task Functionality:**
   - Write a function to add a task to the task list:
     ```javascript
     const addTask = () => {
       if (task.trim() !== "") {
         setTaskList([...taskList, task]);
         setTask(""); // Clear the input field
       } else {
         alert("Please enter a task");
       }
     };
     ```

8. **Implement Delete Task Functionality:**
   - Write a function to delete a task from the task list based on its index:
     ```javascript
     const deleteTask = (index) => {
       const updatedList = [...taskList];
       updatedList.splice(index, 1);
       setTaskList(updatedList);
     };
     ```

9. **Render UI Elements:**
   - Return JSX elements to render the input field, button, task list, and delete buttons:
     ```javascript
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

10. **Export the Component:**
    ```javascript
    export default App;
    ```

11. **Style Your App (Optional):**
    - Create a CSS file (`App.css`) and add styles to enhance the appearance of your app.

12. **Run Your App:**
    - Start the development server:
      ```bash
      npm run dev
      ```
    - Open your web browser and navigate to `http://localhost:3000` to view your To-Do List app.

Now you have a fully functional To-Do List app built with React! You can further enhance it by adding features such as task completion, editing tasks, or storing tasks in local storage for persistence.
