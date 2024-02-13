import { useState } from "react";
import "./App.css";

function App() {
  //creating useState to manage color
  const [color, setColor] = useState("olive");

  return (
    <>
      {/* Creating the viewport div */}
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        {/* creating and reserving the bottom bar width */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          {/* creting the bar */}
          <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white p-3 rounded-2xl">
            {/* creating the buttons */}
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full shadow-2xl text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full shadow-2xl text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full shadow-2xl text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
