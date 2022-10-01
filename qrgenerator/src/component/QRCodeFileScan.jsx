import { useRef, useState } from "react";
import QrReader from "react-qr-reader";
const QRCodeFileScan = () => {
  const qrRef = useRef(null);
  const [fileResult, setFileResult] = useState();
  const openDialog = () => {
    qrRef.current.openImageDialog();
  };
  const fileError = (error) => {
    if (error) {
      console.log(error);
    }
  };
  const fileScan = (result) => {
    if (result) {
      setFileResult(result);
    }
  };
  return (
    <div className="card col-sm-4">
      <div className="card-header m-1 rounded text-center">
        <button className="btn btn-warning" onClick={openDialog}>
          <h5>Open QR Code File</h5>
        </button>
      </div>
      <div className="card-body text-center">
        <QrReader
          ref={qrRef}
          delay={300}
          onError={fileError}
          onScan={fileScan}
          legacyMode={true}
        />
      </div>
      <div className="card-footer rounded mb-1">
        <h6>Image Result: {fileResult}</h6>
      </div>
    </div>
  );
};

export default QRCodeFileScan;
