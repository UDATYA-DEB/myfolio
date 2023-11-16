import React from "react";
import "./project-cards.css";
import { FaSquareGithub } from "react-icons/fa6";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const ProjectCards = ({
  id,
  title,
  img,
  desc,
  deployed,
  github,
  status,
  style,
}) => {
  // const [expand, setExpand] = useState(true);
  return (
    <div className="project-cards-container">
      <div className="card-templete">
        <div
          className="image-container"
          style={{ backgroundImage: `url(${img})`, position: "relative" }}
        >
          {/* <button className="expand" onClick={() => setExpand(!expand)}>
            +
          </button> */}
        </div>
        <div
          style={{
            position: "absolute",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "8%",
            // backgroundColor: "blue",
          }}
        >
          <p
            className="title-style"
            style={style ? { color: `${style}` } : { color: "black" }}
          >
            {title}
          </p>
          <span
            style={{
              fontWeight: "500",
              color: `${style ? "white" : "black"}`,
              fontSize: "20px",
            }}
          >
            Status:{" "}
            <span
              className="status-style"
              style={
                status
                  ? { backgroundColor: "rgba(0, 128, 0, 0.685)" }
                  : { backgroundColor: "rgba(255, 0, 0, 0.614)" }
              }
            >
              {status ? "complete" : "pending"}
            </span>
          </span>
        </div>
      </div>
      <div className="card-info-container">
        <div className="desc">{desc}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            padding: "20px 10px",
            height: "100%",
          }}
        >
          {/* <button
            className="github"
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              border: "none",
            }}
          >
            G
          </button> */}
          {github && (
            <div
              className="btn-tooltip"
              onClick={() => window.open(github, "_blank")}
            >
              <span
                className="github"
                style={{
                  position: "absolute",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                GitHub Repository
              </span>
              <FaSquareGithub
                size={"30px"}
                style={{ cursor: "pointer", color: "#6648ba" }}
              />
            </div>
          )}
          {deployed && (
            <div
              className="btn-tooltip"
              onClick={() => window.open(deployed, "_blank")}
            >
              <span
                className="github"
                style={{
                  position: "absolute",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                Project Deployed
              </span>
              <BsArrowUpRightSquareFill
                size={"25px"}
                style={{ cursor: "pointer", color: "#307069" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
