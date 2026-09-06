import { Workflow, Bot, Brain, Network, Zap, GitBranch, Globe } from 'lucide-react';

const services = [
  {
    title: 'Workflow Automation',
    hook: 'Kill the busywork',
    description:
      'Repetitive, multi-step tasks handled end-to-end in n8n or Make.com — so your team stops copy-pasting data between apps.',
    icon: Workflow,
  },
  {
    title: 'AI Integration',
    hook: 'Put AI to work',
    description:
      'Chatbots, lead enrichment, content generation, and document processing wired into the tools you already use.',
    icon: Bot,
  },
  {
    title: 'LLM Engineering & Agentic Systems',
    hook: 'Build the brain',
    description:
      'Multi-agent pipelines, structured outputs, function-calling tools, and voice/live model integration — the reasoning layer behind a production AI product, not a chatbot wrapper.',
    icon: Brain,
  },
  {
    title: 'System Architecture & Design',
    hook: 'Architecture first',
    description:
      'I design the data models, integrations, and control flow up front — moving fast with AI-assisted tooling — so the system scales instead of breaking on its first real workload.',
    icon: Network,
  },
  {
    title: 'API & Webhook Integrations',
    hook: 'Make your stack talk',
    description:
      'Custom API and webhook connections that sync data between systems in real time — no more manual exports.',
    icon: Zap,
  },
  {
    title: 'Process Optimization',
    hook: 'Fix the bottleneck',
    description:
      'I map how your operation actually runs, find where it stalls, and rebuild those steps as simple, scalable systems.',
    icon: GitBranch,
  },
  {
    title: 'AI Full-Stack Development',
    hook: 'Ship the product',
    description:
      'Fast, scalable, AI-integrated web apps built with Next.js, React, and Supabase — from prototype to production.',
    icon: Globe,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative z-10 border-t border-brand-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-brand-blue text-xs sm:text-sm font-bold tracking-[0.25em] uppercase flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-brand-blue"></span>
          What I Do
        </p>
        <h2 className="font-display text-4xl md:text-6xl uppercase text-brand-text leading-none mb-4">
          Services
        </h2>
        <p className="text-brand-text-muted max-w-2xl mb-14">
          I don't just set up tools — I look at how your business runs and build the systems that make it run faster.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOrphan = i === services.length - 1 && services.length % 3 === 1;
            return (
              <div
                key={service.title}
                className={`bg-brand-card border border-brand-border rounded-2xl p-7 hover:border-brand-blue/50 transition-colors group ${isOrphan ? 'lg:col-start-2' : ''}`}
              >
                <div className="w-11 h-11 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-brand-blue" size={22} />
                </div>
                <p className="text-brand-blue text-xs font-bold tracking-widest uppercase mb-2">
                  {service.hook}
                </p>
                <h3 className="text-lg font-bold text-brand-text mb-3">{service.title}</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
