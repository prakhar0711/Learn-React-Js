import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Below creates a navbar type menu which is used to navigate to the pages */}
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        {/* Creates the route paths and renders the required component */}
        <Routes>
          {/* Route for Home component */}
          <Route exact path="/" element={<Home />} />
          {/* Route for About component */}
          <Route exact path="/about" element={<About />} />
          {/* Route for Users component */}
          <Route exact path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
