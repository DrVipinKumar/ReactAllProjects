import React from "react";
const CallbackButton = ({ eventHandle, children }) => {
  console.log("Rendering inside " + children);
  return (
    <div>
      <button onClick={eventHandle}>{children}</button>
    </div>
  );
};

export default React.memo(CallbackButton);
