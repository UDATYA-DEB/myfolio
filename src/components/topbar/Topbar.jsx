import React, { useEffect } from "react";
import "./topbar.css";
import { resume } from "../../data";
import { useMyContext } from "../../MyContext";

const Topbar = () => {
  const myContext = useMyContext();
  // useEffect(() => {
  //   myContext.setScrollBtnAboutMe(document.getElementById("aboutme"));
  //   myContext.setScrollBtnProject(document.getElementById("projects"));
  //   myContext.setScrollBtnContact(document.getElementById("contacts"));
  // }, []);
  return (
    <div className="topbar-container">
      <div className="logo-container">Udatya Deb</div>
      <div className="menu-container">
        <div className="menu-items" id="aboutme">
          <div className="circle"></div>
          <span>About Me</span>
        </div>
        <div className="menu-items" id="projects">
          <div className="circle"></div>
          <span>Projects</span>
        </div>
        <div className="menu-items" id="contacts">
          <div className="circle"></div>
          <span>Contact</span>
        </div>
      </div>
      <div className="resume-btn-container">
        <button
          className="resume-btn"
          onClick={() => window.open(resume, "_blank")}
        >
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Topbar;
