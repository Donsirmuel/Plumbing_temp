import React, { useState, useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '../data/testimonials';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeStepIdx];

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header subtle fade-in and upward slide
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Process grid columns slide
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process-section"
      ref={sectionRef}
      className="bg-[#F9F8F6] py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto border-t border-[rgba(28,29,31,0.08)]"
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[rgba(28,29,31,0.1)]"
      >
        <div>
          <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono-meta tracking-[0.25em] text-[#706B65] uppercase">
            <span>METHODOLOGY</span>
            <span className="w-6 h-[1px] bg-[#706B65]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1D1F] font-normal tracking-[-0.01em] mt-1">
            How We Deliver Your Project
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#706B65] font-light max-w-md leading-relaxed">
          Clear milestones, transparent scope, and direct project supervision. Our 4-stage process
          guides your project from first discussion to fully tested handover.
        </p>
      </div>

      {/* 4-Step Process Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left Column: Numbered Interactive Steps */}
        <div className="lg:col-span-6 flex flex-col divide-y divide-[rgba(28,29,31,0.1)] border-y border-[rgba(28,29,31,0.1)]">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = idx === activeStepIdx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                className={`py-6 sm:py-7 transition-all cursor-pointer group flex items-start justify-between ${
                  isCurrent ? 'bg-white px-5 sm:px-6 shadow-xs' : 'hover:bg-[#EAE7E1]/40 px-2'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-4">
                    <span
                      className={`font-mono-meta text-xs tracking-[0.2em] font-semibold ${
                        isCurrent ? 'text-[#A38B6C]' : 'text-[#706B65]'
                      }`}
                    >
                      STEP {step.number}
                    </span>
                    <span className="text-[11px] text-[#706B65] font-mono-meta">{step.duration}</span>
                  </div>
                  <h3
                    className={`font-serif text-xl sm:text-2xl transition-colors ${
                      isCurrent ? 'text-[#1C1D1F]' : 'text-[#706B65] group-hover:text-[#1C1D1F]'
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                <ArrowRight
                  className={`w-4 h-4 shrink-0 transition-transform mt-2 ${
                    isCurrent ? 'text-[#A38B6C] translate-x-1' : 'text-[#706B65] opacity-40'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Step Details Box (inspired by Glide's interactive product views) */}
        <div className="lg:col-span-6 bg-[#1C1D1F] text-white p-6 sm:p-10 lg:p-12 border border-white/10 shadow-xl flex flex-col justify-between space-y-6 sticky top-28">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="font-mono-meta text-xs tracking-[0.25em] text-[#C8B49E]">
                STAGE {activeStep.number} / 04
              </span>
              <span className="font-mono-meta text-xs tracking-[0.2em] text-white/70">
                TIMELINE: {activeStep.duration.toUpperCase()}
              </span>
            </div>

            {/* Technical Real-World Task Photograph */}
            {activeStep.image && (
              <div className="relative overflow-hidden aspect-[16/9] w-full border border-white/10 bg-black/40 shadow-inner">
                <img
                  key={activeStep.number}
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="w-full h-full object-cover object-center filter contrast-[105%] brightness-[0.92] transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#1C1D1F]/90 backdrop-blur-xs text-[#C8B49E] font-mono-meta text-[8.5px] tracking-[0.2em] px-2.5 py-1 uppercase border border-white/10">
                    REAL-WORLD TECHNICAL TASK
                  </span>
                </div>
                {activeStep.imageCaption && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-6">
                    <p className="text-[10.5px] font-mono-meta text-white/85 tracking-wide">
                      {activeStep.imageCaption}
                    </p>
                  </div>
                )}
              </div>
            )}

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              {activeStep.title}
            </h3>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
              {activeStep.description}
            </p>

            <div className="pt-2 space-y-3">
              <span className="font-mono-meta text-[10px] tracking-[0.22em] text-[#C8B49E] block uppercase">
                GUARANTEED DELIVERABLES:
              </span>
              <div className="space-y-2">
                {activeStep.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#C8B49E] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-mono-meta text-white/60">
              READY TO COMMENCE STAGE 01?
            </span>
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-6 py-3 bg-[#C8B49E] hover:bg-white text-[#1C1D1F] font-mono-meta text-[11px] tracking-[0.2em] font-semibold transition-colors cursor-pointer text-center"
            >
              SCHEDULE SITE SURVEY →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
