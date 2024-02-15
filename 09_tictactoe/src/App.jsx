import "./App.css";
import { useState, useCallback } from "react";
function App() {
  let [state, setState] = useState(Array(9).fill(null));
  let [isXTurn, setisXTurn] = useState(true);

  const checkWin = useCallback(
    (copyState) => {
      // const copyState = [...state];
      if (
        copyState[0] == copyState[1] &&
        copyState[1] == copyState[2] &&
        copyState[2] != null
      ) {
        alert(`${copyState[2]} wins`);
      } else if (
        copyState[3] == copyState[4] &&
        copyState[4] == copyState[5] &&
        copyState[5] != null
      ) {
        alert(`${copyState[5]} wins`);
      } else if (
        copyState[6] == copyState[7] &&
        copyState[7] == copyState[8] &&
        copyState[8] != null
      ) {
        alert(`${copyState[8]} wins`);
      } else if (
        copyState[0] == copyState[4] &&
        copyState[4] == copyState[8] &&
        copyState[8] != null
      ) {
        alert(`${copyState[8]} wins`);
      } else if (
        copyState[2] == copyState[4] &&
        copyState[4] == copyState[6] &&
        copyState[6] != null
      ) {
        alert(`${copyState[6]} wins`);
      } else if (
        copyState[0] == copyState[3] &&
        copyState[3] == copyState[6] &&
        copyState[6] != null
      ) {
        alert(`${copyState[6]} wins`);
      } else if (
        copyState[1] == copyState[4] &&
        copyState[4] == copyState[7] &&
        copyState[7] != null
      ) {
        alert(`${copyState[7]} wins`);
      } else if (
        copyState[2] == copyState[5] &&
        copyState[5] == copyState[8] &&
        copyState[8] != null
      ) {
        alert(`${copyState[8]} wins`);
      }
    },
    []
  );
  const handleClick = useCallback(
    (index) => {
      const copyState = [...state];
      if (copyState[index] == null) {
        copyState[index] = isXTurn ? "X" : "O";
      } else {
        alert("box already filled");
      }
      setState(copyState);
      setisXTurn(!isXTurn);
      setTimeout(() => {
        checkWin(copyState);    //setTimeout is not a good thing to do here look for other solutions as the alert msg used to get displayed before marking the final X so i used setTimeout on it
      }, 100);
    },
    [checkWin, isXTurn, state]
  );
  const resetBoard = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      <div>(X goes First)</div>
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
      <button
        onClick={() => {
          resetBoard();
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;

// task is to create the function of the winner and display it
