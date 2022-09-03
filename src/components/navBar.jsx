import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar_bg_gradient">
      <Link className="navbar-brand" to="/">
        HS
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              to="/features"
            >
              Features
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              to="/mindmaps"
            >
              Mindmap
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              to="/contact"
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
