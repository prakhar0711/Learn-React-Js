import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, settodos] = useState([]);
  const todolist = (e) => {
    setTodo(e.target.value);
  };

  const displaytodo = () => {
    settodos([...todos, todo]);
    setTodo("");
  };
  return (
    <>
      <div>
        <div>
          <input
            onChange={todolist}
            value={todo}
            type="text"
            placeholder="Title"
          />
        </div>
        <div>
          <button onClick={displaytodo}>Add</button>
        </div>
        <div>
          <p>ToDo for the day</p>
          <div>
            {todos.map((todo, index) => (
              <div key={index}>{todo}</div>
              
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
