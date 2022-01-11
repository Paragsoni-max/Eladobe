import "./navbar.css";
import React from "react";

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
        <a href="/" target="_blank">
          Home
        </a>
        <a href="/" target="_blank">
          About Us
        </a>
        <a href="/" target="_blank">
          Menu
        </a>
        <a href="/" target="_blank">
          Catering & Events
        </a>
        <a href="" target="_blank">
          Giving Back
        </a>
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
