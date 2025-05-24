import React, { useEffect, useRef, useState } from 'react'
import '../styles/About.css'

//–– pull in your icon‐components from src/assets ––
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

/* ── Reusable SkillCard ────────────────────────────────────── */
const SkillCard = ({ Icon, label }) => (
  <div className="skill-card">
    <Icon className="skill-icon" />
    <span className="skill-label">{label}</span>
  </div>
)

export default function About() {
  const workRef = useRef(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    if (workRef.current) io.observe(workRef.current)
    return () => io.disconnect()
  }, [])

  const skills = [
    { label: 'Cloud & Infrastructure', Icon: CloudIcon },
    { label: 'AWS',                Icon: AwsIcon },
    { label: 'Terraform',          Icon: TerraformIcon },
    { label: 'Ansible',            Icon: AnsibleIcon },
    { label: 'Kubernetes',         Icon: KubernetesIcon },
    { label: 'Helm',               Icon: HelmIcon },
  ]

  const tools = [
    { label: 'JavaScript', Icon: JSIcon },
    { label: 'Python',     Icon: PythonIcon },
    { label: 'Java',       Icon: JavaIcon },
    { label: 'Git',        Icon: GitIcon },
    { label: 'Bash',       Icon: BashIcon },
  ]

  return (
    <section id="about">
      <div className="about-container">
        {/* ===== Heading ===== */}
        <h2>About Me</h2>
        <p className="subtitle">Here you will find more about me.</p>

        {/* ===== ROW: Intro ===== */}
        <div className="about-row about-intro">
  

  <div className="intro-grid">
  
    {/* left column: text */}
    <div className="intro-text">
    <h3>Get To Know Me!</h3>
      <p>
        I’m Arafat Sable, a Computer Science graduate and DevOps Engineer
        based in Ahmedabad. I love turning complex infrastructure into
        simple, automated pipelines that ship code faster and more reliably.
      </p>
      <p>
        Whether it’s designing fault-tolerant AWS architectures or
        containerizing applications on Kubernetes, I’m happiest when
        solving cloud challenges end-to-end.
      </p>
      <p>
        Outside of work, you’ll find me experimenting with planted
        aquascapes or tinkering with the latest open-source DevOps tools.
      </p>
    </div>

    {/* right column: your headshot (or any image) */}
    <div className="intro-image">
      <img src={profile} alt="Arafat Sable" className="profile-pic" />
    </div>
  </div>
</div>

        {/* ===== ROW: Skills ===== */}
        <div className="about-row about-skills">
          <h3>My Skills</h3>
          <div className="skill-list">
            {skills.map((s) => (
              <SkillCard key={s.label} Icon={s.Icon} label={s.label} />
            ))}
          </div>
        </div>

        {/* ===== ROW: Languages & Tools ===== */}
        <div className="about-row about-tools">
          <h3>Languages & Tools</h3>
          <div className="skill-list">
            {tools.map((t) => (
              <SkillCard key={t.label} Icon={t.Icon} label={t.label} />
            ))}
          </div>
        </div>

        {/* insert Work-Experience SVG animation here, using `play` & `workRef` */}
      </div>
    </section>
  )
}
