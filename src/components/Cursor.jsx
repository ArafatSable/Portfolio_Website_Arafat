// src/components/Cursor.jsx
import { useEffect } from "react";
import "../styles/Cursor.css";

export default function Cursor() {
  useEffect(() => {
    const dot     = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");

    function move(e) {
      const x = e.clientX;
      const y = e.clientY;
      dot.style.transform     = `translate(${x}px, ${y}px)`;
      outline.style.transform = `translate(${x}px, ${y}px)`;
    }
    function down() {
      outline.classList.add("cursor-click");
    }
    function up() {
      outline.classList.remove("cursor-click");
    }

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup",   up);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup",   up);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-outline" />
    </>
  );
}
