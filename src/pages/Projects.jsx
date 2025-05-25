// src/pages/Projects.jsx
import React from "react";
import projects from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
