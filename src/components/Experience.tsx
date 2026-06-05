import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const carouselApps = [
  { name: "Make", domain: "make.com" },
  { name: "n8n", domain: "n8n.io" },
  { name: "OpenAI", domain: "openai.com" },
  { name: "Google Workspace", domain: "workspace.google.com" },
  { name: "Google Flow", domain: "cloud.google.com" },
  { name: "Google AI Studio", domain: "google.com" },
  { name: "Antigravity", domain: "" },
  { name: "Slack", domain: "slack.com" },
  { name: "Discord", domain: "discord.com" },
  { name: "Whatsapp", domain: "whatsapp.com" },
  { name: "CHATGPT", domain: "openai.com" },
  { name: "Github", domain: "github.com" },
  { name: "Gemini", domain: "google.com" },
  { name: "Gohighlevel", domain: "gohighlevel.com" },
  { name: "Airtable", domain: "airtable.com" },
  { name: "Capcut", domain: "capcut.com" },
  { name: "Visual Code", domain: "code.visualstudio.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "Plusvibe", domain: "" },
  { name: "Cloudflare", domain: "cloudflare.com" },
  { name: "Cursor", domain: "cursor.sh" },
  { name: "Claud Clode", domain: "anthropic.com" },
  { name: "Docker", domain: "docker.com" }
];

export default function Experience() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10 border-t border-brand-border/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-text">
          Experience & Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Experience & Education */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-brand-cyan" size={24} />
                <h3 className="text-2xl font-bold text-brand-text">Work Experience</h3>
              </div>
              
              <div className="relative pl-8 border-l border-brand-border">
                {/* Timeline dot */}
                <div className="absolute w-3 h-3 bg-brand-cyan rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                
                <div className="mb-1 text-brand-cyan text-sm font-semibold">Present</div>
                <h4 className="text-xl font-bold text-brand-text">Automation and Lead Generation Specialist</h4>
                <div className="text-brand-text-muted text-sm mb-4 font-semibold uppercase tracking-wider">Duties & Responsibilities</div>
                <div className="text-brand-text-muted text-sm mb-3">Employee’s responsibilities include, but are not limited to:</div>
                <ul className="space-y-3 text-brand-text-muted text-sm list-disc list-inside marker:text-brand-cyan">
                  <li>Building and maintaining automation systems using n8n and related tools</li>
                  <li>Building outbound lead generation workflows</li>
                  <li>Building video prospecting systems</li>
                  <li>Lead gathering, scraping coordination, list building, and data enrichment</li>
                  <li>Supporting AI appointment setting campaigns</li>
                  <li>Learning new AI tools and increasing AI knowledge relevant to company operations</li>
                  <li>Improving workflows, efficiency, and automation systems</li>
                  <li>Other related digital operations duties reasonably assigned by Company</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-brand-cyan" size={24} />
                <h3 className="text-2xl font-bold text-brand-text">Education</h3>
              </div>
              
              <div className="bg-brand-card border border-brand-border rounded-xl p-6">
                <h4 className="text-lg font-bold text-brand-text mb-1">Software Development</h4>
                <div className="text-brand-text-muted text-sm">Ama Computer College - 2019</div>
              </div>
            </div>
          </div>

          {/* Right Column - Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-brand-text mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {/* Skill Category */}
              <div>
                <h4 className="text-xs font-mono text-brand-text-muted tracking-widest uppercase mb-3">Automation</h4>
                <div className="flex flex-wrap gap-2">
                  {['Zapier', 'Make.com', 'n8n'].map(skill => (
                    <span key={skill} className="bg-brand-card border border-brand-border text-brand-text-muted px-3 py-1.5 rounded-md text-sm hover:border-brand-cyan hover:text-brand-text transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-brand-text-muted tracking-widest uppercase mb-3">Agentic AI & Vibe Coding</h4>
                <div className="flex flex-wrap gap-2">
                  {['Lovable', 'Google AI Studio', 'Stitch', 'Antigravity', 'Claude Code'].map(skill => (
                    <span key={skill} className="bg-brand-card border border-brand-border text-brand-text-muted px-3 py-1.5 rounded-md text-sm hover:border-brand-cyan hover:text-brand-text transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-brand-text-muted tracking-widest uppercase mb-3">CRM</h4>
                <div className="flex flex-wrap gap-2">
                  {['GoHighLevel'].map(skill => (
                    <span key={skill} className="bg-brand-card border border-brand-border text-brand-text-muted px-3 py-1.5 rounded-md text-sm hover:border-brand-cyan hover:text-brand-text transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-brand-text-muted tracking-widest uppercase mb-3">Productivity</h4>
                <div className="flex flex-wrap gap-2">
                  {['Google Workspace', 'Notion', 'Trello', 'Asana', 'WordPress', 'Canva', 'Airtable', 'Calendly'].map(skill => (
                    <span key={skill} className="bg-brand-card border border-brand-border text-brand-text-muted px-3 py-1.5 rounded-md text-sm hover:border-brand-cyan hover:text-brand-text transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-brand-text-muted tracking-widest uppercase mb-3">Communication</h4>
                <div className="flex flex-wrap gap-2">
                  {['Slack', 'Discord', 'Telegram', 'WhatsApp'].map(skill => (
                    <span key={skill} className="bg-brand-card border border-brand-border text-brand-text-muted px-3 py-1.5 rounded-md text-sm hover:border-brand-cyan hover:text-brand-text transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-brand-text-muted tracking-widest uppercase mb-3">Other</h4>
                <div className="flex flex-wrap gap-2">
                  {['API Integration', 'Data Structuring', 'Prompt Engineering'].map(skill => (
                    <span key={skill} className="bg-brand-card border border-brand-border text-brand-text-muted px-3 py-1.5 rounded-md text-sm hover:border-brand-cyan hover:text-brand-text transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Carousel / Marquee for Apps */}
        <div className="mt-24 pt-12 border-t border-brand-border/50 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
          
          <div className="flex w-max animate-marquee">
            <div className="flex items-center">
              {carouselApps.map((app, i) => (
                <div key={`app1-${i}`} className="flex items-center gap-3 text-brand-text-muted font-medium whitespace-nowrap px-8 hover:text-brand-cyan transition-colors">
                  {app.domain && (
                    <img 
                      src={`https://www.google.com/s2/favicons?domain=${app.domain}&sz=64`}
                      alt={app.name} 
                      className="w-6 h-6 object-contain rounded-sm"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  {app.name}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              {carouselApps.map((app, i) => (
                <div key={`app2-${i}`} className="flex items-center gap-3 text-brand-text-muted font-medium whitespace-nowrap px-8 hover:text-brand-cyan transition-colors">
                  {app.domain && (
                    <img 
                      src={`https://www.google.com/s2/favicons?domain=${app.domain}&sz=64`}
                      alt={app.name} 
                      className="w-6 h-6 object-contain rounded-sm"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  {app.name}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
