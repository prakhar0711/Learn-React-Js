import { useState } from "react";
import "./App.css";

/**
 * App component to manage color state and display color-changing buttons
 */
function App() {
  // State to manage color
  const [color, setColor] = useState("olive");

  return (
    <>
      {/* Viewport div */}
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        {/* Bottom bar */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          {/* Color-changing buttons */}
          <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white p-3 rounded-2xl">
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
            <button
              onClick={() => setColor("#b0b0f5")}
              className="outline-none px-4 py-1 rounded-full shadow-2xl text-white"
              style={{ backgroundColor: "#b0b0f5" }}
            >
              Lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
