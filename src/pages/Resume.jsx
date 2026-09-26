import { useRef } from "react";
import { clearCvFile, saveCvFile, useCvFile } from "../hooks/useCvFile";
import "../styles/Resume.css";

export default function Resume() {
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
    <section className="resume-container">
      <div className="resume-actions">
        <a href={cv.source} download={cv.name || "Arafat_Sable_CV.pdf"} className="download-button">
          Download CV
        </a>
        <button type="button" className="upload-button" onClick={() => fileRef.current?.click()}>
          Upload CV
        </button>
        <input ref={fileRef} type="file" accept="application/pdf,.pdf" hidden onChange={onUpload} />
      </div>
      {cv.uploaded ? (
        <p className="resume-status">
          Viewing {cv.name}.{" "}
          <button type="button" className="resume-reset" onClick={clearCvFile}>Use site CV</button>
        </p>
      ) : null}

      <div className="resume-viewer">
        <iframe
          key={cv.viewUrl}
          src={cv.viewUrl}
          title="My Resume"
          frameBorder="0"
        />
      </div>
    </section>
  );
}
