import React from "react";
const CallbackDisplayTitle = () => {
  console.log("Rendering Inside CallbackDisplayTitle Component");
  return (
    <div>
      <h2>Use of UseCallback Hook Example</h2>
    </div>
  );
};

export default React.memo(CallbackDisplayTitle);
