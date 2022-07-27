import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

function Intro() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".intro-text", { y: "0", duration: 1, stagger: 0.75 });
    tl.to(".intro", { y: "-100%", duration: 1.5, delay: 0.75 });
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".hero", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
    tl.fromTo(".languages", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  }, []);

  return (
      <div className="intro">
        <h1 className="hide">
          <span className="intro-text">Hi!</span>
        </h1>
        <h1 className="hide">
          <span className="intro-text">I'm Jacques Oosthuizen</span>
        </h1>
        <h1 className="hide">
          <span className="intro-text">An Aspiring</span>
        </h1>
        <h1 className="hide">
          <span className="intro-text">Web Developer 💻</span>
        </h1>
      </div>
  );
}

export default Intro;
