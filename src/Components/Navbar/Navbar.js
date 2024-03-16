import React, { useEffect, useState } from "react";

import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleNavigationClick = (event, sectionId) => {
    event.preventDefault(); // Prevent the default behavior of anchor tag
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpenMenu(false); // Close the menu when scrolling
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={openMenu ? "menuIcon active" : "menuIcon"}>
      <ol className="nav-right">
        <li>
          <a
            className="navbar-link"
            onClick={(e) => handleNavigationClick(e, "about")}
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="navbar-link"
            onClick={(e) => handleNavigationClick(e, "skills")}
            href="#skills"
          >
            Skill
          </a>
        </li>
        <li>
          <a
            className="navbar-link"
            onClick={(e) => handleNavigationClick(e, "project")}
            href="#project"
          >
            Project
          </a>
        </li>
        <li>
          <a
            className="navbar-link"
            onClick={(e) => handleNavigationClick(e, "contact")}
            href="/contact"
          >
            Contact
          </a>
        </li>
        {/* Use anchor tag for Resume */}
        <a href="/resume" className="resume-link">
          Resume
        </a>
      </ol>
      {/* Mobile navbar */}
      <div className="mobile-navbar-btn">
        <FontAwesomeIcon
          icon={faBars}
          name="menu-outline"
          className="mobile-navbar-icon menu-outline"
          onClick={toggleMenu}
        />
        <FontAwesomeIcon
          icon={faTimes}
          name="close-outline"
          className="close-outline mobile-navbar-icon"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
