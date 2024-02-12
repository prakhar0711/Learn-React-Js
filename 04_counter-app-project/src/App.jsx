//importing useState hook
import { useState } from "react";
// This function represents a simple counter app using React useState hook

function App() {
  //useState takes a variable and a function and a default value
  let [counter, setCounter] = useState(0);

/**
 * Function to increment the counter value
 */
function addValue() {
  // Increment the counter value till it reaches 10, then reset to 0
  if (counter === 10) {
    alert("Max value reached");
    setCounter(0);
  } else {
    setCounter(++counter);
  }
}

/**
 * Function to decrement the counter value
 */
function subtractValue() {
  // Decrement the counter value till it reaches 0, then reset to 0
  if (counter === 0) {
    alert("Minimum value reached");
    setCounter(0);
  } else {
    setCounter(--counter);
  }
}

  // Render the counter app UI
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={subtractValue}>Subtract Value</button>
    </>
  );
}

export default App;
