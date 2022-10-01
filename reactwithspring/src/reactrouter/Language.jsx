import { Outlet } from "react-router-dom";
const Language = (props) => {
  return (
    <div style={{ height: "400px" }}>
      <h2>We provides videos lectures on almost ALL computer languages...</h2>
      <Outlet />
      {props.lang}
    </div>
  );
};

export default Language;
