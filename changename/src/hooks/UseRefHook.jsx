import React, { useRef, useEffect } from "react";
import { useState } from "react";
const UseRefHook = () => {
  const stopCounter = useRef();
  const [count, setCount] = useState(0);
  const dataRef = useRef();
  const [data, setData] = useState();
  const resetValue = () => {
    dataRef.current.value = "";
    dataRef.current.focus();
  };
  useEffect(() => {
    dataRef.current.focus();
    stopCounter.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h3>Use of UseRef Hook in React</h3>
      <input
        ref={dataRef}
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></input>
      <button onClick={resetValue}>Reset Value</button>
      <button
        onClick={() => {
          dataRef.current.style.color = "#ff0000";
        }}
      >
        Change Color
      </button>
      <br />
      Counter: {count}
      <button
        onClick={() => {
          clearInterval(stopCounter.current);
        }}
      >
        Stop Counter
      </button>
    </div>
  );
};

export default UseRefHook;
