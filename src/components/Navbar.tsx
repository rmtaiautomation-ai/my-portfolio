import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-colors duration-300 ${
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-border/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 py-4">
        {/* Logo */}
        <button onClick={() => go('home')} className="flex items-center gap-2.5 shrink-0" aria-label="Home">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-brand-blue text-white font-mono text-xs font-bold">
            &lt;/&gt;
          </span>
          <span className="font-bold text-lg tracking-widest text-brand-text leading-none">RMT</span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 text-[0.8rem] font-semibold tracking-wide">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`px-3 py-2 rounded-md uppercase transition-colors ${
                active === l.id
                  ? 'text-brand-blue bg-brand-blue/10'
                  : 'text-brand-text-muted hover:text-brand-text'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Resume + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => go('contact')}
            className="hidden sm:inline-flex bg-brand-blue hover:bg-[#c0121f] text-white font-bold text-xs tracking-widest uppercase px-5 py-3 rounded-lg shadow-lg shadow-brand-blue/30 transition-colors"
          >
            Resume
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-2 text-brand-text"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-dark/95 backdrop-blur-md border-b border-brand-border/60 px-6 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`text-left px-3 py-2.5 rounded-md uppercase text-sm font-semibold tracking-wide transition-colors ${
                active === l.id ? 'text-brand-blue bg-brand-blue/10' : 'text-brand-text-muted'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="mt-2 bg-brand-blue text-white font-bold text-xs tracking-widest uppercase px-5 py-3 rounded-lg"
          >
            Resume
          </button>
        </div>
      )}
    </nav>
  );
}
