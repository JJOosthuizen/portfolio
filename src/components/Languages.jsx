import React from "react";

import github from "../images/icons/githubname.png";
import css from "../images/icons/css.svg";
import html from "../images/icons/html.svg";
import javascript from "../images/icons/javascript.svg";
import nodejs from "../images/icons/nodejs.png";
import react from "../images/icons/react.png";

function Languages() {
  return (
    <section className="languages-section">
      <div className="languages">
        <img src={github} alt="github" />
        <img src={css} alt="css" />
        <img src={html} alt="html" />
        <img src={javascript} alt="javascript" />
        <img src={nodejs} alt="nodejs" />
        <img src={react} alt="react" />
      </div>
    </section>
  );
}

export default Languages;
