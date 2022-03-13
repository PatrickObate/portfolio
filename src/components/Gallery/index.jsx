import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.scss";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import Meraki from "../../pictures/meraki.png";
import Pyongbbu from "../../pictures/pyong.png";

const images = [
  {
    src: Meraki,
    title: "MERAKI",
    subtitle: "2021",
    category: "UX/UI Design",
    link: "https://xd.adobe.com/view/ae3cbba5-a2a7-4788-b33e-df26a1f9df13-fb6f/",
  },
  {
    src: Pyongbbu,
    title: "PYONGBBU",
    subtitle: "2022",
    category: "React Ecommerce Website",
    link: "https://pyongbbu.com/",
  },
];

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
  link,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <a
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
      href={`${link}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ cursor: "default" }}
    >
      <div />
      <div className={"gallery-item"} style={{ cursor: "pointer" }}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})`, cursor: "pointer" }}
        ></div>
      </div>
      <div />
    </a>
  );
}

const Gallery = ({ src, index, columnOffset }) => {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

       gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery" ref={ref} id="projects">
        <div className="gallery-counter">
          <span>.0000{activeImage}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
