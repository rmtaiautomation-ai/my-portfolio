
import { X, PlayCircle, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-brand-card border border-brand-border rounded-2xl shadow-2xl my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-border">
          <h2 className="text-2xl font-bold text-brand-text flex items-center gap-2">
            {project.title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-brand-text-muted hover:text-brand-text transition-colors rounded-full hover:bg-brand-dark"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[75vh]">
          {/* Video Player or Image Showcase */}
          {project.details?.videoUrl ? (
            <div className="w-full aspect-video bg-brand-dark rounded-xl border border-brand-border mb-8 overflow-hidden shadow-lg">
              <iframe 
                src={project.details.videoUrl} 
                frameBorder="0" 
                allowFullScreen 
                className="w-full h-full"
                title="Project Walkthrough Video"
              ></iframe>
            </div>
          ) : project.image ? (
            <div className="w-full h-64 md:h-80 bg-brand-dark rounded-xl border border-brand-border mb-8 overflow-hidden relative group shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <span className="bg-brand-cyan text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {project.primaryTag || 'Featured Project'}
                </span>
              </div>
            </div>
          ) : (
            <div className="w-full aspect-video bg-brand-dark rounded-xl border border-brand-border flex flex-col items-center justify-center text-brand-text-muted mb-8 group cursor-pointer hover:border-brand-cyan transition-colors">
              <PlayCircle size={64} className="mb-4 opacity-50 group-hover:opacity-100 group-hover:text-brand-cyan transition-all" />
              <p className="font-medium tracking-wide">[ Video Player Placeholder ]</p>
            </div>
          )}

          {/* Details Content */}
          {project.details && (
            <div className="space-y-8 text-brand-text-muted">
              
              {/* Action Buttons Bar (Live Demo, GitHub, Documentation) */}
              {(project.liveUrl || project.details?.liveUrl || project.githubUrl || project.details?.githubUrl || project.details.architectureLink) && (
                <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-brand-dark/60 border border-brand-border rounded-xl">
                  {(project.liveUrl || project.details?.liveUrl) && (
                    <a 
                      href={project.liveUrl || project.details?.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold bg-brand-cyan text-brand-dark hover:bg-white transition-all px-6 py-3 rounded-lg flex items-center gap-2 uppercase tracking-wider shadow-md hover:shadow-brand-cyan/20"
                    >
                      {project.title?.includes('Simulator') ? 'Launch Live Simulator \u2197' : 'Launch Live App \u2197'}
                    </a>
                  )}
                  {(project.githubUrl || project.details?.githubUrl) && (
                    <a 
                      href={project.githubUrl || project.details?.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-text hover:text-brand-cyan transition-all bg-brand-dark border border-brand-border hover:border-brand-cyan px-6 py-3 rounded-lg flex items-center gap-2 uppercase tracking-wider"
                    >
                      GitHub Repository &nearr;
                    </a>
                  )}
                  {project.details.architectureLink && project.details.architectureLink !== (project.githubUrl || project.details?.githubUrl) && (
                    <a 
                      href={project.details.architectureLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-cyan hover:text-brand-text transition-all border border-brand-cyan hover:border-brand-text px-6 py-3 rounded-lg flex items-center gap-2 uppercase tracking-wider"
                    >
                      View Documentation &rarr;
                    </a>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Exec Summary & Challenge */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-brand-text mb-2 border-b border-brand-border/50 pb-2">Executive Summary</h3>
                    <p className="leading-relaxed">{project.details.executiveSummary}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-text mb-2 border-b border-brand-border/50 pb-2">The Challenge</h3>
                    <p className="leading-relaxed">{project.details.challenge}</p>
                  </div>
                </div>

                {/* Solution & Impact */}
                <div className="flex flex-col gap-4">
                  <div className="bg-brand-dark p-6 rounded-xl border border-brand-border h-full">
                    <h3 className="text-lg font-bold text-brand-cyan mb-2">The Solution & Impact</h3>
                    <p className="leading-relaxed text-brand-text-muted">{project.details.solution}</p>
                  </div>
                </div>
              </div>

              {/* Architecture */}
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-brand-text flex items-center gap-2">
                    Technical Architecture (Data Flow)
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {project.details.architecture.map((step: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-brand-dark/50 border border-brand-border">
                      <div className="bg-brand-cyan/10 text-brand-cyan p-2 rounded-lg mt-1">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-text text-sm mb-1">{step.label}</h4>
                        <p className="text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Tools */}
              <div>
                <h3 className="text-lg font-bold text-brand-text mb-3">Core Tools & Modules Utilized:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.tools.map((tool: string, idx: number) => (
                    <span key={idx} className="bg-brand-dark border border-brand-border text-brand-cyan text-sm px-4 py-2 rounded-lg font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
