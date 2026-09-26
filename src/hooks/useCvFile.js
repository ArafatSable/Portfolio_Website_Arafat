import { useEffect, useState } from "react";
import bundledResume from "../assets/Resume.pdf";

export const CV_STORE_KEY = "arafat-cv-dataurl";
export const CV_NAME_KEY = "arafat-cv-name";
export const CV_EVENT = "arafat-cv-changed";

function dataUrlToBlobUrl(dataUrl) {
  try {
    const [header, body] = dataUrl.split(",");
    const mime = header.match(/:(.*?);/)?.[1] || "application/pdf";
    const binary = atob(body);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return URL.createObjectURL(new Blob([bytes], { type: mime }));
  } catch {
    return dataUrl;
  }
}

function readStored() {
  const dataUrl = localStorage.getItem(CV_STORE_KEY);
  const name = localStorage.getItem(CV_NAME_KEY) || "";
  if (!dataUrl) {
    return { source: bundledResume, viewUrl: bundledResume, name: "", uploaded: false };
  }
  return {
    source: dataUrl,
    viewUrl: dataUrlToBlobUrl(dataUrl),
    name,
    uploaded: true,
  };
}

export function saveCvFile(file) {
  return new Promise((resolve, reject) => {
    if (!file || (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf"))) {
      reject(new Error("Please upload a PDF."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result || "");
      try {
        localStorage.setItem(CV_STORE_KEY, dataUrl);
        localStorage.setItem(CV_NAME_KEY, file.name);
      } catch {
        reject(new Error("File is too large for this browser to keep. Try a smaller PDF."));
        return;
      }
      window.dispatchEvent(new Event(CV_EVENT));
      resolve(file.name);
    };
    reader.onerror = () => reject(new Error("Could not read that file."));
    reader.readAsDataURL(file);
  });
}

export function clearCvFile() {
  localStorage.removeItem(CV_STORE_KEY);
  localStorage.removeItem(CV_NAME_KEY);
  window.dispatchEvent(new Event(CV_EVENT));
}

export function useCvFile() {
  const [cv, setCv] = useState(() => {
    if (typeof window === "undefined") {
      return { source: bundledResume, viewUrl: bundledResume, name: "", uploaded: false };
    }
    return readStored();
  });

  useEffect(() => {
    const refresh = () => setCv(readStored());
    window.addEventListener(CV_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(CV_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return cv;
}
