import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";
import "./style.scss";
import PatPicture from "../../pictures/pat.png";


const Hero = () => {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <div className="header-container" data-scroll-section>
      <h1 className="header-text" id="header-text">
        Eager to Develop & Eager to Design
      </h1>
      <img
        src={PatPicture}
        className="hero-picture"
        data-scroll
        alt="Patrick Obate Picture"
      />
    </div>
  );
};

export default Hero;
