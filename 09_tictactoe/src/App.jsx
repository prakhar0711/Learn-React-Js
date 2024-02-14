import "./App.css";
import { useState } from "react";
function App() {
  let [state, setState] = useState(Array(9).fill(null));
  let [isXTurn, setisXTurn] = useState(true);

  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setisXTurn(!isXTurn);
  };

  return (
    <>
      <div className="rows">
        <div
          className="boxes"
          onClick={() => {
            handleClick(0);
          }}
        >
          {state[0]}
        </div>
        <div
          className="boxes"
          onClick={() => {
            handleClick(1);
          }}
        >
          {state[1]}
        </div>
        <div
          className="boxes"
          onClick={() => {
            handleClick(2);
          }}
        >
          {state[2]}
        </div>
      </div>
      <div className="rows">
        <div
          className="boxes"
          onClick={() => {
            handleClick(3);
          }}
        >
          {state[3]}
        </div>
        <div
          className="boxes"
          onClick={() => {
            handleClick(4);
          }}
        >
          {state[4]}
        </div>
        <div
          className="boxes"
          onClick={() => {
            handleClick(5);
          }}
        >
          {state[5]}
        </div>
      </div>
      <div className="rows">
        <div
          className="boxes"
          onClick={() => {
            handleClick(6);
          }}
        >
          {state[6]}
        </div>
        <div
          className="boxes"
          onClick={() => {
            handleClick(7);
          }}
        >
          {state[7]}
        </div>
        <div
          className="boxes"
          onClick={() => {
            handleClick(8);
          }}
        >
          {state[8]}
        </div>
      </div>
    </>
  );
}

export default App;

// task is to create the function of the winner and display it