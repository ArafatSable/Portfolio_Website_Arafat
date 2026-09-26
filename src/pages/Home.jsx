import { useEffect, useMemo, useRef, useState } from "react";
import WaterWave from "react-water-wave";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TypewriterHeading from "../components/TypewriterHeading";
import bg from "../assets/bg.png";
import bundledResume from "../assets/Resume.pdf";
import "../styles/Home.css";

const CV_STORE_KEY = "arafat-cv-dataurl";
const CV_NAME_KEY = "arafat-cv-name";

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
  const [cvUrl, setCvUrl] = useState(bundledResume);
  const [cvName, setCvName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(CV_STORE_KEY);
    const name = localStorage.getItem(CV_NAME_KEY);
    if (saved) {
      setCvUrl(saved);
      setCvName(name || "Uploaded CV.pdf");
    }
  }, []);

  const onUpload = (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      alert("Please upload a PDF.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result || "");
      try {
        localStorage.setItem(CV_STORE_KEY, dataUrl);
        localStorage.setItem(CV_NAME_KEY, file.name);
      } catch {
        alert("File is too large for this browser to keep. Try a smaller PDF.");
        return;
      }
      setCvUrl(dataUrl);
      setCvName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const resetCv = () => {
    localStorage.removeItem(CV_STORE_KEY);
    localStorage.removeItem(CV_NAME_KEY);
    setCvUrl(bundledResume);
    setCvName("");
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
          <a href={cvUrl} className="download-btn" download={cvName || "Arafat_Sable_CV.pdf"}>
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
        {cvName ? (
          <p className="cv-status">
            Using {cvName}.{" "}
            <button type="button" className="cv-reset" onClick={resetCv}>Use site CV</button>
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
