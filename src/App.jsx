// src/App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';  // ← import
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* if you want a catch-all: */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
