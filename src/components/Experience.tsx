import { Briefcase, GraduationCap } from 'lucide-react';

const tools = [
  'Make.com', 'n8n', 'Claude Code', 'Cursor', 'Google AI Studio', 'Antigravity',
  'Visual Studio Code', 'Qoder', 'OpenAI', 'Gemini', 'GoHighLevel', 'Airtable',
  'Google Workspace', 'Notion', 'Calendly', 'PlusVibe', 'Slack', 'Discord',
  'Telegram', 'WhatsApp', 'GitHub', 'Docker', 'Cloudflare', 'React', 'Next.js',
  'Supabase', 'Tailwind CSS', 'Stripe', 'Resend',
];

const duties = [
  'Building and maintaining automation systems using n8n and related tools',
  'Building outbound lead generation workflows',
  'Building video prospecting systems',
  'Lead gathering, scraping coordination, list building, and data enrichment',
  'Supporting AI appointment setting campaigns',
  'Learning new AI tools and increasing AI knowledge relevant to company operations',
  'Improving workflows, efficiency, and automation systems',
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 border-t border-brand-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-brand-blue text-xs sm:text-sm font-bold tracking-[0.25em] uppercase flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-brand-blue"></span>
          Experience
        </p>
        <h2 className="font-display text-4xl md:text-6xl uppercase text-brand-text leading-none mb-4">
          Where I Work
        </h2>
        <p className="text-brand-text-muted max-w-2xl mb-14">
          My current role and how I got here. The skill breakdown lives up in the About section.
        </p>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-brand-blue" size={22} />
              <h3 className="text-xl font-bold text-brand-text">Work Experience</h3>
            </div>

            <div className="relative pl-8 border-l border-brand-border">
              <div className="absolute w-3 h-3 bg-brand-blue rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(225,29,42,0.7)]"></div>

              <div className="text-brand-blue text-sm font-semibold mb-1">Present</div>
              <h4 className="text-lg font-bold text-brand-text">Automation &amp; Lead Generation Specialist</h4>
              <div className="text-brand-text-muted text-xs font-semibold uppercase tracking-widest mt-2 mb-4">
                Duties &amp; Responsibilities
              </div>
              <ul className="space-y-2.5 text-brand-text-muted text-sm">
                {duties.map((duty) => (
                  <li key={duty} className="flex gap-2.5">
                    <span className="text-brand-blue mt-1.5 w-1 h-1 rounded-full bg-brand-blue shrink-0"></span>
                    {duty}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-brand-blue" size={22} />
              <h3 className="text-xl font-bold text-brand-text">Education</h3>
            </div>

            <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
              <h4 className="text-base font-bold text-brand-text mb-1">Software Development</h4>
              <div className="text-brand-text-muted text-sm">AMA Computer College · 2019</div>
            </div>
          </div>
        </div>

        {/* Daily toolkit marquee */}
        <div className="mt-20 pt-12 border-t border-brand-border/50">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-text-muted mb-6">
            Daily Toolkit
          </p>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
            <div className="flex w-max animate-marquee">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                  {tools.map((tool) => (
                    <span
                      key={`${copy}-${tool}`}
                      className="text-brand-text-muted font-medium whitespace-nowrap px-6 hover:text-brand-blue transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
