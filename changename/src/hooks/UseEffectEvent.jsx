import React, { useState, useEffect } from "react";
const UseEffectEvent = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const changeMouse = (event) => {
    console.log("Inside Change Mouse Method");
    setX(event.clientX);
    setY(event.clientY);
  };
  useEffect(() => {
    console.log("Inside useffect hook");
    window.addEventListener("mousemove", changeMouse);
    return () => {
      window.removeEventListener("mousemove", changeMouse);
    };
  }, []);
  return (
    <div>
      <h2> X: {X}</h2>,<h2> Y: {Y}</h2>
    </div>
  );
};

export default UseEffectEvent;
