import React, { useEffect, useRef, useState } from "react";
import "../styles/About.css";

/* ── Inline Car SVG ───────────────────────────────────────── */
const Car = () => (
  <svg
    className="car-svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    {/* Body */}
    <rect x="22" y="8" width="20" height="48" rx="3" ry="3" fill="#E10600"/>
    {/* Windows */}
    <rect x="26" y="12" width="12" height="8" rx="1" ry="1" fill="#1c1c1c"/>
    <rect x="26" y="44" width="12" height="8" rx="1" ry="1" fill="#1c1c1c"/>
    {/* Tires */}
    <rect x="18" y="10" width="4" height="10" rx="1" ry="1" fill="#111"/>
    <rect x="42" y="10" width="4" height="10" rx="1" ry="1" fill="#111"/>
    <rect x="18" y="44" width="4" height="10" rx="1" ry="1" fill="#111"/>
    <rect x="42" y="44" width="4" height="10" rx="1" ry="1" fill="#111"/>
    {/* Highlights */}
    <circle cx="24" cy="10" r="1.5" fill="#FFD700"/>
    <circle cx="40" cy="10" r="1.5" fill="#FFD700"/>
    <circle cx="24" cy="54" r="1.5" fill="#FFD700"/>
    <circle cx="40" cy="54" r="1.5" fill="#FFD700"/>
  </svg>
);

/* ── Skill Pill ───────────────────────────────────────────── */
const SkillChip = ({ label, cat }) => (
  <span className={`skill-chip ${cat}`}>{label}</span>
);

export default function About() {
  const workRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (workRef.current) io.observe(workRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="about-container">

        {/* -------- ABOUT ME -------- */}
        <h2>About Me</h2>
        <p className="subtitle">Here you will find more about me.</p>
        <div className="about-grid">
          <div className="about-column">
            <h3>Get To Know Me!</h3>
            <p>
              I’m Arafat Sable, a Computer Science graduate and DevOps Engineer
              based in Ahmedabad. I love turning complex infrastructure into
              simple, automated pipelines that ship code faster and more reliably.
            </p>
            <p>
              Whether it’s designing fault-tolerant AWS architectures or
              containerizing applications on Kubernetes, I’m happiest when
              solving cloud challenges end-to-end.
            </p>
            <p>
              Outside of work, you’ll find me experimenting with planted
              aquascapes or tinkering with the latest open-source DevOps tools.
            </p>
          </div>
          <div className="about-column right-column">
            <div className="about-row">
              <h4>My Skills</h4>
              <div className="skill-list">
                {[
                  ["Cloud & Infrastructure", "cloud"],
                  ["AWS", "cloud"],
                  ["Terraform", "iac"],
                  ["Ansible", "iac"],
                  ["Kubernetes", "cloud"],
                  ["Helm", "iac"],
                ].map(([label, cat]) => (
                  <SkillChip key={label} label={label} cat={cat} />
                ))}
              </div>
            </div>
            <div className="about-row">
              <h4>Languages & Tools</h4>
              <div className="skill-list">
                {[
                  ["JavaScript", "lang"],
                  ["Python", "lang"],
                  ["Java", "lang"],
                  ["Git", "tool"],
                  ["Bash", "tool"],
                ].map(([label, cat]) => (
                  <SkillChip key={label} label={label} cat={cat} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* -------- WORK EXPERIENCE -------- */}
        <h2 className="work-title">Work Experience</h2>
        <div
          ref={workRef}
          className={`road-wrapper ${play ? "play" : ""}`}
        >
          {/* curved road for desktop */}
          <svg
            className="road-svg curve"
            viewBox="0 0 800 330"
            preserveAspectRatio="none"
          >
            <path className="road-surface"
              d="M40 200 C160 80 240 80 360 200 S560 270 760 200"
            />
            <path className="road-dash"
              d="M40 200 C160 80 240 80 360 200 S560 270 760 200"
            />
          </svg>
          {/* straight road for tablet/mobile */}
          <svg
            className="road-svg straight"
            viewBox=" 0 200 500"
            preserveAspectRatio="none"
          >
            <path className="road-surface"
              d="M100 20 L100 480"
            />
            <path className="road-dash"
              d="M100 20 L100 480"
            />
          </svg>

          {/* car */}
          <div className="car"><Car/></div>

          {/* work boxes */}
          <div className="work-box work1">WORK 1</div>
          <div className="work-box work2">WORK 2</div>
        </div>
      </div>
    </section>
  );
}
