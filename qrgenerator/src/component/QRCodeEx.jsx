import React from "react";
import { useState } from "react";
import qrcode from "qrcode";

import QRCodeGenerate from "./QRCodeGenerate";
import QRCodeDisplay from "./QRCodeDisplay";
import QRCodeFileScan from "./QRCodeFileScan";
import QRCodeWebcam from "./QRCodeWebcam";
const QRCodeEx = () => {
  const [text, setText] = useState();
  const [imageQR, setImageQR] = useState();
  const QRCodeGen = (value) => {
    setText(value);
  };
  const generateQRCode = async () => {
    const image = await qrcode.toDataURL(text);
    setImageQR(image);
  };

  return (
    <div className="container mx-auto mt-2">
      <QRCodeGenerate
        text={text}
        QRCodeGen={QRCodeGen}
        generateQRCode={generateQRCode}
      />
      <div className="row">
        <QRCodeDisplay imageQR={imageQR} />
        <QRCodeFileScan />
        <QRCodeWebcam />
      </div>
    </div>
  );
};

export default QRCodeEx;
