import React from 'react';
import { X, PlayCircle, Zap, CheckCircle2 } from 'lucide-react';

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
            <Zap className="text-brand-cyan" size={24} />
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
          {/* Video Placeholder */}
          <div className="w-full aspect-video bg-brand-dark rounded-xl border border-brand-border flex flex-col items-center justify-center text-brand-text-muted mb-8 group cursor-pointer hover:border-brand-cyan transition-colors">
            <PlayCircle size={64} className="mb-4 opacity-50 group-hover:opacity-100 group-hover:text-brand-cyan transition-all" />
            <p className="font-medium tracking-wide">[ Video Player Placeholder ]</p>
          </div>

          {/* Details Content */}
          {project.details && (
            <div className="space-y-8 text-brand-text-muted">
              
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
                <div className="bg-brand-dark p-6 rounded-xl border border-brand-border">
                  <h3 className="text-lg font-bold text-brand-cyan mb-2">The Solution & Impact</h3>
                  <p className="leading-relaxed text-brand-text-muted">{project.details.solution}</p>
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="text-xl font-bold text-brand-text mb-4 flex items-center gap-2">
                  Technical Architecture (Data Flow)
                </h3>
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
