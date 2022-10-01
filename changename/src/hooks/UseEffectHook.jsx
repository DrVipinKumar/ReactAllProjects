import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Dr. Vipin Classes");
  useEffect(() => {
    console.log("Inside useEffect Hook called Once");
  }, [name]);
  //   useEffect(() => {
  //     console.log("Inside useEffect Hook called on Name Change");
  //   }, [name]);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName("Dr. Vipin Teotia");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default UseEffectHook;
