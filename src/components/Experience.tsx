import { Briefcase, GraduationCap } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  SiMake, SiN8N, SiClaude, SiCursor, SiGooglegemini, SiAirtable, SiNotion,
  SiCalendly, SiDiscord, SiTelegram, SiWhatsapp, SiGithub, SiDocker,
  SiCloudflare, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTypescript,
  SiSupabase, SiTailwindcss, SiStripe, SiResend, SiDeepgram, SiFirebase,
  SiElevenlabs, SiVercel, SiRender, SiLoom, SiGooglesheets, SiGoogledrive,
  SiGmail, SiYoutube,
} from 'react-icons/si';

// Simple-icons dropped the marks for Slack, VS Code, OpenAI, AWS and
// GoHighLevel over trademark claims, and never shipped Remotion, Qoder,
// Antigravity, PlusVibe, Fal.ai or VAPI — those render as a brand-tinted
// letter badge instead. Every entry carries its real brand hex; marks that
// are near-black in the wild are pinned to white so they read on our dark bg.
type Tool = { name: string; color: string; Icon?: IconType; mono?: string };

const tools: Tool[] = [
  // Automation platforms
  { name: 'n8n', Icon: SiN8N, color: '#EA4B71' },
  { name: 'Make.com', Icon: SiMake, color: '#6D00CC' },
  { name: 'GoHighLevel', mono: 'GHL', color: '#188BF6' },
  // AI / LLM
  { name: 'OpenAI', mono: 'AI', color: '#10A37F' },
  { name: 'Google Gemini', Icon: SiGooglegemini, color: '#8E75B6' },
  { name: 'Claude Code', Icon: SiClaude, color: '#D97757' },
  { name: 'Deepgram', Icon: SiDeepgram, color: '#13EF93' },
  { name: 'ElevenLabs', Icon: SiElevenlabs, color: '#FFFFFF' },
  { name: 'Fal.ai', mono: 'FAL', color: '#8B5CF6' },
  { name: 'VAPI', mono: 'VP', color: '#12A594' },
  { name: 'Google AI Studio', mono: 'AIS', color: '#4285F4' },
  // Editors / agentic coding
  { name: 'Cursor', Icon: SiCursor, color: '#FFFFFF' },
  { name: 'Visual Studio Code', mono: 'VSC', color: '#0078D4' },
  { name: 'Antigravity', mono: 'AG', color: '#4285F4' },
  { name: 'Qoder', mono: 'Q', color: '#6D5EF8' },
  // Languages / frameworks
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
  { name: 'Remotion', mono: 'RM', color: '#0B84F3' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  // Data / backend
  { name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Airtable', Icon: SiAirtable, color: '#18BFFF' },
  { name: 'AWS Lambda', mono: 'λ', color: '#FF9900' },
  // Deploy / infra
  { name: 'Vercel', Icon: SiVercel, color: '#FFFFFF' },
  { name: 'Render', Icon: SiRender, color: '#46E3B7' },
  { name: 'Cloudflare', Icon: SiCloudflare, color: '#F38020' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
  // Google / productivity
  { name: 'Google Sheets', Icon: SiGooglesheets, color: '#34A853' },
  { name: 'Google Drive', Icon: SiGoogledrive, color: '#4285F4' },
  { name: 'Gmail', Icon: SiGmail, color: '#EA4335' },
  { name: 'Notion', Icon: SiNotion, color: '#FFFFFF' },
  { name: 'Calendly', Icon: SiCalendly, color: '#006BFF' },
  { name: 'Loom', Icon: SiLoom, color: '#625DF5' },
  { name: 'PlusVibe', mono: 'PV', color: '#5B5BD6' },
  // Comms
  { name: 'Slack', mono: 'SL', color: '#36C5F0' },
  { name: 'Discord', Icon: SiDiscord, color: '#5865F2' },
  { name: 'Telegram', Icon: SiTelegram, color: '#0088CC' },
  { name: 'WhatsApp', Icon: SiWhatsapp, color: '#25D366' },
  // Product
  { name: 'Stripe', Icon: SiStripe, color: '#635BFF' },
  { name: 'Resend', Icon: SiResend, color: '#FFFFFF' },
  { name: 'YouTube', Icon: SiYoutube, color: '#FF0000' },
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

const coursework = [
  'C', 'C++', 'Java', 'Visual Basic .NET', 'ASP.NET',
  'Object-Oriented Analysis & Design', 'Software Engineering',
  'Program Logic Design', 'Programming Languages & Compilers',
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 border-t border-brand-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-brand-blue text-xs sm:text-sm font-bold tracking-[0.25em] uppercase flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-brand-blue"></span>
          Career
        </p>
        <h2 className="font-display text-4xl md:text-6xl uppercase text-brand-text leading-none mb-4">
          Experience &amp; Education
        </h2>
        <p className="text-brand-text-muted max-w-2xl mb-14">
          My current role and how I got here. The full skill breakdown lives up in the About section.
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
              <div className="text-brand-blue text-sm font-semibold mb-1">2017 – 2019</div>
              <h4 className="text-base font-bold text-brand-text">Computer System Design &amp; Programming</h4>
              <div className="text-brand-text-muted text-sm mt-1">ACLC College – Guadalupe · AMA Education System</div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-brand-blue/40 bg-brand-blue/10 px-3 py-1.5 text-xs font-semibold text-brand-blue">
                TESDA Programming NC IV
              </div>

              <div className="text-brand-text-muted text-xs font-semibold uppercase tracking-widest mt-6 mb-3">
                Core Coursework
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded border border-brand-border bg-brand-dark px-2.5 py-1 text-xs text-brand-text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
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
                      key={`${copy}-${tool.name}`}
                      className="group flex items-center gap-2 whitespace-nowrap px-6"
                    >
                      {tool.Icon ? (
                        <tool.Icon size={18} className="shrink-0" style={{ color: tool.color }} />
                      ) : (
                        <span
                          className="shrink-0 flex items-center justify-center min-w-[20px] h-[20px] px-1 rounded border text-[9px] font-bold tracking-tight"
                          style={{
                            color: tool.color,
                            borderColor: `${tool.color}59`,
                            backgroundColor: `${tool.color}1f`,
                          }}
                        >
                          {tool.mono}
                        </span>
                      )}
                      <span className="text-brand-text-muted font-medium group-hover:text-brand-text transition-colors">
                        {tool.name}
                      </span>
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
