// Home.jsx
import { useEffect, useMemo, useRef } from "react";
import WaterWave from "react-water-wave";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import bg from "../assets/bg.png";
import resume from "../assets/Resume.pdf";
import "../styles/Home.css";

/* helpers */
const webglOk = () => {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && c.getContext("webgl"));
  } catch { return false; }
};
const reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

const Overlay = () => (
  <>
    <div className="social-bar">
      <a href="https://github.com/ArafatSable" target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href="https://linkedin.com/in/arafatsable" target="_blank" rel="noreferrer"><FaLinkedin/></a>
      <a href="mailto:arafatsable@gmail.com"><FaEnvelope/></a>
    </div>

    <div className="home-overlay" />

    <div className="home-content">
      <h1 className="typewriter">Hi, I’m Arafat Sable</h1>
      <p>I build and automate cloud-native infrastructures that scale.</p>
      <a href={resume} className="download-btn" download>Download CV</a>
    </div>
  </>
);

export default function Home() {
  const hero = useRef(null);

  /* ── VANTA on phones ─────────────────────────── */
  useEffect(() => {
    if (window.innerWidth >= 768 || !webglOk() || reduce()) return;

    const v = WAVES({
      el: hero.current,
      THREE,
      color: 0xffffff,
      shininess: 35,
      waveHeight: 12,
      waveSpeed: 0.45,
      zoom: 0.9,
      backgroundColor: 0x000000,
      backgroundAlpha: 0.0,       // <- make canvas transparent
    });
    return () => v.destroy();
  }, []);

  /* ── WaterWave on larger screens ─────────────── */
  const desktopRipple = useMemo(
    () => window.innerWidth >= 768 && webglOk() && !reduce(),
    [],
  );

  if (desktopRipple) {
    return (
      <WaterWave
        imageUrl={bg}
        className="home-section"
        dropRadius={15}
        perturbance={0.015}
        resolution={256}
      >
        {() => <Overlay />}
      </WaterWave>
    );
  }

  /* ── fallback or mobile canvas ───────────────── */
  return (
    <div
      ref={hero}
      className="home-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Overlay />
    </div>
  );
}
