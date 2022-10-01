import React from "react";
import { useState, useMemo } from "react";
const UseMemoHook = () => {
  const [num, setNum] = useState(1);
  const [color, setColor] = useState("#000000");
  const changeColor = () => {
    const color = "#" + Math.floor(Math.random() * 6177722).toString(16);
    setColor(color);
  };
  const displayTable = useMemo(() => {
    let table = [];
    let j = 0;
    while (j < 2000000000) j++;
    for (let i = 0; i <= 10; i++) {
      table.push(`${num} X ${i}=${num * i}`);
    }
    return table;
  }, [num]);
  return (
    <div>
      <label>Enter number to get table:</label>
      <br />
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <button onClick={changeColor}>Change Color</button>
      <div style={{ color: color }}>
        {displayTable.map((value) => (
          <h4>{value}</h4>
        ))}
      </div>
    </div>
  );
};

export default UseMemoHook;
