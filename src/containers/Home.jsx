import React, { useState, useRef, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Skills from "../components/Skills";

import "../styles/home.scss";
import useLocoScroll from "../hooks/useLocoScroll";
import Footer from "../components/Footer";

const Home = () => {
  const [preloader, setPreloader] = useState(true);
  useLocoScroll(!preloader);
  const [timer, setTimer] = useState(4);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  useLocoScroll();
  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Patrick Obate</h1>
        </div>
      ) : (
        <div id="main-container" data-scroll-container>
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
