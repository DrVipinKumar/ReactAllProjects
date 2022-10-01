import React, { useState } from "react";
const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const incrementFive = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
};

export default UseStateHook;
