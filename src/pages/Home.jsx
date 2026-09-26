import { useMemo, useRef } from "react";
import WaterWave from "react-water-wave";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TypewriterHeading from "../components/TypewriterHeading";
import { clearCvFile, saveCvFile, useCvFile } from "../hooks/useCvFile";
import bg from "../assets/bg.png";
import "../styles/Home.css";

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

const Overlay = () => {
  const fileRef = useRef(null);
  const cv = useCvFile();

  const onUpload = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      await saveCvFile(file);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="social-bar">
        <a href="https://github.com/ArafatSable" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://linkedin.com/in/arafatsable" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="mailto:arafatsable@gmail.com"><FaEnvelope/></a>
      </div>

      <div className="home-overlay" />

      <div className="home-content">
        <TypewriterHeading />
        <p>Zoho Creator Certified Developer building enterprise low-code apps and API integrations. Abu Dhabi · open to UAE roles.</p>
        <div className="cv-actions">
          <a href={cv.source} className="download-btn" download={cv.name || "Arafat_Sable_CV.pdf"}>
            Download CV
          </a>
          <button type="button" className="upload-btn" onClick={() => fileRef.current?.click()}>
            Upload CV
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/pdf,.pdf"
            hidden
            onChange={onUpload}
          />
        </div>
        {cv.uploaded ? (
          <p className="cv-status">
            Using {cv.name}.{" "}
            <button type="button" className="cv-reset" onClick={clearCvFile}>Use site CV</button>
          </p>
        ) : null}
      </div>
    </>
  );
};

export default function Home() {
  const useWaterWave = useMemo(
    () => window.innerWidth >= 768 && webglOk() && !reduce(),
    [],
  );

  if (useWaterWave) {
    return (
      <WaterWave
        imageUrl={bg}
        className="home-section"
        dropRadius={10}
        perturbance={0.0055}
        resolution={500}
      >
        {() => <Overlay />}
      </WaterWave>
    );
  }

  return (
    <div
      className="home-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Overlay />
    </div>
  );
}
