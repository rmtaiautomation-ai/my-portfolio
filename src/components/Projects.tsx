import { useEffect } from 'react';
import { Zap } from 'lucide-react';

import smartLeadCaptureImg from '../assets/smart-lead-capture.png';
import hrSentimentImg from '../assets/hr-sentiment.png';
import plumbingCrmImg from '../assets/plumbing-crm.jpg';
import customerSupportImg from '../assets/customer-support.png';

const projects = [
  {
    title: 'Appointment Booking Calendar Sync',
    description: 'When someone books an appointment, the workflow creates a Google Calendar event, stores the record in Airtable, and sends email confirmations. It also handles reschedules and cancellations automatically.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop',
    tags: ['Google Calendar', 'Airtable', 'Gmail', 'Webhook', 'Make.com'],
    primaryTag: 'Make.com'
  },
  {
    title: 'Smart Lead Capture & CRM Automation System',
    description: 'This automation system captures booking inquiries from a website form, validates the information, checks for existing records, updates CRM entries, and sends confirmations and notifications automatically.',
    image: smartLeadCaptureImg,
    tags: ['Airtable', 'Google Sheets', 'Gmail', 'Slack', 'Webhook', 'Make.com'],
    primaryTag: 'Make.com'
  },
  {
    title: 'Automated HR Sentiment & Safety Monitoring',
    description: 'This automation system monitors field reports submitted by site captains, uses AI to classify each entry by category, sentiment, and urgency, then automatically escalates HR issues via email and updates the CRM sheet — ensuring no critical safety or personnel concern goes unnoticed.',
    image: hrSentimentImg,
    tags: ['Google Sheets', 'OpenAI', 'Gmail', 'JSON Parser', 'Make.com'],
    primaryTag: 'Make.com'
  },
  {
    title: 'AI-Powered Appointment Reminder System',
    description: 'This automation system reads upcoming appointments from a Google Sheet, triggers AI voice calls via VAPI to remind patients of their scheduled visits, classifies each call outcome using GPT-3.5, and automatically updates appointment statuses — handling confirmations, cancellations, rescheduling, no-answers, and voicemails in real time.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop',
    tags: ['n8n', 'VAPI', 'OpenAI', 'Googlesheet', 'webhook'],
    primaryTag: 'n8n'
  },
  {
    title: 'AI-Powered Customer Support Email Automation with Daily Digest',
    description: 'This automation system reads incoming customer support emails, uses AI to categorize and draft responses, routes tickets to the right team, sends automated replies, and compiles a daily digest summary delivered to your inbox and team channel.',
    image: customerSupportImg,
    tags: ['YouTube', 'Airtable', 'Google Sheets', 'n8n'],
    primaryTag: 'n8n'
  },
  {
    title: 'AI-Powered Dental Clinic Website',
    description: 'Modern responsive dental clinic website built with TailwindCSS and JavaScript, integrated with AI-powered booking automation and smart CRM workflows.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop',
    tags: ['HTML', 'TailwindCSS', 'JavaScript', 'AI Integration', 'Make.com', 'Airtable'],
    primaryTag: 'Make.com'
  },
  {
    title: 'Plumbing Service CRM Automation',
    description: 'Fully automated CRM system managing the entire customer lifecycle — from form submission and estimate follow-ups to job booking, appointment reminders, and automated Google review requests via multi-channel communication.',
    image: plumbingCrmImg,
    tags: ['GoHighLevel', 'CRM', 'SMS', 'Email', 'Workflows'],
    primaryTag: 'GoHighLevel'
  }
];

const filters = ['All', 'Make.com', 'n8n', 'GoHighLevel'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.primaryTag === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-text">Project Highlights</h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto">
            A selection of automation projects that have helped businesses save time and scale operations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter 
                  ? 'bg-brand-cyan text-white' 
                  : 'bg-brand-card border border-brand-border text-brand-text-muted hover:border-brand-cyan hover:text-brand-text'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-brand-card border border-brand-border rounded-xl overflow-hidden group hover:border-brand-cyan/50 transition-colors flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 mix-blend-screen"
                />
                <div className="absolute top-4 right-4 bg-brand-cyan text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                  {project.primaryTag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-brand-cyan" size={18} />
                  <h3 className="text-xl font-bold text-brand-text">{project.title}</h3>
                </div>
                
                <p className="text-brand-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-brand-dark border border-brand-border text-brand-text-muted text-xs px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
