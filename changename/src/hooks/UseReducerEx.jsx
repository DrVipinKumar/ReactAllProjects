import React, { useReducer } from "react";
const initcolor = { color: "#000000", size: "30px" };
const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return { ...state, color: (state.color = "#ff0000") };
    case "green":
      return { ...state, color: (state.color = "#00ff00") };
    case "blue":
      return { ...state, color: (state.color = "#0000ff") };
  }
  switch (action.size) {
    case "40px":
      return { ...state, size: (state.size = "40px") };
    case "50px":
      return { ...state, size: (state.size = "50px") };
    default:
      return state;
  }
};
const UseReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, initcolor);
  return (
    <div>
      <h2 style={{ color: state.color, fontSize: state.size }}>
        Dr. Vipin Classes
      </h2>
      <button onClick={() => dispatch({ type: "red", size: "30px" })}>
        RED
      </button>
      <button onClick={() => dispatch({ type: "green", size: "30px" })}>
        GREEN
      </button>
      <button onClick={() => dispatch({ type: "blue", size: "30px" })}>
        BLUE
      </button>
      <button onClick={() => dispatch({ size: "40px" })}>40px</button>
      <button onClick={() => dispatch({ size: "50px" })}>50px</button>
    </div>
  );
};

export default UseReducerEx;
