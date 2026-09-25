// src/pages/Projects.jsx
import React from "react";
import projects from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section className="projects-container">
      <h2>My Projects</h2>
      <p className="subtitle" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Selected public work and generalised client projects. Client names omitted under NDA.
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
