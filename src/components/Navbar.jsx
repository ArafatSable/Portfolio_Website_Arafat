import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";      // ← icons
import "../styles/navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]       = useState(false);

  const links = [
    { name: "Home",  to: "#home"  },
    { name: "About", to: "#about" },
  ];

  /* opaque background after 80 px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="logo-nav">ARAFAT SABLE</a>

        {/* toggle button – only visible ≤ 768 px */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links${open ? " open" : ""}`}>
          {links.map(({ name, to }) => (
            <a key={to} href={to} onClick={closeMenu}>
              {name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
