import React from "react";
let count = 0;

function MyCounter(props) {
  //Functional Component
  let { count } = props;
  function handleIncrement() {
    count++;
    console.log(count);
  }
  return (
    <div className="m-2">
      <button>Decrement</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default MyCounter;
