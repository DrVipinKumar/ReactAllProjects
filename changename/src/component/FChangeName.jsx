import React from "react";
const FChangeName = (props) => {
  console.log("...inside render in FChangeName");
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
};

export default React.memo(FChangeName);
