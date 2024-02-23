import "./App.css";
import { useState, useCallback } from "react";

function App() {
  // State to keep track of the game board
  let [state, setState] = useState(Array(9).fill(null));
  // State to determine whose turn it is (X or O)
  let [isXTurn, setisXTurn] = useState(true);

  // Function to check if there's a winner
  const checkWin = useCallback((copyState) => {
    // Check all possible winning combinations
    if (
      copyState[0] === copyState[1] &&
      copyState[1] === copyState[2] &&
      copyState[2] !== null
    ) {
      alert(`${copyState[2]} wins`); // Display winner
    } else if (
      copyState[3] === copyState[4] &&
      copyState[4] === copyState[5] &&
      copyState[5] !== null
    ) {
      alert(`${copyState[5]} wins`);
    } else if (
      copyState[6] === copyState[7] &&
      copyState[7] === copyState[8] &&
      copyState[8] !== null
    ) {
      alert(`${copyState[8]} wins`);
    } else if (
      copyState[0] === copyState[4] &&
      copyState[4] === copyState[8] &&
      copyState[8] !== null
    ) {
      alert(`${copyState[8]} wins`);
    } else if (
      copyState[2] === copyState[4] &&
      copyState[4] === copyState[6] &&
      copyState[6] !== null
    ) {
      alert(`${copyState[6]} wins`);
    } else if (
      copyState[0] === copyState[3] &&
      copyState[3] === copyState[6] &&
      copyState[6] !== null
    ) {
      alert(`${copyState[6]} wins`);
    } else if (
      copyState[1] === copyState[4] &&
      copyState[4] === copyState[7] &&
      copyState[7] !== null
    ) {
      alert(`${copyState[7]} wins`);
    } else if (
      copyState[2] === copyState[5] &&
      copyState[5] === copyState[8] &&
      copyState[8] !== null
    ) {
      alert(`${copyState[8]} wins`);
    }
  }, []);

  // Function to handle clicking on a box
  const handleClick = useCallback(
    (index) => {
      const copyState = [...state];
      // Check if the box is empty
      if (copyState[index] === null) {
        copyState[index] = isXTurn ? "X" : "O"; // Set X or O based on whose turn it is
      } else {
        alert("Box already filled");
      }
      setState(copyState);
      setisXTurn(!isXTurn); // Switch turns
      setTimeout(() => {
        checkWin(copyState); // Check for a winner after a short delay
      }, 100);
    },
    [checkWin, isXTurn, state]
  );

  // Function to reset the game board
  const resetBoard = () => {
    setState(Array(9).fill(null));
  };

  // JSX for rendering the game board
  return (
    <>
      <div>(X goes First)</div>
      <div className="rows">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="boxes"
            onClick={() => {
              handleClick(index);
            }}
          >
            {state[index]}
          </div>
        ))}
      </div>
      <div className="rows">
        {[3, 4, 5].map((index) => (
          <div
            key={index}
            className="boxes"
            onClick={() => {
              handleClick(index);
            }}
          >
            {state[index]}
          </div>
        ))}
      </div>
      <div className="rows">
        {[6, 7, 8].map((index) => (
          <div
            key={index}
            className="boxes"
            onClick={() => {
              handleClick(index);
            }}
          >
            {state[index]}
          </div>
        ))}
      </div>
      <button onClick={resetBoard}>Reset</button>
    </>
  );
}

export default App;
