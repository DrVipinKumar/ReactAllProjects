import { NavLink, Outlet } from "react-router-dom";

const Service = () => {
  return (
    <div style={{ height: "400px" }}>
      <h2>We are providing following services</h2>
      <nav className="text-start">
        <NavLink className="m-2" to="onlinevideos">
          Online Videos
        </NavLink>
        <NavLink className="m-2" to="youtubevideos">
          YouTube Videos
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Service;
