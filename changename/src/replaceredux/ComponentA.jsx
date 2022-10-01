import React from "react";
import { useContext } from "react";
import { sizeContext } from "../AppRedux";

const ComponentA = () => {
  const contextSize = useContext(sizeContext);
  return (
    <div>
      <span style={{ fontSize: contextSize.size }}>ComponentA</span>
      <div className="m-2">
        <button
          className="btn btn-warning m-2"
          onClick={() => contextSize.action("30px")}
        >
          30px
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={() => contextSize.action("40px")}
        >
          40px
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={() => contextSize.action("50px")}
        >
          50px
        </button>
      </div>
    </div>
  );
};

export default ComponentA;
