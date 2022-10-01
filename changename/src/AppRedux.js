import React, { useReducer } from "react";
import "./App.css";
import ComponentA from "./replaceredux/ComponentA";
import ComponentB from "./replaceredux/ComponentB";
import ComponentD from "./replaceredux/ComponentD";
const initsize = "25px";
const reducer = (state, action) => {
  switch (action) {
    case "30px":
      return (state = "30px");
    case "40px":
      return (state = "40px");
    case "50px":
      return (state = "50px");
    default:
      return state;
  }
};
export const sizeContext = React.createContext();
function App() {
  const [size, dispatch] = useReducer(reducer, initsize);
  return (
    <div className="App">
      <sizeContext.Provider value={{ size: size, action: dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentD />
      </sizeContext.Provider>
    </div>
  );
}

export default App;
