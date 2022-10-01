import React, { useContext } from "react";
import { UserContext } from "../App";
const UseContextC = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <h3>Welcome {name} to UseContext C Component</h3>
    </div>
  );
};

export default UseContextC;
