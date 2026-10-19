import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechOrbit from './components/TechOrbit';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check initial dark mode state on mount
    const isDark = document.documentElement.classList.contains('dark') || true;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-20">
        <Hero />
        <About />
        
        {/* Interactive Orbit Stage */}
        <section id="orbit" className="py-10">
          <TechOrbit />
        </section>

        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}