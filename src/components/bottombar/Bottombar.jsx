import React, { useEffect } from "react";
import "./bottombar.css";
import Contacts from "../../pages/contacts/Contacts";
import { useMyContext } from "../../MyContext";

const Bottombar = () => {
  const myContext = useMyContext();
  // useEffect(() => {
  //   myContext.setScrollAboutMe = document.getElementById("bottombarpoint");
  // }, []);
  return (
    <div className="bottombar-container" id="bottombarpoint">
      <Contacts />
    </div>
  );
};

export default Bottombar;
