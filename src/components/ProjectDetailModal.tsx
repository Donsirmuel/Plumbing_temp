import React, { useEffect, useRef } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import gsap from 'gsap';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onOpenQuote }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (overlayRef.current && cardRef.current) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power2.out' });
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 10, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: 'power2.out' }
      );
    }
  }, [project]);

  if (!project) return null;

  const whatsappInquiryUrl = `https://wa.me/2349031386928?text=${encodeURIComponent(
    `Hello Ooh Jay team, I am inquiring about your work on ${project.title} (${project.location}, ${project.year}). I have a project with similar requirements.`
  )}`;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl border border-[#0F1E2D]/10 flex flex-col"
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur z-20 px-6 sm:px-8 py-4 flex items-center justify-between border-b border-[#0F1E2D]/10">
          <div className="text-xs text-[#5B6B7A]">
            <span className="font-semibold text-[#0F1E2D]">{project.number}</span> · {project.location} · {project.year}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F6F5F2] text-[#0F1E2D] transition-colors duration-150 cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#E8ECEE]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.12em] text-[#1A5CFF] uppercase">{project.category}</p>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-[-0.04em] text-[#0F1E2D] leading-tight">
              {project.title}
            </h2>
            <p className="text-sm text-[#5B6B7A] leading-6 max-w-3xl">{project.description}</p>
          </div>

          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#0F1E2D]/8">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="rounded-xl bg-[#F6F5F2] p-4 border border-[#0F1E2D]/5">
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-[#5B6B7A] uppercase block">
                    {m.label}
                  </span>
                  <span className="text-sm font-bold text-[#0F1E2D] mt-1 block">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-3 pt-4 border-t border-[#0F1E2D]/8">
            <h3 className="text-xs font-semibold tracking-[0.12em] text-[#0F1E2D] uppercase">Scope</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#2D3A4A]">
                  <Check className="w-4 h-4 text-[#1A5CFF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#0F1E2D]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#5B6B7A]">
              {project.client && (
                <span>
                  Client: <strong className="text-[#0F1E2D]">{project.client}</strong>
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none text-center rounded-full px-5 py-2.5 border border-[#0F1E2D]/15 text-[#0F1E2D] text-sm font-medium hover:border-[#0F1E2D]/25 hover:bg-[#F6F5F2] transition-colors duration-150"
              >
                WhatsApp
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 bg-[#1A5CFF] text-white text-sm font-semibold hover:bg-[#1448C6] transition-colors duration-150 cursor-pointer"
              >
                <span>Request similar quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
