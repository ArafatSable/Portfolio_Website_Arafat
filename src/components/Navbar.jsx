// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";  // ← import
import "../styles/navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home",  to: "/"      },
    { name: "About", to: "/about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-nav">ARAFAT SABLE</Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links${open ? " open" : ""}`}>
          {links.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={location.pathname === to ? "active" : ""}
            >
              {name.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
