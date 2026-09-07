import React, { useState, useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '../data/testimonials';
import { ArrowRight, Check } from 'lucide-react';
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
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' },
          }
        );
      }
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (gridRef.current) {
      gsap.fromTo(gridRef.current, { opacity: 0.96 }, { opacity: 1, duration: 0.18, ease: 'power2.out' });
    }
  }, [activeStepIdx]);

  return (
    <section
      id="process-section"
      ref={sectionRef}
      className="bg-[#F6F5F2] py-16 sm:py-20 px-6 sm:px-10 md:px-16 max-w-360 mx-auto border-t border-[#0F1E2D]/8"
    >
      <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#0F1E2D]/10">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-[#1A5CFF] uppercase">How we work</p>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-[-0.04em] text-[#0F1E2D] mt-2">
            From first call to handover
          </h2>
        </div>
        <p className="text-sm text-[#5B6B7A] leading-6 max-w-md">
          Four clear stages — so you always know what happens next and what is included.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col rounded-2xl overflow-hidden border border-[#0F1E2D]/10 bg-white">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = idx === activeStepIdx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                className={`text-left py-5 px-5 sm:px-6 flex items-start justify-between gap-4 transition-colors duration-150 border-b last:border-0 border-[#0F1E2D]/5 cursor-pointer ${
                  isCurrent ? 'bg-[#F6F5F2]' : 'bg-white hover:bg-[#F6F5F2]/60'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-xs">
                    <span className={`font-semibold tracking-[0.12em] uppercase ${isCurrent ? 'text-[#1A5CFF]' : 'text-[#5B6B7A]'}`}>
                      Step {step.number}
                    </span>
                    <span className="text-[#5B6B7A]">{step.duration}</span>
                  </div>
                  <h3 className={`font-sans text-lg font-bold tracking-[-0.02em] ${isCurrent ? 'text-[#0F1E2D]' : 'text-[#2D3A4A]'}`}>
                    {step.title}
                  </h3>
                </div>
                <ArrowRight className={`w-4 h-4 shrink-0 mt-1 transition-transform duration-150 ${isCurrent ? 'text-[#1A5CFF] translate-x-0.5' : 'text-[#5B6B7A]/40'}`} />
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7 bg-[#0F1E2D] text-white p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col gap-6">
          <div className="flex items-center justify-between text-xs border-b border-white/10 pb-4">
            <span className="font-semibold tracking-[0.12em] text-[#7AA8FF] uppercase">Stage {activeStep.number} of 04</span>
            <span className="text-white/60">{activeStep.duration}</span>
          </div>

          {activeStep.image && (
            <div className="relative overflow-hidden rounded-xl aspect-video w-full border border-white/10 bg-black/30">
              <img
                key={activeStep.number}
                src={activeStep.image}
                alt={activeStep.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {activeStep.imageCaption && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-xs text-white/85">{activeStep.imageCaption}</p>
                </div>
              )}
            </div>
          )}

          <h3 className="font-sans text-2xl font-bold tracking-[-0.03em] text-white">{activeStep.title}</h3>
          <p className="text-sm text-white/70 leading-6">{activeStep.description}</p>

          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-[0.12em] text-[#7AA8FF] uppercase">You receive</span>
            <div className="space-y-2">
              {activeStep.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5 text-sm text-white/85">
                  <Check className="w-4 h-4 text-[#7AA8FF] shrink-0 mt-0.5" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-white/60">Ready to start?</span>
            <button
              onClick={onOpenQuote}
              className="rounded-full bg-[#1A5CFF] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#1448C6] transition-colors duration-150 cursor-pointer"
            >
              Schedule a site visit →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
