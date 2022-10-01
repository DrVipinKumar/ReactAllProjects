import React, { useCallback } from "react";
import { useState } from "react";
import CallbackDisplayTitle from "../hooks/CallbackDisplayTitle";
import CallbackButton from "./CallbackButton";

const UseCallback = () => {
  console.log("Rendering inside UseCallBack");
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState("30px");
  const changeColor = useCallback(() => {
    const color = "#" + Math.floor(Math.random() * 6177722).toString(16);
    setColor(color);
  }, []);
  const changeSize = useCallback(() => {
    const size = Math.floor(Math.random() * 40) + 30 + "px";
    setSize(size);
  }, []);

  return (
    <div>
      <CallbackDisplayTitle />
      <h3 style={{ color: color }}>Dr. Vipin Classes</h3>
      <CallbackButton eventHandle={changeColor}>Change Color</CallbackButton>
      <h3 style={{ fontSize: size }}>Dr. Vipin Teotia</h3>
      <CallbackButton eventHandle={changeSize}>Change Size</CallbackButton>
    </div>
  );
};

export default UseCallback;
