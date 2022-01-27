import "../App.css";
import React from "react";
import data from "../data";
/* eslint-disable react/jsx-no-target-blank */

export default function Projects({ props }) {
  return (
    <div className="section" style={{ paddingBottom: "50px" }}>
      {data
        .filter((project) => project.course.includes(props.class))
        .map((project) => (
          <div style={{ marginTop: "50px" }}>
            <h2>{project.projectTitle}</h2>
            <p>
              <strong>Duration:</strong> {project.duration}
            </p>
            <p>
              <strong>Objective:</strong> {project.objective}
            </p>
            {Object.entries(project.links).map(([key, value]) => (
              <small>
                <a
                  href={value}
                  target="_blank"
                  style={{
                    marginRight: "20px",
                    color: props.darkMode ? "white" : "black",
                  }}
                >
                  {key}
                </a>
              </small>
            ))}
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  marginRight: "20px",
                  borderRadius: "15px",
                }}
                src={project.image}
                alt="Project"
              ></img>
              <small>{project.description}</small>
            </div>
          </div>
        ))}
    </div>
  );
}
