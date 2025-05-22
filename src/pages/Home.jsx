// src/pages/Home.jsx   (or components/Home.jsx – wherever you keep it)
import React, { useMemo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import WaterWave from "react-water-wave";

import bg from "../assets/bg.png";
import resume from "../assets/Resume.pdf";
import "../styles/Home.css";

/* ——— helper ——— */
const canUseWaterWave = () => {
  if (typeof window === "undefined") return false;        // SSR / build
  if (window.innerWidth < 768) return false;              // skip on phones
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext && canvas.getContext("webgl")
    );
  } catch {
    return false;
  }
};

export default function Home() {
  /* compute once per page-load */
  const useWebGL = useMemo(canUseWaterWave, []);

  /* the content that sits on top (re-used in both branches) */
  const OverlayContent = () => (
    <>
      {/* ── Social bar ─────────────────────────── */}
      <div className="social-bar">
        <a href="https://github.com/ArafatSable"   target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/arafatsable" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:arafatsable@gmail.com"><FaEnvelope /></a>
      </div>

      <div className="home-overlay" />

      <div className="home-content">
        <h1 className="typewriter">Hi, I’m Arafat Sable</h1>
        <p>I build and automate cloud-native infrastructures that scale.</p>
        <a href={resume} className="download-btn" download>Download CV</a>
      </div>
    </>
  );

  /* ——— 1️⃣ GPU-capable desktop / laptop ——— */
  if (useWebGL) {
    return (
      <WaterWave
        imageUrl={bg}
        dropRadius={15}
        perturbance={0.01}
        resolution={256}           /* lighter for perf            */
        className="home-section"
      >
        {() => <OverlayContent />}
      </WaterWave>
    );
  }

  /* ——— 2️⃣ Phones / no-WebGL fallback ——— */
  return (
    <div
      className="home-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <OverlayContent />
    </div>
  );
}
