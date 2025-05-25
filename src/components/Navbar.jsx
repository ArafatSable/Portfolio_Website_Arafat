// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaFileAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // notice we now include Icon for each link
  const links = [
    { name: "Home",     to: "/",         Icon: FaHome         },
    { name: "About",    to: "/about",    Icon: FaUser         },
    { name: "Projects", to: "/projects", Icon: FaCode },
    { name: "Resume",   to: "/resume",   Icon: FaFileAlt      },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-nav">A.A.S</Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links${open ? " open" : ""}`}>
          {links.map(({ name, to, Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={location.pathname === to ? "active" : ""}
            >
              <Icon className="nav-icon" />
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
