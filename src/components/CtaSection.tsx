import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenQuote: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-[#191513] text-white py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/master-bathroom-ensuite.webp"
          alt="Master bathroom ensuite in Abeokuta — basin, shower and watertight finish as installed"
          className="w-full h-full object-cover opacity-25 filter brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191513] via-[#191513]/80 to-[#191513]/90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5 md:space-y-6">
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-[#ffdcbd] uppercase">
          Nigeria &amp; beyond · Residential &amp; commercial
        </p>

        <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#f6f0ea]">
          Tell us what needs to work better.
        </h2>

        <p className="text-sm sm:text-base text-[#e7e1dc] leading-relaxed max-w-2xl mx-auto">
          Tell us about your repair or installation. We will explain the practical steps, the parts required, and what the work will cost before anything starts.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#a43716] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#c54f2c] transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <span>Request a quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/2349031386928?text=Hello%20Ooh%20Jay%2C%20I%20would%20like%20to%20discuss%20a%20plumbing%20project."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/15 px-7 py-3.5 text-sm font-medium text-white transition-all active:scale-[0.98]"
          >
            WhatsApp: +234 903 138 6928
          </a>
        </div>

        <p className="text-xs text-[#e7e1dc]/60">We reply with a clear quotation after reviewing your photos</p>
      </div>
    </section>
  );
};

