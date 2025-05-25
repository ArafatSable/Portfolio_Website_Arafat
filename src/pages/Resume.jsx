import React from "react";
import resumeFile from "../assets/Resume.pdf";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <section className="resume-container">
      {/* Download button */}
      <div className="resume-actions">
        <a href={resumeFile} download className="download-button">
          ⬇️ Download CV
        </a>
      </div>

      {/* PDF viewer */}
      <div className="resume-viewer">
        <iframe
          src={resumeFile}
          title="My Resume"
          frameBorder="0"
          allow="autoplay"
        />
      </div>
    </section>
  );
}
