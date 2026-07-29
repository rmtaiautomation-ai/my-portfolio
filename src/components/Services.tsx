
import { Workflow, Bot, Settings, Zap, Database, Globe } from 'lucide-react';

const services = [
  {
    title: 'Workflow Automation',
    description: 'End-to-end automation workflows using n8n and Make.com that eliminate repetitive tasks.',
    icon: <Workflow className="text-brand-cyan" size={24} />,
  },
  {
    title: 'AI Integration',
    description: 'Smart AI-powered systems for content creation, lead enrichment, and chatbot automation.',
    icon: <Bot className="text-brand-cyan" size={24} />,
  },
  {
    title: 'CRM Automation',
    description: 'GoHighLevel pipelines, workflows, and triggers for lead capture and client management.',
    icon: <Settings className="text-brand-cyan" size={24} />,
  },
  {
    title: 'API Integrations',
    description: 'Connect your tools with custom API and webhook integrations for seamless data flow.',
    icon: <Zap className="text-brand-cyan" size={24} />,
  },
  {
    title: 'Process Optimization',
    description: 'Analyze your operations, identify bottlenecks, and build systems that are simple and scalable.',
    icon: <Database className="text-brand-cyan" size={24} />,
  },
  {
    title: 'AI Full-Stack Development',
    description: 'Building lightning-fast, scalable, and AI-integrated web applications using modern frameworks like Next.js, React, and Supabase.',
    icon: <Globe className="text-brand-cyan" size={24} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-2">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-text">Services</h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto">
            I don't just set up tools—I analyze how your business runs and build systems that work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-card border border-brand-border rounded-xl p-8 hover:border-brand-cyan/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded bg-brand-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-text">{service.title}</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
