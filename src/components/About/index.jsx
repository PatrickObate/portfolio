import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader";
import "./style.scss";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";

const About = () => {
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
      <SectionHeader title="Who am I?" />
      <div className="first-line">
        <p id="headline" className={cn({ "is-reveal": reveal })} ref={ref}>
          Hey there! I'm Pat. A front-end engineer with a passion
          for creating minimalist and creative aesthetics that is suitable for
          everyday web applications.
        </p>
      </div>
      <SectionHeader title="What do I do?" />
      <div className="first-line">
        <p id="headline" className={cn({ "is-reveal": reveal })} ref={ref}>
          I mainly design and develop different kinds of websites. I use React,
          Adobe XD, and other various technologies to create and build web apps.
        </p>
      </div>
    </section>
  );
};

export default About;
