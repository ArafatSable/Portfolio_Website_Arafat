import { useEffect, useMemo, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import WaterWave from "react-water-wave";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

import bg from "../assets/bg.png";
import resume from "../assets/Resume.pdf";
import "../styles/Home.css";

/* helpers ------------------------------------------------------- */
const supportsWebGL = () => {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && c.getContext("webgl"));
  } catch {
    return false;
  }
};
const prefersReduce = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* reusable overlay content ------------------------------------- */
function Overlay() {
  return (
    <>
      <div className="social-bar">
        <a href="https://github.com/ArafatSable" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/arafatsable" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:arafatsable@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <div className="home-overlay" />

      <div className="home-content">
        <h1 className="typewriter">Hi, I’m Arafat Sable</h1>
        <p>I build and automate cloud-native infrastructures that scale.</p>
        <a href={resume} className="download-btn" download>
          Download CV
        </a>
      </div>
    </>
  );
}

export default function Home() {
  const heroRef = useRef(null);

  /* initialise Vanta on mobile screens */
  useEffect(() => {
    if (
      window.innerWidth >= 768 ||
      !supportsWebGL() ||
      prefersReduce()
    )
      return;

    const vanta = WAVES({
      el: heroRef.current,
      THREE,
      // imageSrc: bg,          // use same hero image as texture
      // color: 0x1a6333,       // tweak colours to taste
      color: 0xffffff,       // subtle white highlights
      backgroundColor: 0x000000,  // required by lib
      backgroundAlpha: 0.0,       
      shininess: 40,
      waveHeight: 15,
      waveSpeed: 0.5,
      zoom: 0.85,
    });
    return () => vanta.destroy();
  }, []);

  /* decide once whether to use WaterWave */
  const useWaterWave = useMemo(() => {
    return window.innerWidth >= 768 && supportsWebGL() && !prefersReduce();
  }, []);

  /* ---------- Desktop interactive ripple --------------------- */
  if (useWaterWave) {
    return (
      <WaterWave
        imageUrl={bg}
        dropRadius={15}
        perturbance={0.01}
        resolution={256}          /* lighter for perf           */
        className="home-section"
      >
        {() => <Overlay />}
      </WaterWave>
    );
  }

  /* ---------- Mobile (or reduced-motion) fallback ------------- */
  return (
    <div
      ref={heroRef}
      className="home-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Overlay />
    </div>
  );
}
