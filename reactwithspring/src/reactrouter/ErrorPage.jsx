import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "400px" }}>
      <h2>Page not found!</h2>
      <button
        className="btn btn-warning"
        onClick={() => navigate("/aboutus", { replace: true })}
      >
        About Us
      </button>
    </div>
  );
};

export default ErrorPage;
