
import { ChevronDown, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      
      {/* Background styling for glow/network can go here */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/10 via-brand-dark to-brand-dark"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
        <div className="text-brand-blue text-sm font-mono tracking-widest animate-pulse">
          Optimizing...
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-brand-text">
          I'm <span className="text-brand-blue">&gt;</span> <span className="text-brand-blue">AI Specialist</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-text mt-2">
          Automation and Lead Generation Specialist
        </h2>
        
        <p className="text-brand-text-muted max-w-2xl text-lg leading-relaxed mt-4">
          I build end-to-end automation systems and AI workflows that streamline operations, eliminate repetitive tasks, and help businesses scale efficiently.
        </p>

        {/* Contact Details Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-brand-text-muted mt-2 font-medium">
          <a href="mailto:rommeltima07@gmail.com" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <Mail size={16} className="text-brand-blue" />
            rommeltima07@gmail.com
          </a>
          <a href="https://www.facebook.com/rommeltima" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            rommeltima
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-blue" />
            Taguig, Philippines
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <button className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-8 py-3 rounded text-sm tracking-wider transition-colors shadow-lg shadow-brand-blue/20">
            VIEW PROJECTS
          </button>
          <button className="bg-transparent hover:bg-brand-blue/10 text-brand-text font-bold px-8 py-3 rounded text-sm tracking-wider transition-colors border border-brand-blue/50">
            GET IN TOUCH
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce text-brand-text-muted">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
