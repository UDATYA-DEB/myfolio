import React from "react";
import "./projects.css";
import { webdevdata, cloudcompdata, mldata } from "../../data";

import ProjectCards from "../../components/project-cards/ProjectCards";

const Projects = () => {
  return (
    <div className="project-container">
      <header>Web Dev Projects</header>
      <div className="projects-grid-container">
        {webdevdata.map((item) => {
          return <ProjectCards key={item.id} {...item} />;
        })}
      </div>
      <header>Cloud Projects</header>
      <div className="projects-grid-container">
        {cloudcompdata.map((item) => {
          return <ProjectCards key={item.id} {...item} />;
        })}
      </div>
      <header>Machine Learning Projects</header>
      <div className="projects-grid-container">
        {mldata.map((item) => {
          return <ProjectCards key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
