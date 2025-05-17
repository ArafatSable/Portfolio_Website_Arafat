// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const links = [
    { name: 'Home',  to: '#home'  },
    { name: 'About', to: '#about' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // when we've scrolled past 80px, mark as scrolled
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo-nav">ARAFAT SABLE</a>
        <div className="nav-links">
          {links.map(({name,to}) => (
            <a key={to} href={to}>{name.toUpperCase()}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
