import { useEffect, useRef, useState } from 'react';
import { Route, PackageCheck, Sparkles, Layers, Zap, Award, TrendingUp, Code2, MapPin } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const BADGES = [
  { icon: <Zap size={14} />, label: 'Automation Specialist' },
  { icon: <Award size={14} />, label: 'Lead Gen Systems' },
  { icon: <TrendingUp size={14} />, label: 'Process Optimizer' },
  { icon: <Code2 size={14} />, label: 'Full-Stack Dev' },
];

const HIGHLIGHT_CARDS = [
  {
    icon: <Route size={18} className="text-brand-blue" />,
    title: 'Systems Thinker',
    desc: 'I map how the whole operation runs before touching a tool, so automations fit the real process — not a guess.',
  },
  {
    icon: <PackageCheck size={18} className="text-brand-blue" />,
    title: 'Built to Hand Off',
    desc: 'Clean, documented workflows your team can operate and extend without me in the loop.',
  },
  {
    icon: <Sparkles size={18} className="text-brand-blue" />,
    title: 'AI-Native',
    desc: 'Agentic workflows, prompt engineering, and LLM tooling are part of my default stack, not a bolt-on.',
  },
  {
    icon: <Layers size={18} className="text-brand-blue" />,
    title: 'Full-Stack Range',
    desc: 'Comfortable from an n8n node to a deployed Next.js app — I build the whole pipeline end to end.',
  },
];

const SKILLS = [
  { name: 'Workflow Automation (n8n / Make.com)', level: 95 },
  { name: 'API & Webhook Integration', level: 92 },
  { name: 'AI & Agentic Systems', level: 90 },
  { name: 'Outbound Lead Generation', level: 90 },
  { name: 'Vibe Coding (Cursor / Claude Code)', level: 90 },
  { name: 'Prompt Engineering', level: 88 },
  { name: 'Data Structuring & Enrichment', level: 87 },
  { name: 'CRM Automation (GoHighLevel)', level: 85 },
  { name: 'React & Next.js', level: 85 },
  { name: 'Tailwind CSS & UI', level: 85 },
  { name: 'Supabase & Databases', level: 80 },
];

const CONTACT = [
  { label: 'Email', value: 'rommeltima07@gmail.com' },
  { label: 'Phone', value: '09770124038' },
  { label: 'Location', value: 'Taguig, Philippines' },
  { label: 'Availability', value: 'Open to new projects' },
];

export default function About() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 relative z-10 border-t border-brand-border/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-brand-blue text-xs sm:text-sm font-bold tracking-[0.25em] uppercase flex items-center gap-3 mb-14">
          <span className="w-10 h-px bg-brand-blue"></span>
          About Me
        </p>

        <div ref={ref} className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left column */}
          <div>
            <div className="flex items-center gap-5 mb-8">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-brand-blue rounded-full blur-2xl opacity-40"></div>
                <img
                  src={profileImg}
                  alt="Rommel Tima"
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="relative w-20 h-20 md:w-24 md:h-24 object-cover rounded-full ring-1 ring-white/10"
                />
              </div>
              <div>
                <h2 className="font-display text-4xl md:text-5xl uppercase leading-none text-brand-text">Rommel Tima</h2>
                <p className="text-brand-text-muted mt-1">AI Automation &amp; Full-Stack Specialist</p>
                <p className="text-brand-text-muted text-sm flex items-center gap-1.5 mt-1">
                  <MapPin size={14} className="text-brand-blue" /> Taguig, Philippines
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {BADGES.map((b) => (
                <span
                  key={b.label}
                  className="flex items-center gap-2 bg-brand-card border border-brand-border rounded-md px-3 py-1.5 text-xs font-semibold text-brand-text-muted"
                >
                  <span className="text-brand-blue">{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-brand-text-muted leading-relaxed">
              <p>
                I'm an <span className="text-brand-text font-semibold">AI Automation &amp; AI Full-Stack Specialist</span> focused
                on architecting intelligent workflows and high-performing web applications. I turn complex,
                multi-step processes into <span className="text-brand-blue font-semibold">seamless, scalable systems</span>.
              </p>
              <p>
                Currently working as an <span className="text-brand-text font-semibold">Automation &amp; Lead Generation Specialist</span>,
                I build and maintain automation systems with n8n, outbound lead-generation and video-prospecting
                workflows, and AI appointment-setting campaigns.
              </p>
              <p>
                My goal is simple: engineer the automated engines and digital platforms that run quietly in the
                background so businesses can focus on <span className="text-brand-blue font-semibold">exponential growth</span>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {HIGHLIGHT_CARDS.map((c) => (
                <div key={c.title} className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-blue/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    {c.icon}
                    <h3 className="font-bold text-brand-text text-sm">{c.title}</h3>
                  </div>
                  <p className="text-brand-text-muted text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl uppercase text-brand-text mb-8">Technical Expertise</h3>

            <div className="space-y-5">
              {SKILLS.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm text-brand-text">{s.name}</span>
                    <span className="text-sm font-bold text-brand-blue">{s.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-blue rounded-full shadow-[0_0_10px_rgba(225,29,42,0.6)] transition-[width] duration-1000 ease-out"
                      style={{ width: inView ? `${s.level}%` : '0%', transitionDelay: `${i * 60}ms` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6 mt-12 pt-8 border-t border-brand-border/60">
              {CONTACT.map((c) => (
                <div key={c.label}>
                  <div className="text-[0.7rem] tracking-widest uppercase text-brand-text-muted">{c.label}</div>
                  <div className="text-sm text-brand-text mt-1 break-words">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
