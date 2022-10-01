import React, { useState } from "react";
const UseStateHook = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const addName = () => {
    setNames([...names, { id: names.length, value: name }]);
  };
  return (
    <div>
      {names.map((n) => {
        return <li key={n.id}>{n.value}</li>;
      })}
      <br />
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button onClick={addName}>Add Name</button>
    </div>
  );
};

export default UseStateHook;
