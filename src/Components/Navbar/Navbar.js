import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-right">
      <ol>
        <li>
          <a className="navbar-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="navbar-link" href="#skills">
            Skill
          </a>
        </li>
        <li>
          <a className="navbar-link" href="#project">
            Project
          </a>
        </li>
        <li>
          <a className="navbar-link" href="/contact">
            Contact
          </a>
        </li>
      </ol>
      {/* Use a instead of anchor tag */}
      <a href="/resume" className="resume-link">
        Resume
      </a>
    </div>
  );
};

export default Navbar;
