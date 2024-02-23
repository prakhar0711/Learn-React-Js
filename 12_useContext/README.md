# React Context Example

This file contains a simple example demonstrating the usage of React Context API for passing data between components.

## Overview

In this example, we have three components:

1. **App**: The parent component where data is provided using Context Providers.
2. **ChildA**: A child component of App, which renders ChildB.
3. **ChildB**: Another child component of App, which renders ChildC.
4. **ChildC**: The deepest child component, which consumes data using Context Consumers.

## Implementation Details

### App Component (App.jsx)

```jsx
import { createContext } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

// Creating contexts
const dataName = createContext();
const dataGender = createContext();

function App() {
  const name = "Tushar";
  const gender = "Male";

  return (
    <>
      <h1>I am Parent App</h1>
      <dataName.Provider value={name}>
        <dataGender.Provider value={gender}>
          <ChildA />
        </dataGender.Provider>
      </dataName.Provider>
    </>
  );
}

export default App;
export { dataName, dataGender };
```

### ChildA Component (ChildA.jsx)

```jsx
import ChildB from "./ChildB";

function ChildA() {
  return (
    <>
      <h1>I am ChildA</h1>
      <ChildB />
    </>
  );
}

export default ChildA;
```

### ChildB Component (ChildB.jsx)

```jsx
import ChildC from "./ChildC";

function ChildB() {
  return (
    <>
      <h1>I am ChildB</h1>
      <ChildC />
    </>
  );
}

export default ChildB;
```

### ChildC Component (ChildC.jsx)

```jsx
import { useContext } from "react";
import { dataName, dataGender } from "../App";

function ChildC() {
  const name = useContext(dataName);
  const gender = useContext(dataGender);

  return (
    <>
      <h1>I am ChildC</h1>
      <p>
        Welcome {name}, {gender}
      </p>
    </>
  );
}

export default ChildC;
```

## Usage

To run this example on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install` or `npm i`.
4. Start the development server using `npm run dev`.

## How It Works

1. **Creating Contexts**: Two contexts, `dataName` and `dataGender`, are created in `App.jsx`.
2. **Providing Data**: Data for name and gender is provided using Context Providers in `App.jsx`.
3. **Consuming Data**: In `ChildC.jsx`, the imported contexts are used with `useContext` hook to access name and gender data.
4. **Component Hierarchy**: The hierarchy is as follows:
   - App
     - ChildA
       - ChildB
         - ChildC
5. **Data Flow**: Data flows from App to ChildC through Context API, allowing ChildC to directly access name and gender.
