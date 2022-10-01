import React from "react";

const QRGenerate = ({ imageQR }) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <div class="card-header">
          <h4>
            <span className="badge bg-secondary text-white">
              QR Code Generator
            </span>
          </h4>
        </div>
        <div className="card-body">
          {imageQR && (
            <a href={imageQR} download>
              <img src={imageQR} style={{ width: "95%" }} alt="..."></img>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRGenerate;
