import { useState } from "react";
import QrReader from "react-qr-reader";
const QRWebcamScan = () => {
  const [webScan, setWebScan] = useState();
  const camError = (error) => {
    if (error) {
      console.info(error);
    }
  };
  const camScan = (result) => {
    if (result) {
      setWebScan(result);
    }
  };
  return (
    <div className="col-sm-4">
      <div className="card">
        <div class="card-header">
          <h4>
            <span className="badge bg-secondary text-white">
              WebCam to Scan QR Code
            </span>
          </h4>
        </div>
        <div className="card-body text-start">
          <QrReader
            delay={300}
            onError={camError}
            onScan={camScan}
            style={{ width: "100%" }}
            facingMode={"user"}
          />
          <h6>Web Result:{webScan}</h6>
        </div>
      </div>
    </div>
  );
};

export default QRWebcamScan;
