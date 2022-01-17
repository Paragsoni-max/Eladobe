import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">El Adobe</div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/" >
          Home
        </Link>
        <a href="/" target="_blank">
          About Us
        </a>
        <a href="/" target="_blank">
          Menu
        </a>
        <a href="/" target="_blank">
          Catering & Events
        </a>
        <Link to="/blogs" >
          Blogs
        </Link>
        <a href="/" target="_blank">
          Contact Us
        </a>
      </div>
      <div className="last">
        <a href="/">Order Online</a>{" "}
      </div>
    </div>
  );
};

export default Navbar;
