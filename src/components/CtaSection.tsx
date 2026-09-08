import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenQuote: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-[#0F1E2D] text-white py-20 sm:py-24 px-6 sm:px-10 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2400&q=85"
          alt="Finished bathroom with carefully installed plumbing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1E2D]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2D] via-[#0F1E2D]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <p className="text-xs font-semibold tracking-[0.14em] text-[#7AA8FF] uppercase">
          Nigeria & beyond · Residential & commercial
        </p>

        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.04em] leading-[1.05] text-white">
          Tell us what needs to work better.
        </h2>

        <p className="text-sm sm:text-base text-white/70 leading-6 max-w-2xl mx-auto">
          A leaking line, a new bathroom, a plant room or a full water system — we will help you understand the next step and what it will take.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1A5CFF] px-7 py-3 text-sm font-semibold text-white hover:bg-[#1448C6] transition-colors duration-150 cursor-pointer"
          >
            Request a quote
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/2349031386928?text=Hello%20Ooh%20Jay%2C%20I%20would%20like%20to%20discuss%20a%20plumbing%20project."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-colors duration-150"
          >
            WhatsApp: +234 903 138 6928
          </a>
        </div>

        <p className="text-xs text-white/50">We reply with a clear quotation after reviewing your photos</p>
      </div>
    </section>
  );
};
