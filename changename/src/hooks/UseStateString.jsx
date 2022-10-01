import React, { useState } from "react";
const UseStateHook = () => {
  const [fullName, setFullName] = useState({
    fname: "Dr. Vipin",
    lname: "Classes",
  });

  return (
    <div>
      {fullName.fname + " " + fullName.lname}
      <br />
      <button onClick={() => setFullName({ ...fullName, lname: "Teotia" })}>
        Change Name
      </button>
      <h1>{JSON.stringify(fullName)}</h1>
    </div>
  );
};

export default UseStateHook;
