import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "#000000" : "#ffffff",
      fontWeight: isActive ? "bold" : "",
    };
  };
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">
          Dr. Vipin Classes
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/"
              style={activeLink}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/language" style={activeLink}>
              Languages
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/service" style={activeLink}>
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contactus" style={activeLink}>
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/aboutus" style={activeLink}>
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
