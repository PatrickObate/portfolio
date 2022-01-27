import React from "react";
import "./style.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer-container" data-scroll-section id="footer">
      <p>connect with me:</p>
      <a className="email-link" href="mailto: contact@patrickobate.com">
        contact@patrickobate.com
      </a>
      <div className="icon-container">
        <a
          className="icon-link"
          href={`https://github.com/PatrickObate`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className="icon-link"
          href={`https://www.instagram.com/patrickobate/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          className="icon-link"
          href={`https://www.linkedin.com/in/patrick-obate/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
