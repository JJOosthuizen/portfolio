import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import React from "react";
import Intro from "./components/Intro";



function App() {
  return (
    <div className="App">
      <Intro />
      <Hero />
      <Languages />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
