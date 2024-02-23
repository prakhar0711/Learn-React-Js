// Importing necessary modules from React
import { useContext } from "react";
import { dataName, dataGender } from "../App"; // Importing the exported contexts from App.jsx

function ChildC() {
  // Using the imported contexts to access name and gender data
  const name = useContext(dataName); // Getting name data from context
  const gender = useContext(dataGender); // Getting gender data from context

  return (
    <>
      <h1>I am ChildC</h1>
      <p>
        Welcome {name}, {gender}
      </p>
    </>
  );
}

export default ChildC; // Exporting the ChildC component
