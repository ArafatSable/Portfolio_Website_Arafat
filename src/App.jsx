// src/App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';  // ← import
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';
import Cursor from "./components/Cursor";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main className="pt-16 main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          {/* if you want a catch-all: */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
