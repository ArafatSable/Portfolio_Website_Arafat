// src/components/ProjectCard.jsx
import React from "react";
import "../styles/ProjectCard.css";

export default function ProjectCard({ image, title, description, github, demo }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      {(github || demo) && (
        <div className="project-links">
          {github && (
            <a
              href={github}
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              className="project-button outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
