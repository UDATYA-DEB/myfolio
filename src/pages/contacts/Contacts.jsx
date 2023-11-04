import React from "react";
import "./contacts.css";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { socialData } from "../../data";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="social-details">
        <span
          className="socials"
          onClick={() => {
            window.open(socialData.mygithub, "_blank");
          }}
        >
          <FaSquareGithub size={"30px"} />: /UDATYA-DEB
        </span>
        <span
          className="socials"
          onClick={() => {
            window.open(socialData.mylinkedin, "_blank");
          }}
        >
          <BsLinkedin size={"30px"} />: /udatya-deb
        </span>
        <span
          className="socials"
          onClick={() => {
            window.open(socialData.myx, "_blank");
          }}
        >
          <FaSquareXTwitter size={"30px"} />: /@udatya_deb
        </span>
      </div>
      <div className="social-details">
        <span style={{ display: "flex" }}>
          <MdEmail size={"30px"} />:<span>udatya.developer@gmail.com</span>
        </span>
        <span style={{ display: "flex" }}>
          <BsTelephoneFill size={"25px"} />:
          <span>+91-7044222356/+91-8282868726</span>
        </span>
        <span style={{ display: "flex" }}>
          <ImLocation size={"30px"} />:<span>Kolkata, INDIA</span>
        </span>
      </div>
    </div>
  );
};

export default Contacts;
