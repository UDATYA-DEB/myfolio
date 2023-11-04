import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const useMyContext = () => {
  useContext(Context);
};
export const MyContextProvider = (props) => {
  //   const [scrollProject, setScrollProject] = useState();
  //   const [scrollContact, setScrollContact] = useState();
  //   const [scrollAboutMe, setScrollAboutMe] = useState();
  //   const [scrollBtnProject, setScrollBtnProject] = useState();
  //   const [scrollBtnAboutMe, setScrollBtnAboutMe] = useState();
  //   const [scrollBtnContact, setScrollBtnContact] = useState();

  //   document.addEventListener("DOMContentLoaded", () => {
  //     scrollBtnContact.addEventListener("click", () => {
  //       const scrollToContact = scrollContact.offsetTop;

  //       window.scrollTo({
  //         top: scrollToContact,
  //         behavior: "smooth",
  //       });
  //     });
  //     scrollBtnProject.addEventListener("click", () => {
  //       const scrollToProject = scrollProject.offsetTop;

  //       window.scrollTo({
  //         top: scrollToProject,
  //         behavior: "smooth",
  //       });
  //     });
  //     scrollBtnAboutMe.addEventListener("click", () => {
  //       const scrollToAboutMe = scrollAboutMe.offsetTop;

  //       window.scrollTo({
  //         top: scrollToAboutMe,
  //         behavior: "smooth",
  //       });
  //     });
  //   });
  return (
    <Context.Provider
      value={
        {
          // scrollProject,
          // scrollContact,
          // scrollAboutMe,
          // scrollBtnProject,
          // scrollBtnAboutMe,
          // scrollBtnContact,
          // setScrollProject,
          // setScrollContact,
          // setScrollBtnContact,
          // setScrollBtnAboutMe,
          // setScrollBtnProject,
          // setScrollAboutMe,
        }
      }
    >
      {props.children}
    </Context.Provider>
  );
};
