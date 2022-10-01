import { useState, useRef } from "react";
import QrReader from "react-qr-reader";
const QRFileScan = () => {
  const qrRef = useRef();
  const [fileScan, setFileScan] = useState();
  const fileError = (error) => {
    if (error) {
      console.info(error);
    }
  };
  const scanFile = (result) => {
    setFileScan(result);
    if (result) {
      setFileScan(result);
    }
  };
  const handleClick = () => {
    qrRef.current.openImageDialog();
  };
  return (
    <div className="col-sm-4">
      <div className="card">
        <div class="card-header">
          <button className="btn btn-warning" onClick={handleClick}>
            <h5>Scan QR Code from File</h5>
          </button>
        </div>
        <div className="card-body text-start">
          <QrReader
            ref={qrRef}
            delay={300}
            onError={fileError}
            onScan={scanFile}
            style={{ width: "100%" }}
            legacyMode={true}
          />
          <h6>Scan Result:{fileScan}</h6>
        </div>
      </div>
    </div>
  );
};

export default QRFileScan;
