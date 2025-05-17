// src/App.jsx
import Navbar from './components/Navbar'
import Home   from './pages/Home'
import About  from './pages/About'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <Navbar />

      {/* offset for fixed nav */}
      <main className="pt-16 scroll-smooth">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

       
      </main>

      <Footer />
    </>
  )
}
