//importing the Hello component here
import Hello from "./HelloWorld";

function App() {
  const username = "tushar";
  return (
    <>
      <p>the App component is below</p>
      <h1>Welcome, {username}</h1>
      <h2>Rendering the Hello component below</h2>
      <Hello />
      {/* returning or rendering the component here */}
    </>
  );
}

export default App;
