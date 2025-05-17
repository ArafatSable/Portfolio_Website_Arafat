// src/components/Home.jsx
import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import bg from '../assets/bg.png'
import '../styles/Home.css'
import resume from '../assets/Resume.pdf'

export default function Home() {
  return (
    <section
      className="home-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* SOCIAL BAR */}
      <div className="social-bar">
        <a href="https://github.com/ArafatSable"    target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/arafatsable" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:arafatsable@gmail.com"><FaEnvelope /></a>
      </div>

      {/* Dark overlay */}
      <div className="home-overlay" />

      {/* Centered content */}
      <div className="home-content">
        <h1 className="typewriter">Hi, I’m Arafat Sable</h1>
        <p>I build and automate cloud-native infrastructures that scale.</p>
        <a href={resume} className="download-btn" download>
         Download CV
        </a>
      </div>
    </section>
  )
}
