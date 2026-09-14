import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../data/services';

interface CapabilitiesSectionProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentService = SERVICES[activeTab];

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // reduced-motion commented out — always animate
    // if (prefersReduced) return;

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
      if (tabsRef.current) {
        gsap.fromTo(
          tabsRef.current,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: { trigger: tabsRef.current, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      }
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate card content change — quick cross-fade, no scale(0)
  useEffect(() => {
    if (!cardRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // reduced-motion commented out — always animate
    // if (prefersReduced) return;
    gsap.fromTo(cardRef.current, { opacity: 0.92 }, { opacity: 1, duration: 0.22, ease: 'power2.out', overwrite: true });
  }, [activeTab]);

  return (
    <section
      id="capabilities-section"
      ref={sectionRef}
      className="bg-[#F6F5F2] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 max-w-360 mx-auto"
    >
      <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-5 border-b border-[#0F1E2D]/10">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-[#1A5CFF] uppercase">What we do</p>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-[#0F1E2D] mt-2">
            Plumbing for every situation
          </h2>
        </div>
        <p className="text-sm text-[#5B6B7A] leading-6 max-w-md">
          Homes, businesses, plant rooms and the construction support that sometimes goes with them — each service has a clear job.
        </p>
      </div>

      <div ref={tabsRef} className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {SERVICES.map((s, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(idx)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 cursor-pointer border ${
                isActive
                  ? 'bg-[#1A5CFF] text-white border-[#1A5CFF] shadow-sm'
                  : 'bg-white text-[#2D3A4A] border-[#0F1E2D]/10 hover:border-[#0F1E2D]/20 hover:text-[#0F1E2D]'
              }`}
            >
              <span className="opacity-60 mr-1.5 text-xs">{s.number}</span>
              {s.title}
            </button>
          );
        })}
      </div>

      <div
        ref={cardRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch bg-white border border-[#0F1E2D]/10 rounded-[1.5rem] p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(15,30,45,0.06)]"
      >
        <div className="lg:col-span-6 flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <div className="text-xs font-semibold tracking-[0.12em] text-[#1A5CFF] uppercase">
              {currentService.subtitle}
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#0F1E2D]">
              {currentService.title}
            </h3>

            <p className="text-sm sm:text-[15px] text-[#5B6B7A] leading-6">
              {currentService.detailedDesc}
            </p>

            <div className="pt-2 space-y-3">
              <span className="text-xs font-semibold tracking-[0.12em] text-[#0F1E2D] uppercase">
                What we handle
              </span>
              <div className="space-y-2">
                {currentService.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-sm text-[#2D3A4A]">
                    <Check className="w-4 h-4 text-[#1A5CFF] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#0F1E2D]/8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentService.technicalSpecs.map((spec, sIdx) => (
                <div key={sIdx} className="rounded-xl bg-[#F6F5F2] p-3 border border-[#0F1E2D]/5">
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-[#5B6B7A] uppercase block">
                    {spec.label}
                  </span>
                  <span className="text-sm font-semibold text-[#0F1E2D] mt-1 block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenQuote(currentService.title)}
              className="inline-flex items-center gap-2 rounded-full bg-[#0F1E2D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1B2E4A] transition-colors duration-150 cursor-pointer"
            >
              <span>Ask about {currentService.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative overflow-hidden bg-[#E8ECEE] rounded-2xl min-h-[420px] lg:min-h-[520px] border border-[#0F1E2D]/5 flex flex-col justify-end">
          <img
            key={currentService.id}
            src={currentService.image}
            alt={currentService.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2D]/50 via-transparent to-transparent" />
          <div className="relative m-4 rounded-xl bg-white/95 backdrop-blur p-4 flex items-center justify-between gap-3 shadow-lg">
            <div>
              <div className="text-sm font-semibold text-[#0F1E2D]">{currentService.title}</div>
              <div className="text-xs text-[#5B6B7A]">{currentService.technicalSpecs[0].value}</div>
            </div>
            <span className="shrink-0 rounded-full bg-[#1A5CFF] px-3 py-1 text-xs font-semibold text-white">
              {currentService.number}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
