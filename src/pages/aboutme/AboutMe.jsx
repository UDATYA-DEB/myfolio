import React from "react";
import "./aboutme.css";
import { aboutmeMsg } from "../../data";
import myPhoto from "../../files/74970338.jpeg";

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-padding-container">
        <div className="msg-container">
          <span className="msg">{aboutmeMsg}</span>
        </div>
        <div className="photo-container">
          <img
            src={myPhoto}
            alt=""
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
