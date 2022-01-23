import React from "react";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="nav" data-scroll-section>
      <div className="navbar-container">
        <p className="nav-link">Patrick Obate</p>
        <p className="nav-link-color">O</p>
        <a className="nav-link" href="mailto:patrickpobate@gmail.com">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
