import { useCallback, useEffect, useState, useRef } from "react";

/**
 * App component for generating passwords
 */
function App() {
  // State variables for password, length, and allowed characters
  
  const [password, setPassword] = useState(""); // State for the generated password
  const [length, setLength] = useState(6); // State for password length
  const [numAllowed, setNumAllowed] = useState(false); // State for allowing numbers in password
  const [charAllowed, setCharAllowed] = useState(false); // State for allowing special characters in password
  //useRef Hook
  const passRef = useRef(null);

  /**
   * Generates a password based on length and allowed characters
   */
  const generatePassword = useCallback(() => {
    // Initialize an empty string for the password
    let pass = "";
    // Define the base character set
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Base character set

    // If numbers are allowed, add them to the character set
    if (numAllowed) str += "0123456789";
    // If special characters are allowed, add them to the character set
    if (charAllowed) str += "!@#$%^&*()_+";

    // Generate password characters randomly from the character set
    for (let i = 0; i < length; i++) {
      // Generate a random index within the character set
      let char = Math.floor(Math.random() * str.length);
      // Append the character at the random index to the password string
      pass += str.charAt(char);
    }
    // Set the generated password in the state
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  // Function to generate new password
  const generateNewPassword = useCallback(() => {
    generatePassword();
  }, [length, charAllowed, numAllowed, setPassword]);

  // Function to copy generated password to clipboard
  const copyToClipboard = useCallback(() => {
    // Select the password input element
    passRef.current?.select();
    // Set selection range for the password input
    passRef.current?.setSelectionRange(0, length);
    // Copy the password to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password,length]);

  // Run generatePassword function whenever length, numAllowed, or charAllowed changes
  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed, generatePassword]);

  // Render the password generator UI
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500">
        <h1 className="text-3xl font-bold mb-4">Password Generator</h1>
        <div className="mb-4">
          {/* Display the generated password */}
          <input
            type="text"
            value={password}
            className="p-2 border rounded mr-0"
            readOnly
            ref={passRef}
          />
          <button
            onClick={generateNewPassword}
            className="ml-0 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Generate New
          </button>
          <button
            onClick={copyToClipboard}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
        </div>
        <div>
          {/* Slider to control password length */}
          <label className="mr-2">Length({length})</label>
          <input
            className="mr-2"
            value={length}
            type="range"
            min={6}
            max={20}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          {/* Checkbox to allow numbers in password */}
          <label className="mr-2">Numbers</label>
          <input
            className="mr-2"
            type="checkbox"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          {/* Checkbox to allow special characters in password */}
          <label className="mr-2">Characters</label>{" "}
          <input
            className="mr-2"
            type="checkbox"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
