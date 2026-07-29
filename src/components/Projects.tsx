import { useState } from 'react';

import smartLeadCaptureImg from '../assets/make111.jpg';
import hrSentimentImg from '../assets/hr-sentiment.png';
import highLevelImg from '../assets/high11.jpg';
import customerSupportImg from '../assets/n8n111.jpg';
import autonomousVideoImg from '../assets/autonomous-video-engine.jpg';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'AI B2B Sales Training Simulator | Conversational Roleplay Engine',
    description: 'An adaptive conversational B2B sales roleplay and evaluation platform powered by Google Gemini that dynamically challenges sales representatives and delivers objective performance report cards.',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=600&auto=format&fit=crop',
    tags: ['Google Gemini', 'React 19', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS v4', 'SSE Streaming'],
    primaryTag: 'Google Gemini',
    liveUrl: 'https://sales-simulator-6q8c.onrender.com/',
    githubUrl: 'https://github.com/rmtaiautomation-ai/sales_simulator',
    details: {
      executiveSummary: 'An interactive web application designed to train, test, and evaluate sales representatives in realistic cold and warm calling environments. The system utilizes Google Gemini instructed as a Skeptical Business Owner to listen to sales pitches, dynamically adjust resistance based on argument quality, and deliver a rigorous, unbiased performance evaluation ("Report Card") at the end of the call.',
      challenge: 'Traditional sales training relies on scripted chatbots or peer roleplays that lack real-time adaptability, objective grading, and natural voice/call cadence, leaving sales representatives unprepared for skeptical, high-value B2B prospects.',
      solution: 'I engineered a full-stack real-time conversational simulation engine using React 19, Node.js/Express, and Google Gemini. It features an adaptive difficulty engine (Level 2 to 5), state-switching persona triggers, Server-Sent Events (SSE) for low-latency streaming, and automated objective report cards with hire/no-hire verdicts.',
      architecture: [
        { label: 'State-Switching & Persona Trigger Engine', description: 'Inspects the salesperson\'s opening lines for case-insensitive keywords to dynamically inject contextual tags into Gemini, forcing persona shifts (e.g., Solar vs. HVAC/Roofing) across randomized psychological archetypes.' },
        { label: 'Adaptive Difficulty Engine (Level 2 to 5)', description: 'Dynamically elevates skepticism mid-call from baseline to elite technical pushback when pain points are validated effectively, while deploying a barge-in defense if scripts sound rehearsed.' },
        { label: 'Server-Sent Events (SSE) Streaming Layer', description: 'Streams token-by-token LLM output via HTTP/1.1 Chunked Transfer Encoding (text/event-stream) from Express to React, eliminating WebSocket overhead while powering real-time audio visualizers.' },
        { label: 'Automated Graded Assessment Report Card', description: 'Detects call termination to drop character and emit a structured markdown evaluation featuring an A-F letter grade, [HIRE / DO NOT HIRE] screening verdict, and actionable coaching analysis.' },
        { label: 'Unified Monolithic Deployment', description: 'Vite compiles the React SPA while ESBuild bundles server.ts into server.cjs, served via Express on Render.com for zero CORS friction and simplified single-domain SSL hosting.' }
      ],
      tools: ['Google Gemini (2.5/3.5 Flash)', 'React 19', 'Node.js / Express', 'TypeScript', 'Server-Sent Events (SSE)', 'Tailwind CSS 4 + Motion', 'Web Audio API'],
      architectureLink: 'https://github.com/rmtaiautomation-ai/sales_simulator'
    }
  },
  {
    title: 'PrimeCuts | Premium E-Commerce Business Engine',
    description: 'A high-performance, highly secure, and automated digital storefront built specifically for premium meat suppliers.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
    tags: ['Next.js', 'React', 'Supabase', 'Tailwind CSS', 'Vercel'],
    primaryTag: 'Next.js',
    liveUrl: 'https://prime-cuts-store.vercel.app/',
    githubUrl: 'https://github.com/rmtaiautomation-ai/prime-cuts-store',
    details: {
      executiveSummary: 'A high-performance, highly secure, and automated digital storefront built specifically for premium meat suppliers. It is a full Business Management Engine designed to automate operations, protect revenue, and deliver a VIP customer experience.',
      challenge: 'Most boutique food suppliers rely on manual, error-prone processes: taking orders through Instagram DMs, tracking inventory in Excel, and manually messaging customers for delivery updates.',
      solution: 'I built PrimeCuts as a Business Management Engine to automate operations, securely handle data, manage inventory live, and streamline the customer ordering process.',
      architecture: [
        { label: 'Intelligent Inventory', description: 'Live stock tracking prevents overselling. Auto-restocking algorithms adjust inventory upon order cancellation. Low-stock email alerts notify administrators.' },
        { label: 'Enterprise Security', description: 'Data is locked down at the row level via Supabase RLS. Robust authentication using Supabase Auth handles magic links and OAuth.' },
        { label: 'Anti-Spam Checkout', description: 'Checkout rate limiting protects against bots, and aggressive data sanitization prevents injection attacks.' },
        { label: 'Secure Admin Portal', description: 'Role-Based Access Control (RBAC) restricted dashboard for financial and order management.' },
        { label: 'Automated Customer Experience', description: 'Generates highly professional, readable order numbers and provides seamless order tracking.' }
      ],
      tools: ['Next.js', 'Supabase', 'React', 'Tailwind CSS', 'Vercel'],
      architectureLink: 'https://github.com/rmtaiautomation-ai/prime-cuts-store'
    }
  },
  {
    title: 'Autonomous AI Video Content Engine',
    description: 'An autonomous AI pipeline that transforms raw scripts into production-ready videos, manages rendering via APIs, and automatically publishes high-retention content to social media platforms.',
    image: autonomousVideoImg,
    tags: ['n8n', 'OpenAI API', 'Airtable', 'Google Drive API', 'Google Veo 3.1', 'Facebook Graph API', 'YouTube Data API', 'AI Agentic Workflows'],
    primaryTag: 'n8n',
    details: {
      executiveSummary: 'A fully autonomous pipeline that generates, validates, and publishes high-retention video content across multiple social platforms.',
      challenge: 'Manual video production and multi-channel distribution are resource-intensive, requiring high-touch coordination across generation, rendering, and API management while maintaining consistent brand safety and visual continuity.',
      solution: 'I designed an agentic architecture in n8n that delegates specialized production tasks to distinct AI personas. The system autonomously writes scripts, engineers visual prompts, audits content for safety, manages asynchronous rendering queues, and executes multi-platform distribution. This engine reduces the production lifecycle from days to minutes, eliminates manual human-in-the-loop bottlenecks, and ensures 100% brand compliance.',
      architecture: [
        { label: 'Scripting & Slicing', description: 'The Script Writer generates the master voiceover script. The Scene Slicer then consumes this script to partition the narrative into 12–14 distinct visual "beats".' },
        { label: 'Contextual Batching', description: 'To ensure peak AI performance, a looping module divides these 14 scenes into manageable batches of 5. This strict control flow prevents context window fatigue and LLM hallucination.' },
        { label: 'Entity Casting & Environment', description: 'For each batch, the Casting Director establishes the character visual blueprints, while the Visual Architect analyzes the environment. These precise blueprints are passed downstream to ensure absolute visual continuity across scenes.' },
        { label: 'Cinematography & Assembly', description: 'The Cinematic Director consumes the visual blueprint and the sequence number to dictate specific camera physics and shot types. Finally, the Prompt Assembler synthesizes all inputs—environment, character blueprints, and camera directives—into a finalized, highly optimized generation prompt for the video model.' },
        { label: 'Safety Firewall', description: 'The Safety Officer agent acts as a final filter, autonomously scrubbing and sanitizing prompts for policy violations before the generation queue is ever triggered.' },
        { label: 'Trigger & Ingestion', description: 'Event-driven workflow triggered via Airtable with raw narrative input.' },
        { label: 'Asynchronous Lifecycle', description: 'Intelligent API polling mechanisms manage Google Veo rendering queues, waiting for completion before handling binary storage in Google Drive.' },
        { label: 'Multi-Platform Distribution', description: 'Native integration with Facebook Graph and YouTube Data APIs handles the direct publishing of final binaries, with bi-directional synchronization for status tracking in Airtable and instant success/error alerts in Telegram.' }
      ],
      tools: ['n8n (Agentic Workflows)', 'OpenAI (GPT-4.1 / GPT-4o)', 'Google Veo 3.1', 'Airtable', 'Google Drive API', 'Facebook Graph API (Reels)', 'YouTube Data API'],
      videoUrl: 'https://www.loom.com/embed/53261be1f67b485d95d4d39ddac5e84b',
      architectureLink: 'https://app.notion.com/p/AI-Video-Production-Engine-n8n-Architecture-38c1c9af8b8280f0a9d7c3a8dc9d50e3?source=copy_link'
    }
  },
  {
    title: 'AI-Powered Appointment Reminder System',
    description: 'An intelligent voice AI system that proactively calls patients with appointment reminders, classifies their responses using GPT-3.5, and updates CRM scheduling in real-time.',
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
    description: 'An end-to-end email support automation that categorizes incoming tickets, drafts context-aware AI responses, routes them to the correct department, and compiles daily performance digests.',
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
    title: 'Plumbing Service CRM Automation',
    description: 'A fully automated CRM system managing the entire customer lifecycle, from initial form submissions and estimate follow-ups to job bookings and automated review requests.',
    image: highLevelImg,
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
      tools: ['GoHighLevel', 'SMS Automation', 'Email Marketing', 'Pipeline Workflows', 'CRM'],
      videoUrl: 'https://www.loom.com/embed/7a2fee8427f341f0accdf36a743bc95e',
      architectureLink: 'https://app.notion.com/p/GoHighLevel-DOCUMENTATION-34a1c9af8b82805ea3a2f47e0088697b?source=copy_link'
    }
  },
  {
    title: 'Smart Lead Capture & CRM Automation System',
    description: 'A comprehensive lead capture system that instantly validates inquiries from forms, manages existing CRM records, and automatically routes team notifications and client confirmations.',
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
      tools: ['Make.com', 'Airtable', 'Google Sheets', 'Gmail', 'Slack', 'Webhooks'],
      videoUrl: 'https://www.loom.com/embed/a5010249d5d74dce9a109d22885bb373'
    }
  },
  {
    title: 'Automated HR Sentiment & Safety Monitoring',
    description: 'An AI-driven HR monitoring system that analyzes daily field reports for sentiment and urgency, ensuring swift and automated escalation of critical personnel and safety issues.',
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
    title: 'Automated Lead Validation & CRM Sync Engine',
    description: 'An automation workflow that sanitizes inbound leads via real-time syntax validation. Valid leads are instantly synced to the CRM, while rejected entries are logged. Includes automated Slack notifications for team alignment.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    tags: ['Make.com', 'Typeform', 'Airtable', 'Google Sheets', 'Slack API', 'Regex'],
    primaryTag: 'Make.com',
    details: {
      executiveSummary: 'An intelligent lead ingestion system that validates inbound data in real-time, preventing CRM pollution and ensuring the sales team only works with qualified, actionable prospects.',
      challenge: 'Spam submissions, typos in email addresses, and unqualified leads frequently pollute CRM databases. This bad data wastes sales reps\' time, disrupts reporting, and causes missed opportunities with actual clients.',
      solution: 'I architected a Make.com workflow that intercepts all Typeform submissions. Using Regex and syntax validation, the system instantly categorizes leads. Valid entries are seamlessly synced into Airtable, while invalid ones are quarantined in Google Sheets. The team is instantly notified of all outcomes via Slack.',
      architecture: [
        { label: 'Lead Capture', description: 'A webhook instantly triggers the workflow the moment a prospect completes the Typeform questionnaire.' },
        { label: 'Data Validation', description: 'The payload passes through a Regex validation module to ensure email syntax and phone number formatting are strictly correct.' },
        { label: 'Conditional Routing', description: 'A Make.com router splits the workflow. Valid leads proceed to the CRM, while invalid leads are diverted.' },
        { label: 'CRM Sync & Quarantine', description: 'Clean data is automatically mapped and inserted into the Airtable CRM. Rejected data is logged in a Google Sheet for manual review.' },
        { label: 'Team Notifications', description: 'Slack API integration dispatches formatted alerts to the sales channel for valid leads, and error logs to the admin channel for rejected ones.' }
      ],
      tools: ['Make.com', 'Typeform', 'Airtable', 'Google Sheets', 'Slack API', 'Regex'],
      videoUrl: 'https://www.loom.com/embed/4565e66c760c403490930ec2af9cd032'
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
  }
];

const filters = ['All', 'Google Gemini', 'Make.com', 'n8n', 'GoHighLevel', 'Next.js'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.primaryTag === activeFilter);

  return (
    <section id="projects" className={`py-24 px-6 relative ${selectedProject ? 'z-50' : 'z-10'}`}>
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
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(6);
              }}
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
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <div key={index} className="bg-brand-card border border-brand-border rounded-xl overflow-hidden group hover:border-brand-cyan/50 transition-colors flex flex-col h-full">
              {/* Image Container */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-brand-dark/80 flex items-center justify-center border-b border-brand-border/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-brand-cyan text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                  {project.primaryTag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
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

        {/* Show More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="bg-transparent border border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-brand-dark px-10 py-3 rounded text-sm font-bold tracking-widest transition-colors uppercase"
            >
              Show More
            </button>
          </div>
        )}
        
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
