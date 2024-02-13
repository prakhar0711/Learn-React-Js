import "./App.css";
import Card from "./components/Card";
function App() {
  //to pass object to a component we have to create a object outside the return see below
  //const myObj={name:'tushar',email:'hello@.com'}
  //to pass it as props inside the component the syntax is- <Card newObj={myObj}>
  return (
    <>
      <h1 className="bg-green-600 text-black p-10 rounded-3xl mb-4 text">
        Tailwind
      </h1>
      {/* we can use the Card multiple times */}
      {/* but both card have same content */}
      <Card username="tushar" text="hi,welcome to my world" />
      <Card username="prakhar" />
      {/* after giving username and implementing use of props we can change the content of the card.This helps in cases when we are fetching and managing data via a database */}
    </>
  );
}
// bg-green is to set bacground color
//text-black is to set text color to black
// p-10 is to set padding
//rounded-3xl is to set border radius

export default App;
