const QRCodeGenerate = (props) => {
  return (
    <div>
      <div className="row">
        <h2 className="col-sm-12 badges bg-danger text-center text-white">
          QrCode Generator
        </h2>
      </div>
      <div className="row">
        <h3 className="col-sm-12">Enter text for generating QR Code</h3>
      </div>
      <div className="row">
        <input
          type="text"
          className="col-sm-5 m-2"
          value={props.text}
          onChange={(e) => props.QRCodeGen(e.target.value)}
        />
        <button
          className="col-sm-2 btn btn-primary m-2"
          onClick={props.generateQRCode}
        >
          Generate QR Code
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerate;
