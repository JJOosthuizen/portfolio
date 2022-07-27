import React from "react";
import Project from "./Project";

// IMAGES
import spacePortfolio from "../images/projects/spaceportfolio.png";
import tourism from "../images/projects/tourism.png";
import recipe from "../images/projects/recipe.png";
import portfolio from "../images/projects/portfolio.png";

function Projects() {
  return (
    <section className="project-section" id="project">
      <h2>Projects</h2>
      <Project
        projectName={"3D Space Portfolio"}
        projectImg={spacePortfolio}
        projectPreview={"https://jjoosthuizen.github.io/my-portfolio/"}
        projectCode={"https://github.com/JJOosthuizen/my-portfolio"}
        projectTech={[
          "Semantic HTML5 markup",
          "CSS custom properties",
          "Tailwind CSS",
          "Three.js",
          "OpenGL Shading Language",
          "GSAP",
        ]}
        projectDiff={
          "This was the first time I tried building a 3D website using Three.js. I had an idea of what I wanted the website to look like, but didn't know how to do it yet, due to a lack of knowledge with Three.js"
        }
        projectSolution={
          "I found a couple of youtube channels doing tutorials on Three.js. After watching said tutorials, I would try replicating them and reading up on the documentation to add my own spin to it. I also used tailwind.css, since I wanted to try a new approach to css. I used GSAP to have the camera animate into space."
        }
        projectFeatures={[
          "Perspective camera",
          "3D space world",
          "3D planets with textures",
          "Atmosphere look with glsl",
          "Earth rotatable with mouse",
        ]}
      />

      <Project
        projectName={"Space Tourism"}
        projectImg={tourism}
        projectPreview={"https://joos-space-tourism.netlify.app"}
        projectCode={"https://github.com/JJOosthuizen/space-tourism"}
        projectTech={[
          "Semantic HTML5 markup",
          "SCSS custom properties",
          "Grid / Flexbox",
          "JSON API",
        ]}
        projectDiff={
          "First time reading data from a JSON file and using it. I tried using SCSS instead of plain css. Mobile layout was quite a fun challenge as well with the navbar."
        }
        projectSolution={
          "FrontEndMentor & Kevin Powell did a tutorial on youtube about this project and helped me learn a lot of new things. I did the added challenge by using the JSON file and displaying the data from the file."
        }
        projectFeatures={[
          "Mobile-first workflow",
          "Optimal viewing for different screen sizes",
          "Hover states",
        ]}
      />

      <Project
        projectName={"React Recipe App"}
        projectImg={recipe}
        projectPreview={"https://jjoosthuizen.github.io/RecipeApp/"}
        projectCode={"https://github.com/JJOosthuizen/RecipeApp"}
        projectTech={[
          "React",
          "Semantic HTML5 markup",
          "CSS custom properties",
          "React styled components for CSS",
          "Spoonacular API / JSON Format",
        ]}
        projectDiff={
          "First time using React and an API from a 3rd party. Struggled at first with react states and using them. React routing was a challenge at first."
        }
        projectSolution={
          "Followed tutorial from Dev Ed, where I got to learn multiple things. I got to understand using states and how to make use of 3rd party API's which was a lot of fun. I learned about a few powerfull react node packages and understood why JS frameworks are so popular"
        }
        projectFeatures={[
          "Searchable recipes",
          "Detailed instructions & items needed for recipes",
          "Slider frames",
        ]}
      />

      <Project
        projectName={"React Portfolio"}
        projectImg={portfolio}
        projectPreview={"/"}
        projectCode={"/"}
        projectTech={["React", "GSAP", "Semantic HTML5 markup"]}
        projectDiff={
          "I wanted to create a portfolio by using all the knowledge I have learned and show it. Main struggle was creating a way to have people send me emails by using the contact form."
        }
        projectSolution={
          "I found a couple of ways to send the email from the contact form and went with formsubmit. I wanted to show the projects that I have done, but also wanted to show how I overcame challenges and what I have learned while doing them, therefore I went with the current layout."
        }
        projectFeatures={[
          "Intro scene with GSAP",
          "Mobile friendly",
          "Viewable at all screen sizes",
          "Hover effects with pointers",
        ]}
      />
    </section>
  );
}

export default Projects;
