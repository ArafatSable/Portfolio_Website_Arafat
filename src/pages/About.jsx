import React, { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import car from "../assets/car.png";

/* ---------- skill pill -------------------------------------- */
const SkillChip = ({ label, cat }) => (
  <span className={`skill-chip ${cat}`}>{label}</span>
);

export default function About() {
  const workRef = useRef(null);
  const [play, setPlay] = useState(false);

  // track mobile vs desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // trigger when visible
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (workRef.current) io.observe(workRef.current);
    return () => io.disconnect();
  }, []);

  // pick which SVG and path to use
  const roadData = isMobile
    ? {
        viewBox: "0 0 200 500",
        path: "M100 20 L100 480",          // straight line down
        dash: "20 30",
        wrapperHeight: 500,
        work1Pos: "30%",
        work2Pos: "75%",
      }
    : {
        viewBox: "0 0 800 330",
        path: "M40 200 C160 80 240  80 360 200 S560 270  760 200",
        dash: "20 28",
        wrapperHeight: 330,
        work1Pos: "30%",
        work2Pos: "75%",
      };

  return (
    <section id="about">
      <div className="about-container">

        {/* ------------ ABOUT ME (existing) ---------------- */}
        <h2>About Me</h2>
        <p className="subtitle">Here you will find more about me.</p>

        <div className="about-grid">
          {/* left column */}
          <div className="about-column">
            <h3>Get To Know Me!</h3>
            {/* … paragraphs unchanged … */}
            <p>
              I’m Arafat Sable, a Computer Science graduate and DevOps Engineer
              based in Ahmedabad. I love turning complex infrastructure into
              simple, automated pipelines that ship code faster and more
              reliably.
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

          {/* right column */}
          <div className="about-column right-column">
            {/* skills */}
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

            {/* languages & tools */}
            <div className="about-row">
              <h4>Languages &amp; Tools</h4>
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

        {/* ------------ WORK EXPERIENCE (new) --------------- */}
        <h2 className="work-title">Work Experience</h2>

        <div
        ref={workRef}
        className={`road-wrapper ${play ? "play" : ""} ${
          isMobile ? "mobile" : "desktop"
        }`}
        style={{ height: roadData.wrapperHeight }}
      >
         {/* SVG ROAD – dark asphalt + white dashed centre line */}
         <svg
          className="road-svg"
          viewBox={roadData.viewBox}
          preserveAspectRatio="none"
        >
   <path
            id="road-path"
            d={roadData.path}
            fill="none"
            stroke="#464646"
            strokeWidth={isMobile ? 30 : 40}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
  {/* centre dash */}
  <path
            d={roadData.path}
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            strokeDasharray={roadData.dash}
            strokeLinecap="round"
          />
</svg>
          {/* car i want to use image here */}
          <img src={car} alt="car" className="car" />

          {/* work boxes */}
          <div className="work-box work1">WORK 1</div>
          <div className="work-box work2">WORK 2</div>
        </div>
      </div>
    </section>
  );
}
