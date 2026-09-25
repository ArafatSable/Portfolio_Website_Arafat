import React, { useEffect, useRef, useState } from 'react'
import '../styles/About.css'

import CloudIcon       from '../assets/1_cloud.jsx'
import AwsIcon         from '../assets/2_aws.jsx'
import TerraformIcon   from '../assets/3_terraform_Solid.jsx'
import AnsibleIcon     from '../assets/4_ansible.jsx'
import KubernetesIcon  from '../assets/5_kubernetes.jsx'
import HelmIcon        from '../assets/6_helm.jsx'
import JSIcon          from '../assets/7_javascript.jsx'
import PythonIcon      from '../assets/8_python.jsx'
import JavaIcon        from '../assets/9_java.jsx'
import GitIcon         from '../assets/10_git.jsx'
import BashIcon        from '../assets/11_bash.jsx'
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
      { threshold: 0.2 }
    )
    if (skillsRef.current) io.observe(skillsRef.current)
    return () => io.disconnect()
  }, [])

  const skills = [
    { label: 'Zoho Creator',   Icon: CloudIcon },
    { label: 'AWS',            Icon: AwsIcon },
    { label: 'Terraform',      Icon: TerraformIcon },
    { label: 'Ansible',        Icon: AnsibleIcon },
    { label: 'Kubernetes',     Icon: KubernetesIcon },
    { label: 'Helm',           Icon: HelmIcon },
  ]

  const tools = [
    { label: 'JavaScript', Icon: JSIcon },
    { label: 'Python',     Icon: PythonIcon },
    { label: 'Java',       Icon: JavaIcon },
    { label: 'Git',        Icon: GitIcon },
    { label: 'Bash',       Icon: BashIcon },
    { label: 'Deluge',     Icon: CloudIcon },
  ]

  return (
    <section id="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p className="subtitle">Zoho Creator Certified Developer · AWS Solutions Architect · Open to remote</p>

        <div className="about-row about-intro">
          <div className="intro-grid">
            <div className="intro-text">
              <p>
                I’m <b>Arafat Sable</b>, a B.Tech CSE graduate from Nirma University
                and a <b>Zoho Creator Certified Developer</b> based in Maharashtra, India.
                I work fully remotely across IST/GST time zones.
              </p>
              <p>
                I build enterprise low-code applications and API integrations
                in Zoho Creator — Deluge functions, custom JS widgets, bulk-push pipelines,
                and CRM/Books integrations. I also design cloud infrastructure on
                <b> AWS</b> (ECS, S3, CloudFront, CloudWatch) with Docker, Terraform, Kubernetes, and GitHub Actions.
              </p>
              <p>
                Certifications: Zoho Creator Certified Developer – Associate (Apr 2026),
                AWS Certified Solutions Architect – Associate SAA-C03 (Mar 2026),
                AWS Certified Cloud Practitioner (Jan 2026).
              </p>
            </div>

            <div className="intro-image">
              <img src={profile} alt="Arafat Sable" className="profile-pic" />
            </div>
          </div>
        </div>

        <div className="about-row about-skills" ref={skillsRef}>
          <h2>My Skills</h2>
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
        </div>

        <div className="about-row about-tools">
          <h2>Languages & Tools</h2>
          <div className="skill-list">
            {tools.map((t, i) => (
              <SkillCard
                key={t.label}
                Icon={t.Icon}
                label={t.label}
                delay={(i + skills.length) * 90}
                visible={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
