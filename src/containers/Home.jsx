import React, { useState, useRef, useEffect } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import useLocoScroll from "../hooks/useLocoScroll";

import "../styles/home.scss";


const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(2);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Patrick Obate</h1>
        </div>
      ) : (
        <div
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Navbar />
          <Hero />
          <About />
          <Gallery />
          <Skills />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
