// src/components/ProjectCard.jsx
import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ image, title, description, github, demo }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer" className="project-button">
          GitHub
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="project-button outline">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
