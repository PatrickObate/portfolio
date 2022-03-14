import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader";
import "./style.scss";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";

const Skill = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section className={cn("about-section")} data-scroll-section>
      <SectionHeader title="my skills?" />
      <div className="first-line">
        <p id="headline" className={cn({ "is-reveal": reveal })} ref={ref}>
          HTML, CSS, SASS, SCSS, JAVASCRIPT, STYLED-COMPONENTS, REACT,
          BOOTSTRAP, GSAP, LOTTIE, ADOBE-XD, PHOTOSHOP, MONGODB, NODE, EXPRESS,
          VIDEO-EDITING
        </p>
      </div>
    </section>
  );
};

export default Skill;
