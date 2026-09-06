import { useState, useEffect } from 'react';
import { ChevronDown, Mail, ArrowRight, Award } from 'lucide-react';
import heroImg from '../assets/hero-portrait.jpg';

const ROLES = [
  'AI Automation Specialist',
  'LLM Engineer',
  'Full-Stack Developer',
  'Workflow Architect',
  'API Integrator',
];

const STATS = [
  { value: '10+', label: 'Projects Shipped' },
  { value: '35+', label: 'Tools & Platforms' },
  { value: '5+', label: 'Years in Tech' },
  { value: '100%', label: 'Client Focused' },
];

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentWord = ROLES[loopNum % ROLES.length];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 45 : 110);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Ambient red glow background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[38rem] h-[38rem] bg-brand-blue/20 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 right-0 w-[32rem] h-[32rem] bg-brand-blue/15 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center lg:items-stretch">
        {/* Left column */}
        <div className="flex flex-col">
          <p className="text-brand-blue text-xs sm:text-sm font-bold tracking-[0.25em] uppercase flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-brand-blue"></span>
            AI Automation · LLM Engineering · Full-Stack Dev
          </p>

          <h1 className="font-display uppercase leading-[0.98] tracking-tight text-[clamp(3.5rem,11vw,8rem)] heading-fade">
            <span className="block">Rommel</span>
            <span className="block">Tima</span>
          </h1>

          <div className="flex items-center gap-3 mt-6 mb-6">
            <span className="w-1 h-7 bg-brand-blue"></span>
            <span className="text-xl md:text-2xl font-semibold text-brand-text">
              {text}
              <span className="animate-pulse font-light text-brand-blue">|</span>
            </span>
          </div>

          <p className="text-brand-text-muted max-w-xl text-base md:text-lg leading-relaxed">
            I build <span className="text-brand-text font-semibold">end-to-end automation systems</span>, LLM-powered
            applications, and agentic workflows that streamline operations and help businesses
            <span className="text-brand-blue font-semibold"> scale efficiently</span>.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 mt-10 max-w-xl border-y border-brand-border/70 py-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-bold text-brand-text">{s.value}</div>
                <div className="text-[0.7rem] tracking-widest uppercase text-brand-text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
            <button
              onClick={() => scrollTo('projects')}
              className="group bg-brand-blue hover:bg-[#c0121f] text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wider transition-colors shadow-lg shadow-brand-blue/30 flex items-center justify-center gap-2"
            >
              VIEW WORK
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="bg-brand-card hover:bg-brand-border/50 text-brand-text font-bold px-8 py-4 rounded-lg text-sm tracking-wider transition-colors border border-brand-border hover:border-brand-blue/60"
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5 mt-10 text-brand-text-muted">
            {[
              { href: 'https://www.linkedin.com/in/rommel-tima-1940561ab/', label: 'LinkedIn', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"></path></svg>
              ) },
              { href: 'https://github.com/rmtaiautomation-ai', label: 'GitHub', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"></path></svg>
              ) },
              { href: 'https://www.facebook.com/rommeltima', label: 'Facebook', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              ) },
              { href: 'mailto:rommeltima07@gmail.com', label: 'Email', icon: <Mail size={18} /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="p-2.5 rounded-md border border-brand-border hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                {s.icon}
              </a>
            ))}
            <span className="w-10 h-px bg-brand-border"></span>
            <span className="text-xs tracking-[0.25em] uppercase">Connect</span>
          </div>
        </div>

        {/* Right column - portrait */}
        <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:self-stretch lg:flex lg:flex-col lg:justify-center">
          <div className="relative lg:h-[90%]">
            <div className="absolute -inset-6 bg-brand-blue/25 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl h-full">
              <img
                src={heroImg}
                alt="Rommel Tima"
                width={896}
                height={1200}
                fetchPriority="high"
                className="w-full h-full aspect-[3/4] lg:aspect-auto object-cover object-[50%_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent"></div>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-4 right-3 bg-brand-card/90 backdrop-blur border border-brand-border rounded-lg px-4 py-2.5 shadow-xl">
              <div className="text-sm font-bold text-brand-text">n8n · Make.com</div>
              <div className="text-[0.7rem] text-brand-text-muted">Automation Specialist</div>
            </div>
            <div className="absolute -bottom-5 -left-3 bg-brand-blue text-white rounded-lg px-4 py-2.5 shadow-xl flex items-center gap-2.5">
              <Award size={20} />
              <div>
                <div className="text-sm font-bold leading-tight">Full-Stack</div>
                <div className="text-[0.7rem] opacity-90 leading-tight">React · Next.js · Supabase</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 flex items-center gap-3 text-brand-text-muted text-xs tracking-[0.25em] uppercase">
        <ChevronDown size={18} className="animate-bounce" />
        Scroll
      </div>
    </section>
  );
}
