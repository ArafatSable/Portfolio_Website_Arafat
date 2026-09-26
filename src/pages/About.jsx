import React, { useEffect, useRef, useState } from 'react'
import '../styles/About.css'

import CloudIcon       from '../assets/1_cloud.jsx'
import AwsIcon         from '../assets/2_aws.jsx'
import TerraformIcon   from '../assets/3_terraform_Solid.jsx'
import JSIcon          from '../assets/7_javascript.jsx'
import PythonIcon      from '../assets/8_python.jsx'
import GitIcon         from '../assets/10_git.jsx'
import profile from '../assets/arafat.jpeg'

const SkillCard = ({ Icon, label, delay, visible }) => (
  <div
    className={`skill-card ${visible ? 'skill-card--in' : ''}`}
    style={{ '--delay': `${delay}ms` }}
  >
    <Icon className="skill-icon" />
    <span className="skill-label">{label}</span>
  </div>
)

export default function About() {
  const skillsRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (skillsRef.current) io.observe(skillsRef.current)
    return () => io.disconnect()
  }, [])

  const skills = [
    { label: 'Zoho Creator', Icon: CloudIcon },
    { label: 'AWS',          Icon: AwsIcon },
    { label: 'Terraform',    Icon: TerraformIcon },
    { label: 'JavaScript',   Icon: JSIcon },
    { label: 'Python',       Icon: PythonIcon },
    { label: 'Git / GitHub', Icon: GitIcon },
  ]

  const skillPills = [
    'Deluge', 'Zoho CRM', 'Zoho Books', 'REST APIs', 'Postman',
    'Streamlit', 'SQL', 'React', 'Node.js', 'Docker', 'CI/CD',
  ]

  return (
    <section id="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p className="subtitle">
          Zoho Creator Certified Developer · AWS Solutions Architect · Abu Dhabi, UAE
        </p>

        <div className="about-row about-intro">
          <div className="intro-grid">
            <div className="intro-text">
              <p>
                I’m <b>Arafat Arif Sable</b>, a B.Tech CSE graduate from Nirma University
                and a <b>Zoho Creator Certified Developer</b>. I currently deliver Zoho Creator
                solutions remotely for a UAE higher-education client (client name withheld),
                working across Pune and Dubai time zones.
              </p>
              <p>
                Comfortable across the full delivery cycle: requirements with business
                stakeholders, Deluge development, REST API integration, and production support —
                with an AWS and DevOps background behind it. Seeking a developer or technical
                consultant role in the UAE.
              </p>
              <p>
                Certifications: Zoho Creator Certified Developer – Associate (Apr 2026, ID ZCCA3101),
                AWS Solutions Architect – Associate SAA-C03 (Mar 2026),
                AWS Cloud Practitioner (Jan 2026).
              </p>
            </div>
            <div className="intro-image">
              <img src={profile} alt="Arafat Sable" className="profile-pic" />
            </div>
          </div>
        </div>

        <div className="about-row">
          <h2 className="section-heading">Experience</h2>
          <div className="exp-list">
            <article className="exp-card">
              <div className="exp-top">
                <h3>Zoho Developer Intern — Aarialife Technologies</h3>
                <span>Apr 2026 – Present · Pune / Dubai (Remote)</span>
              </div>
              <p>
                Zoho Creator applications for a UAE higher-education client: statutory reporting
                across 15 modules, bulk-push raised from 25 to 110 records per run, SIS modules
                (learning outcomes, integrity, QA, visa scheduler), CRM and Books integrations.
              </p>
            </article>
            <article className="exp-card">
              <div className="exp-top">
                <h3>DevOps Intern — Cloud Solitaire Technologies</h3>
                <span>Jan 2025 – Jun 2025 · Ahmedabad</span>
              </div>
              <p>
                AWS ECS and Terraform, GitHub Actions CI/CD, CloudWatch monitoring,
                S3 + CloudFront frontends, Kubernetes with Bitbucket runners.
              </p>
            </article>
            <article className="exp-card">
              <div className="exp-top">
                <h3>Web Developer Intern — Wings Web Media</h3>
                <span>May 2024 – Jun 2024 · Surat</span>
              </div>
              <p>
                WordPress site for an advertising-platform client. Requirements, content, and delivery with the client directly.
              </p>
            </article>
          </div>
        </div>

        <div className="about-row about-skills" ref={skillsRef}>
          <h2>Core skills</h2>
          <div className="skill-list">
            {skills.map((s, i) => (
              <SkillCard
                key={s.label}
                Icon={s.Icon}
                label={s.label}
                delay={i * 90}
                visible={visible}
              />
            ))}
          </div>
          <div className="skill-pills">
            {skillPills.map((label) => (
              <span key={label} className="skill-pill">{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
