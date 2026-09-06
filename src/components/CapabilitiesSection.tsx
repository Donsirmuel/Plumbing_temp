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

      // Tab switcher bar slide
      if (tabsRef.current) {
        gsap.fromTo(
          tabsRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: tabsRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Detailed card container slide
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardRef.current,
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
      id="capabilities-section"
      ref={sectionRef}
      className="bg-[#F9F8F6] py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto"
    >
      {/* Section Header */}
      <div
        ref={headerRef}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-4 border-b border-[rgba(28,29,31,0.1)]"
      >
        <div>
          <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono-meta tracking-[0.25em] text-[#706B65] uppercase">
            <span>CORE CAPABILITIES</span>
            <span className="w-6 h-[1px] bg-[#706B65]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1D1F] font-normal tracking-[-0.01em] mt-1">
            Integrated Building & Mechanical Solutions
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#706B65] font-light max-w-md leading-relaxed">
          From engineered water distribution and high-performance plumbing to complete building construction,
          we handle what runs through the building and the structure around it.
        </p>
      </div>

      {/* Interactive Tab Switcher (inspired by Glide's clean feature tabs) */}
      <div
        ref={tabsRef}
        className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-10 border-b border-[rgba(28,29,31,0.08)] scrollbar-none"
      >
        {SERVICES.map((s, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 font-mono-meta text-[11px] tracking-[0.18em] transition-all cursor-pointer whitespace-nowrap flex items-center space-x-2.5 ${
                isActive
                  ? 'bg-[#1C1D1F] text-white shadow-sm'
                  : 'bg-transparent text-[#706B65] hover:text-[#1C1D1F] hover:bg-[#EAE7E1]/60'
              }`}
            >
              <span className={`text-[9px] ${isActive ? 'text-[#C8B49E]' : 'text-[#706B65]'}`}>
                {s.number}
              </span>
              <span>{s.title.toUpperCase()}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content: Clean Left/Right Layout with Smooth Transition */}
      <div
        ref={cardRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch bg-white border border-[rgba(28,29,31,0.1)] p-6 sm:p-10 lg:p-12 shadow-sm"
      >
        {/* Left column: Information & scope */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-[#A38B6C] font-mono-meta text-[10px] tracking-[0.25em]">
              <span>SERVICE {currentService.number}</span>
              <span>•</span>
              <span>{currentService.subtitle.toUpperCase()}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1D1F] font-normal">
              {currentService.title}
            </h3>

            <p className="text-sm sm:text-base text-[#706B65] font-light leading-relaxed">
              {currentService.detailedDesc}
            </p>

            {/* Highlights checklist */}
            <div className="pt-4 space-y-3">
              <span className="font-mono-meta text-[10px] tracking-[0.2em] text-[#1C1D1F] block uppercase">
                KEY EXECUTION HIGHLIGHTS
              </span>
              <div className="space-y-2.5">
                {currentService.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#706B65]">
                    <Check className="w-4 h-4 text-[#A38B6C] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specs & Action Row */}
          <div className="pt-6 border-t border-[rgba(28,29,31,0.08)] space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentService.technicalSpecs.map((spec, sIdx) => (
                <div key={sIdx} className="bg-[#F9F8F6] p-3 border border-[rgba(28,29,31,0.06)]">
                  <span className="font-mono-meta text-[8.5px] text-[#706B65] tracking-[0.16em] block uppercase">
                    {spec.label}
                  </span>
                  <span className="font-serif text-base sm:text-lg text-[#1C1D1F] font-medium mt-0.5 block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenQuote(currentService.title)}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1C1D1F] hover:bg-[#A38B6C] text-white font-mono-meta text-[11px] tracking-[0.2em] transition-colors cursor-pointer group"
            >
              <span>INQUIRE ABOUT {currentService.title.toUpperCase()}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right column: High-Impact Technical Work Evidence */}
        <div className="lg:col-span-6 relative overflow-hidden bg-[#EAE7E1] min-h-[420px] lg:min-h-[540px] border border-[rgba(28,29,31,0.08)] flex flex-col justify-end">
          <img
            key={currentService.id}
            src={currentService.image}
            alt={currentService.title}
            className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[104%] brightness-[0.98] transition-opacity duration-300"
            loading="lazy"
          />
          
          {/* Top Discipline Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[#1C1D1F]/85 backdrop-blur-xs text-white font-mono-meta text-[9px] tracking-[0.2em] px-3 py-1.5 uppercase">
              TECHNICAL VERIFICATION
            </span>
          </div>

          {/* Bottom Evidence Bar */}
          <div className="relative z-10 bg-[#1C1D1F]/92 backdrop-blur-xs text-white p-4 m-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border border-white/10">
            <div>
              <span className="text-[10.5px] font-mono-meta tracking-[0.16em] text-white block uppercase">
                {currentService.title}
              </span>
              <span className="text-[9.5px] font-mono-meta text-[#C8B49E] tracking-[0.12em]">
                {currentService.technicalSpecs[0].label}: {currentService.technicalSpecs[0].value}
              </span>
            </div>
            <span className="text-[9px] font-mono-meta tracking-[0.2em] text-[#C8B49E] border border-[#C8B49E]/40 px-2.5 py-1">
              IN-HOUSE EXECUTION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
