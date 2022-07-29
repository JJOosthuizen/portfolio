import React from "react";
import Navbar from "./Navbar";

import linkedin from "../images/icons/linkedin.svg";
import github from "../images/icons/github.svg";
import email from "../images/icons/email.svg";
import resume from "../images/icons/resume.svg";

function Hero() {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero">
        <h1>Aspiring Web Developer</h1>
        <span>Cape Town, Western Cape</span>
        <div className="links">
          <div>
            <a href="https:\\linkedin.com/in/jacques-oosthuizen-b09178241/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className="filter-white" alt="" />
            </a>

            <span>linkedin</span>
          </div>
          <div>
            <a
              href="https://github.com/JJOosthuizen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="filter-white" alt="" />
            </a>

            <span>github</span>
          </div>
          <div>
            <a href="#email">
              <img src={email} className="filter-white" alt="" />
            </a>

            <span>email</span>
          </div>
          <div>
            <a href="/">
              <img src={resume} className="filter-white" alt="" />
            </a>

            <span>resume</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
