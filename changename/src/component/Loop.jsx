import React from "react";

const Loop = () => {
  const loopFunc = () => {
    let data = [];
    for (let i = 0; i < 10; i++) data.push(i * 2);
    return data;
  };
  return (
    <div>
      <h2>Loop Inside JSX Example</h2>
      {loopFunc().map((value) => (
        <h3> {value} </h3>
      ))}
    </div>
  );
};

export default Loop;
