import React, { useState } from 'react';
import { Zap } from 'lucide-react';

import smartLeadCaptureImg from '../assets/smart-lead-capture.png';
import hrSentimentImg from '../assets/hr-sentiment.png';
import plumbingCrmImg from '../assets/plumbing-crm.jpg';
import customerSupportImg from '../assets/customer-support.png';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'Appointment Booking Calendar Sync',
    description: 'When someone books an appointment, the workflow creates a Google Calendar event, stores the record in Airtable, and sends email confirmations. It also handles reschedules and cancellations automatically.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop',
    tags: ['Google Calendar', 'Airtable', 'Gmail', 'Webhook', 'Make.com'],
    primaryTag: 'Make.com',
    details: {
      executiveSummary: 'A fully automated, bidirectional scheduling system that eliminates manual data entry, prevents double-booking, and dynamically handles reschedules and cancellations without human intervention.',
      challenge: 'Manual calendar management often leads to human error, missed appointments, and disorganized client data. Relying on staff to cross-reference booking software with CRM databases creates a severe bottleneck and damages the client experience.',
      solution: 'I engineered a synchronized workflow that listens for booking events in real-time. By automating the data flow between the booking interface, Google Calendar, and the CRM, this system reduces administrative overhead by 100% and ensures data integrity across all platforms.',
      architecture: [
        { label: 'Trigger', description: 'A custom webhook intercepts real-time payload data when a user completes the booking form.' },
        { label: 'Conditional Routing', description: 'A Make.com router evaluates the payload status (New Booking, Rescheduled, or Canceled).' },
        { label: 'Database Operations', description: 'The system queries Airtable to check if the client exists. It dynamically creates a new record or updates the existing profile with the new appointment ID.' },
        { label: 'Calendar Sync', description: 'The Google Calendar API is called to generate the calendar event, mapping the client\'s details and custom zoom links.' },
        { label: 'Client Communication', description: 'The Gmail module triggers a personalized confirmation email containing dynamic calendar invites and cancellation links.' }
      ],
      tools: ['Make.com (Webhooks, Routers, Error Handlers)', 'Airtable (Search/Update/Create Records)', 'Google Calendar API', 'Gmail']
    }
  },
  {
    title: 'Smart Lead Capture & CRM Automation System',
    description: 'This automation system captures booking inquiries from a website form, validates the information, checks for existing records, updates CRM entries, and sends confirmations and notifications automatically.',
    image: smartLeadCaptureImg,
    tags: ['Airtable', 'Google Sheets', 'Gmail', 'Slack', 'Webhook', 'Make.com'],
    primaryTag: 'Make.com',
    details: {
      executiveSummary: 'A comprehensive lead capture system that instantly validates inquiries, manages CRM records, and notifies stakeholders to ensure a seamless sales pipeline.',
      challenge: 'Unqualified leads and manual data entry slow down the sales process, allowing potential high-value clients to slip through the cracks due to delayed responses.',
      solution: 'I built an intelligent workflow that validates incoming form data in real-time, automatically checks for existing CRM records, and routes notifications instantly. This eliminated manual lead sorting and drastically improved response times.',
      architecture: [
        { label: 'Trigger', description: 'A webhook captures new booking inquiries from the website form.' },
        { label: 'Validation', description: 'Data is validated to ensure accurate phone numbers and email addresses.' },
        { label: 'Database Routing', description: 'The system checks Airtable for existing records to prevent duplicates, then updates or creates the lead profile.' },
        { label: 'Team Notification', description: 'Instant alerts are sent to the sales team via Slack with the lead\'s full context.' },
        { label: 'Client Confirmation', description: 'An automated, personalized email is dispatched to the client via Gmail.' }
      ],
      tools: ['Make.com', 'Airtable', 'Google Sheets', 'Gmail', 'Slack', 'Webhooks']
    }
  },
  {
    title: 'Automated HR Sentiment & Safety Monitoring',
    description: 'This automation system monitors field reports submitted by site captains, uses AI to classify each entry by category, sentiment, and urgency, then automatically escalates HR issues via email and updates the CRM sheet — ensuring no critical safety or personnel concern goes unnoticed.',
    image: hrSentimentImg,
    tags: ['Google Sheets', 'OpenAI', 'Gmail', 'JSON Parser', 'Make.com'],
    primaryTag: 'Make.com',
    details: {
      executiveSummary: 'An AI-driven HR monitoring system that automatically analyzes daily field reports for sentiment and urgency, ensuring swift escalation of critical personnel and safety issues.',
      challenge: 'Manually reading through hundreds of daily site reports to identify safety hazards or employee grievances is time-consuming and prone to human oversight, creating serious liability risks.',
      solution: 'I developed an automated pipeline that feeds site reports through OpenAI to classify sentiment and urgency. High-risk issues are immediately escalated to HR, ensuring zero critical concerns go unnoticed.',
      architecture: [
        { label: 'Trigger', description: 'The system watches Google Sheets for new field reports submitted by site captains.' },
        { label: 'AI Classification', description: 'OpenAI analyzes the text to determine the category, sentiment (positive/neutral/negative), and urgency.' },
        { label: 'Data Parsing', description: 'A JSON parser structures the AI output for seamless database routing.' },
        { label: 'Conditional Escalation', description: 'A router directs high-urgency or negative sentiment reports to a critical escalation path.' },
        { label: 'HR Notification', description: 'An automated email is fired off to the HR department highlighting the specific concern and location.' }
      ],
      tools: ['Make.com', 'Google Sheets', 'OpenAI', 'Gmail', 'JSON Parser']
    }
  },
  {
    title: 'AI-Powered Appointment Reminder System',
    description: 'This automation system reads upcoming appointments from a Google Sheet, triggers AI voice calls via VAPI to remind patients of their scheduled visits, classifies each call outcome using GPT-3.5, and automatically updates appointment statuses — handling confirmations, cancellations, rescheduling, no-answers, and voicemails in real time.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop',
    tags: ['n8n', 'VAPI', 'OpenAI', 'Googlesheet', 'webhook'],
    primaryTag: 'n8n',
    details: {
      executiveSummary: 'An intelligent voice AI system that proactively calls patients to remind them of appointments, handles natural language responses, and updates the scheduling CRM in real-time.',
      challenge: 'No-shows and last-minute cancellations severely impact clinic revenue. Manual reminder calls require dedicated staff hours and are often inefficient.',
      solution: 'I deployed a VAPI-integrated voice assistant that automatically calls patients. It understands complex responses, categorizes the outcome using GPT-3.5, and instantly updates the booking status without human intervention.',
      architecture: [
        { label: 'Trigger', description: 'n8n polls a Google Sheet for appointments scheduled within the next 24 hours.' },
        { label: 'Voice AI Call', description: 'VAPI initiates an outbound phone call, conversing naturally with the patient to confirm or reschedule.' },
        { label: 'Outcome Classification', description: 'The call transcript is fed into OpenAI to classify the outcome (Confirmed, Canceled, Voicemail, Reschedule Requested).' },
        { label: 'Database Update', description: 'The appointment status is updated in real-time back in the Google Sheet.' },
        { label: 'Staff Alerts', description: 'Webhooks trigger notifications for any appointments that require manual staff follow-up.' }
      ],
      tools: ['n8n', 'VAPI', 'OpenAI', 'Google Sheets', 'Webhooks']
    }
  },
  {
    title: 'AI-Powered Customer Support Email Automation with Daily Digest',
    description: 'This automation system reads incoming customer support emails, uses AI to categorize and draft responses, routes tickets to the right team, sends automated replies, and compiles a daily digest summary delivered to your inbox and team channel.',
    image: customerSupportImg,
    tags: ['YouTube', 'Airtable', 'Google Sheets', 'n8n'],
    primaryTag: 'n8n',
    details: {
      executiveSummary: 'An end-to-end email support automation that categorizes incoming tickets, drafts AI-generated responses, routes them to the correct department, and compiles daily performance digests.',
      challenge: 'Support teams are overwhelmed by generic inquiries, leaving less time for complex issues. Sorting and routing tickets manually creates backlogs and slow resolution times.',
      solution: 'I created an AI workflow that acts as a first-line support agent. It reads emails, drafts context-aware replies, categorizes tickets by urgency, and provides management with a daily summary of all support activity.',
      architecture: [
        { label: 'Trigger', description: 'n8n watches the support inbox for new incoming emails.' },
        { label: 'AI Triage', description: 'OpenAI analyzes the email content, categorizing the request type and determining urgency.' },
        { label: 'Automated Drafting', description: 'If the query is standard, AI drafts a highly personalized response and sends it immediately.' },
        { label: 'Smart Routing', description: 'Complex tickets are routed to specific Airtable queues based on department (Billing, Tech, Sales).' },
        { label: 'Daily Digest', description: 'A scheduled task compiles all daily interactions into a summary report delivered to Slack.' }
      ],
      tools: ['n8n', 'Airtable', 'Google Sheets', 'OpenAI']
    }
  },
  {
    title: 'AI-Powered Dental Clinic Website',
    description: 'Modern responsive dental clinic website built with TailwindCSS and JavaScript, integrated with AI-powered booking automation and smart CRM workflows.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop',
    tags: ['HTML', 'TailwindCSS', 'JavaScript', 'AI Integration', 'Make.com', 'Airtable'],
    primaryTag: 'Make.com',
    details: {
      executiveSummary: 'A high-converting, responsive dental clinic website seamlessly integrated with AI booking workflows and an automated CRM backend.',
      challenge: 'Traditional clinic websites serve only as digital brochures, failing to actively capture leads or streamline the patient onboarding process.',
      solution: 'I engineered a modern frontend interface connected directly to a backend automation engine. This transforms the website from a static page into an active lead generation and patient management tool.',
      architecture: [
        { label: 'Frontend UI', description: 'A responsive, modern interface built from scratch using HTML and TailwindCSS.' },
        { label: 'Form Integration', description: 'Custom JavaScript captures lead data and securely transmits it via webhooks.' },
        { label: 'AI Processing', description: 'Incoming inquiries are analyzed for intent and prioritized.' },
        { label: 'CRM Sync', description: 'Patient details are automatically stored and organized within Airtable.' },
        { label: 'Automation Hub', description: 'Make.com orchestrates the entire flow, ensuring instantaneous data transfer and follow-ups.' }
      ],
      tools: ['HTML', 'TailwindCSS', 'JavaScript', 'Make.com', 'Airtable', 'AI Integration']
    }
  },
  {
    title: 'Plumbing Service CRM Automation',
    description: 'Fully automated CRM system managing the entire customer lifecycle — from form submission and estimate follow-ups to job booking, appointment reminders, and automated Google review requests via multi-channel communication.',
    image: plumbingCrmImg,
    tags: ['GoHighLevel', 'CRM', 'SMS', 'Email', 'Workflows'],
    primaryTag: 'GoHighLevel',
    details: {
      executiveSummary: 'A fully automated GoHighLevel CRM infrastructure tailored for plumbing services, managing the end-to-end customer journey from initial quote to post-job review.',
      challenge: 'Service businesses often lose track of estimates, fail to follow up on open quotes, and miss out on valuable Google reviews due to a lack of systematized communication.',
      solution: 'I architected a robust pipeline inside GoHighLevel. Every stage of the job triggers specific, multi-channel automations ensuring estimates are followed up on, clients are reminded of appointments, and reviews are captured automatically.',
      architecture: [
        { label: 'Lead Capture', description: 'Forms and inbound calls automatically create a new contact and pipeline opportunity.' },
        { label: 'Estimate Nurture', description: 'If an estimate is sent, a 3-day SMS and email follow-up sequence begins automatically.' },
        { label: 'Job Booking', description: 'Once booked, dynamic appointment reminders are scheduled to reduce no-shows.' },
        { label: 'Internal Alerts', description: 'Technicians receive automated notifications with job details and customer history.' },
        { label: 'Review Generation', description: 'Upon job completion, an automated SMS request is sent asking the client to leave a Google review.' }
      ],
      tools: ['GoHighLevel', 'SMS Automation', 'Email Marketing', 'Pipeline Workflows', 'CRM']
    }
  }
];

const filters = ['All', 'Make.com', 'n8n', 'GoHighLevel'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

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
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-brand-dark border border-brand-border text-brand-text-muted text-xs px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                {(project as any).details && (
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-auto py-3 border border-brand-border rounded-lg text-sm font-bold text-brand-text hover:bg-brand-cyan hover:text-brand-dark hover:border-brand-cyan transition-all uppercase tracking-wider"
                  >
                    View Details &rarr;
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
