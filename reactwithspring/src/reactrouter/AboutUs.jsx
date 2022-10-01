import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "400px" }}>
      <h2>About Us Page</h2>
      <button className="btn btn-danger" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default AboutUs;
