import React, { useState } from "react";
import UseEffectEvent from "./UseEffectEvent";
const ToggleEvent = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle UseEffect Component
      </button>
      {display && <UseEffectEvent />}
    </div>
  );
};

export default ToggleEvent;
