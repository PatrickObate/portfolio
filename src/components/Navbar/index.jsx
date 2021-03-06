import React from "react";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="nav" data-scroll-section>
      <div className="navbar-container">
        <p className="nav-link">Patrick Obate</p>
        <p className="nav-link-color">◯</p>
        <a className="nav-link" href="mailto: contact@patrickobate.com">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
