import React from "react";

const QRCodeDisplay = ({ imageQR }) => {
  return (
    <div className="card col-sm-4">
      <div className="card-header m-1 rounded text-center">
        <h3>QrCode Image</h3>
      </div>
      <div className="card-body text-center">
        {imageQR && (
          <a href={imageQR} download>
            <img src={imageQR} width="70%" alt="qr code pic is here" />
          </a>
        )}
      </div>
    </div>
  );
};

export default QRCodeDisplay;
