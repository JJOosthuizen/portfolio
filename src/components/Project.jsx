import React from "react";
import livePreview from "../images/icons/live-preview.svg";
import sourceCode from "../images/icons/source-code.svg";

import { useInView } from "react-intersection-observer";

function Project({
  projectName,
  projectImg,
  projectPreview,
  projectCode,
  projectTech,
  projectDiff,
  projectSolution,
  projectFeatures,
}) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  const renderProject = () => {
    return (
      <div
        className={inView ? "projects projects--zoom" : "projects"}
        ref={ref}
      >
        <div className="projects-left">
          <h3 className="project-name">{projectName}</h3>
          <img src={projectImg} alt="" className="project-img" />

          <div className="live-preview">
            <a href={projectPreview} target="_blank" rel="noopener noreferrer">
              <img src={livePreview} className="filter-dark" alt="" />
              <span>Live Preview</span>
            </a>

            <a href={projectCode} target="_blank" rel="noopener noreferrer">
              <img src={sourceCode} className="filter-dark" alt="" />
              <span>Source Code</span>
            </a>
          </div>
          <h4>Technologies Used</h4>
          <div className="tech-used">
            <ul>
              {projectTech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="projects-right">
          <div className="difficulties">
            <h4>Project Difficulties</h4>
            <p>{projectDiff}</p>
          </div>
          <div className="solution">
            <h4>My Solution</h4>
            <p>{projectSolution}</p>
          </div>
          <div className="features">
            <h4>Notable Features</h4>
            <ul>
              {projectFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return <>{renderProject()}</>;
}

export default Project;
