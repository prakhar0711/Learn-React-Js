// Importing necessary modules from React
import { createContext } from "react";
import "./App.css"; // Importing CSS file
import ChildA from "./components/ChildA"; // Importing ChildA component

// Important terms:
// 1) Create Context: Creating contexts to pass data between components.
// 2) Provider: Providing data to components by wrapping them in a Provider element.
// 3) Consumer (useContext): Consuming data in components.

// We want to display name and gender directly to ChildC.
// To achieve this, we need to pass our data from App.jsx directly to ChildC.jsx.
// Since we have 2 data items to pass, we will create two contexts.

// 1) Creating contexts
const dataName = createContext(); // Context for name data
const dataGender = createContext(); // Context for gender data

function App() {
  const name = "Tushar"; // Name data
  const gender = "Male"; // Gender data

  return (
    <>
      <h1>I am Parent App</h1>
      {/* 
        2) Providing data to all the components that we want by wrapping it in a Provider element.
        3) Consuming will happen in ChildC.jsx.
      */}
      <dataName.Provider value={name}>
        {" "}
        {/* Providing name data */}
        <dataGender.Provider value={gender}>
          {" "}
          {/* Providing gender data */}
          <ChildA /> {/* Rendering ChildA component */}
        </dataGender.Provider>
      </dataName.Provider>
    </>
  );
}

export default App; // Exporting the App component

// Exporting the contexts for use in other components
export { dataName, dataGender };
