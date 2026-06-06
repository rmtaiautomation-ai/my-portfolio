<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> 2c15a7a0f8b461459f54db23d7d5c08623da8998
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Calendar from './components/Calendar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen selection:bg-brand-cyan selection:text-white transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Calendar />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-brand-border/50 py-8 px-6 text-center text-sm text-slate-500 bg-brand-dark">
        <p>© {new Date().getFullYear()} RMT. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
