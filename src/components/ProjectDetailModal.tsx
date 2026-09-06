import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuote,
}) => {
  if (!project) return null;

  const whatsappInquiryUrl = `https://wa.me/2349031386928?text=${encodeURIComponent(
    `Hello Ooh Jay team, I am inquiring about your work on ${project.title} (${project.location}, ${project.year}). I have a project with similar requirements.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-[#F9F8F6] w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-[rgba(28,29,31,0.15)] flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#F9F8F6]/95 backdrop-blur-xs z-20 px-6 sm:px-10 py-5 flex items-center justify-between border-b border-[rgba(28,29,31,0.1)]">
          <div className="flex items-center space-x-3">
            <span className="font-mono-meta text-xs text-[#A38B6C] tracking-[0.2em] font-semibold">
              {project.number}
            </span>
            <span className="text-[#706B65]">/</span>
            <span className="font-mono-meta text-xs tracking-[0.2em] text-[#706B65]">
              {project.location} • {project.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#1C1D1F] hover:text-[#A38B6C] transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:px-10 sm:py-8 space-y-8">
          {/* Main Hero Photograph */}
          <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full overflow-hidden bg-[#EAE7E1] shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <span className="font-mono-meta text-[10px] tracking-[0.25em] text-[#A38B6C] uppercase block">
              {project.category}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1D1F] font-normal uppercase">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#706B65] font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[rgba(28,29,31,0.08)]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 bg-[#EAE7E1]/40 border border-[rgba(28,29,31,0.06)]">
                  <span className="font-mono-meta text-[9px] text-[#706B65] tracking-[0.2em] block">
                    {m.label.toUpperCase()}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#1C1D1F] font-medium mt-1 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Scope of Work */}
          <div className="space-y-4 pt-4 border-t border-[rgba(28,29,31,0.08)]">
            <h3 className="font-mono-meta text-xs tracking-[0.22em] text-[#1C1D1F] uppercase">
              ENGINEERING & EXECUTION SCOPE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#706B65]">
                  <Check className="w-4 h-4 text-[#A38B6C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[rgba(28,29,31,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#706B65]">
              {project.client && (
                <span>
                  Client: <strong className="text-[#1C1D1F] font-medium">{project.client}</strong>
                </span>
              )}
            </div>
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none text-center px-5 py-3 border border-[rgba(28,29,31,0.3)] hover:border-[#1C1D1F] text-[#1C1D1F] font-mono-meta text-[10px] tracking-[0.18em] transition-colors"
              >
                DISCUSS ON WHATSAPP
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#1C1D1F] hover:bg-[#A38B6C] text-white font-mono-meta text-[10px] tracking-[0.18em] transition-colors cursor-pointer"
              >
                <span>REQUEST SIMILAR QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
