import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 768;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const showNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <nav>
      <p className="nav-name">
        <span className="firstname">Jacques</span>
        <span className="surname">Oosthuizen</span>
      </p>
      <ul className={`${showNav ? "show-nav" : ""}`}>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#email">Contact</a>
        </li>
      </ul>
      {/* {`${isMobile ? "burger" : "hidden"}`} */}
      <div className={`burger ${showNav ? "toggle" : ""}`} onClick={showNavbar}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
