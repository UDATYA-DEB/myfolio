import React from "react";
import "./topbar.css";
import { resume } from "../../data";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="logo-container">Udatya Deb</div>
      <div className="menu-container">
        <span>About Me</span>
        <span>Projects</span>
        <span>Contact</span>
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
