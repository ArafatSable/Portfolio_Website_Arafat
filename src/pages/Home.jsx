import React from "react";
import WaterWave from "react-water-wave";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import bg from "../assets/bg.png";
import resume from "../assets/Resume.pdf";
import "../styles/Home.css";

export default function Home() {
  return (
    <WaterWave
      imageUrl={bg}          /* the hero texture               */
      dropRadius={15}        /* ripple size (px)               */
      perturbance={0.01}     /* how “watery” the refraction is */
      resolution={512}       /* lower on mobile for FPS        */
      className="home-section"
    >
      {() => (
        <>
          {/* ─── Social Bar ─────────────────────────────────────────── */}
          <div className="social-bar">
            <a
              href="https://github.com/ArafatSable"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/arafatsable"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:arafatsable@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          {/* ─── Dark overlay ───────────────────────────────────────── */}
          <div className="home-overlay" />

          {/* ─── Centered hero text ─────────────────────────────────── */}
          <div className="home-content">
            <h1 className="typewriter">Hi, I’m Arafat Sable</h1>
            <p>I build and automate cloud-native infrastructures that scale.</p>

            <a href={resume} className="download-btn" download>
              Download CV
            </a>
          </div>
        </>
      )}
    </WaterWave>
  );
}
