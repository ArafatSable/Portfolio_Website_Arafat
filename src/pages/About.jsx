// src/components/About.jsx
import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="subtitle">Here you will find more about me.</p>

        <div className="about-grid">
          {/* Left column */}
          <div className="about-column">
            <h3>Get To Know Me!</h3>
            <p>
              I’m Arafat Sable, a Computer Science graduate and DevOps Engineer based
              in Ahmedabad. I love turning complex infrastructure into simple,
              automated pipelines that ship code faster and more reliably.
            </p>
            <p>
              Whether it’s designing fault-tolerant AWS architectures or containerizing
              applications on Kubernetes, I’m happiest when solving cloud challenges
              end-to-end.
            </p>
            <p>
              Outside of work, you’ll find me experimenting with planted aquascapes or
              tinkering with the latest open-source DevOps tools.
            </p>
          </div>

          {/* Right column: two rows */}
          <div className="about-column">
            {/* Row 1: My Skills */}
            <div className="about-row">
              <h4>My Skills</h4>
              <p>Cloud & Infrastructure, AWS, Terraform, Ansible, Kubernetes, Helm</p>
            </div>

            {/* Row 2: Languages & Tools */}
            <div className="about-row mt-8">
              <h4>Languages &amp; Tools</h4>
              <p>JavaScript, Python, Java, Git, Bash</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
