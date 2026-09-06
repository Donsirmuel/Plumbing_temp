import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface CtaSectionProps {
  onOpenQuote: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-[#1C1D1F] text-white py-28 sm:py-36 px-6 sm:px-10 md:px-16 overflow-hidden">
      {/* Authentic high-end bathroom & precision plumbing background with balanced cinematic overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2400&q=85"
          alt="Modern luxury finished bathroom with precision plumbing and concealed sanitaryware"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[110%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1F] via-[#1C1D1F]/70 to-[#1C1D1F]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center space-x-2 text-[#C8B49E] font-mono-meta text-[10px] sm:text-[11px] tracking-[0.25em] uppercase">
          <span>START A CONVERSATION</span>
          <span>•</span>
          <span>LAGOS &amp; ABUJA</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal uppercase tracking-wide leading-[1.08]">
          Discuss Your Plumbing or Building Project
        </h2>

        <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Whether you need comprehensive plumbing installation for a new property, water filtration,
          plant room setup, bathroom renovations, or turnkey building construction, our team is ready to help.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#C8B49E] hover:bg-white text-[#1C1D1F] font-mono-meta text-xs tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-200 cursor-pointer shadow-lg group"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="https://wa.me/2349031386928?text=Hello%20Ooh%20Jay%2C%20I%20would%20like%20to%20discuss%20a%20plumbing%20or%20construction%20project."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-white/40 hover:border-white hover:bg-white/10 text-white font-mono-meta text-xs tracking-[0.18em] px-8 py-4 transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 text-[#C8B49E]" />
            <span>WHATSAPP: +234 903 138 6928</span>
          </a>
        </div>

        <div className="pt-6 text-xs text-white/50 font-mono-meta tracking-[0.14em]">
          AVERAGE QUOTE TURNAROUND: UNDER 24 HOURS
        </div>
      </div>
    </section>
  );
};
