import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">
          Dr. Vipin Classes
        </NavLink>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#ffffff" : "#000000",
              })}
            >
              GetStudent
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/post"
              style={({ isActive }) => ({
                color: isActive ? "#ffffff" : "#000000",
              })}
            >
              InsertStudent
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/put"
              style={({ isActive }) => ({
                color: isActive ? "#ffffff" : "#000000",
              })}
            >
              UpdateStudent
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/delete"
              style={({ isActive }) => ({
                color: isActive ? "#ffffff" : "#000000",
              })}
            >
              DeleteStudent
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
