import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-brand-dark/80 border-b border-brand-border/50 px-6 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl tracking-wide text-brand-blue">
            RMT <span className="text-brand-cyan">&lt;/&gt;</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-text-muted">
          <a href="#home" className="hover:text-brand-cyan transition-colors">HOME</a>
          <a href="#about" className="hover:text-brand-cyan transition-colors">ABOUT</a>
          <a href="#projects" className="hover:text-brand-cyan transition-colors">PROJECTS</a>
          <a href="#skills" className="hover:text-brand-cyan transition-colors">SKILLS</a>
          <a href="#contact" className="hover:text-brand-cyan transition-colors">CONTACT</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-brand-border text-brand-text-muted hover:text-brand-cyan hover:border-brand-cyan transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
