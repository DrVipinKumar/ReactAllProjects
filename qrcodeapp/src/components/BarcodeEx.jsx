import React from "react";
import { useState } from "react";
import Barcode from "react-barcode";
const BarcodeEx = () => {
  const [value, setValue] = useState();
  const [barValue, setBarValue] = useState();
  return (
    <div className="container">
      <div className="row">
        <span className="badges bg-success offset-sm-1 col-sm-10 text-center text-white">
          <h3>Barcode Generator</h3>
        </span>
      </div>
      <div className="row">
        <div className="mt-4 col-sm-10">
          <input
            className="offset-sm-1 col-sm-6"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            className="btn btn-primary btn-sm mx-2"
            onClick={() => {
              setBarValue(value);
            }}
          >
            Generate Barcode
          </button>
        </div>
        <div className="row mt-4">
          <Barcode value={barValue} />
        </div>
      </div>
    </div>
  );
};

export default BarcodeEx;
