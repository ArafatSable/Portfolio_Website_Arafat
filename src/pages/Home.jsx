import { useMemo } from "react";
import WaterWave from "react-water-wave";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import bg from "../assets/bg.png";
import resume from "../assets/Resume.pdf";
import "../styles/Home.css";

/* helpers ------------------------------------------------ */
const webglOk = () => {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && c.getContext("webgl"));
  } catch {
    return false;
  }
};
const reduce = () =>
  matchMedia("(prefers-reduced-motion: reduce)").matches;

/* overlay ------------------------------------------------ */
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
  /* run the ripple only on large screens with WebGL */
  const useWaterWave = useMemo(
    () => window.innerWidth >= 768 && webglOk() && !reduce(),
    [],
  );

  if (useWaterWave) {
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

  /* phones & tablets: plain hero image */
  return (
    <div
      className="home-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Overlay />
    </div>
  );
}
