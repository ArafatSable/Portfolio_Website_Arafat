// src/components/TypewriterHeading.jsx
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypewriterHeading() {
  const [text] = useTypewriter({
    words: [
      "Hi, I’m Arafat Sable",
      "Hi, I’m Developer",
      "Hi, I love DevOps",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <h1 className="typewriter">
      {text}
      <Cursor cursorStyle="|" />
    </h1>
  );
}
