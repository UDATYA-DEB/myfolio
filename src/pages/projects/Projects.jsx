import React, { useEffect } from "react";
import "./projects.css";
import { webdevdata, cloudcompdata, mldata } from "../../data";

import ProjectCards from "../../components/project-cards/ProjectCards";
import { useMyContext } from "../../MyContext";

const Projects = () => {
  const myContext = useMyContext();
  // useEffect(() => {
  //   myContext.setScrollProject(document.getElementById("projectpoint"));
  // }, []);
  return (
    <div className="project-container" id="projectpoint">
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
