import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import gsap from 'gsap';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tooltipRef.current) return;
    if (showTooltip) {
      gsap.fromTo(
        tooltipRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out', overwrite: true }
      );
    }
  }, [showTooltip]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {showTooltip && (
        <div
          ref={tooltipRef}
          className="mb-3 bg-[#191513] text-[#f6f0ea] p-4 rounded-2xl shadow-2xl border border-white/10 max-w-xs"
        >
          <div className="flex justify-between items-start gap-4">
            <span className="text-[11px] font-semibold tracking-[0.12em] text-[#ffdcbd] uppercase">
              Chat on WhatsApp
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#e7e1dc]/60 hover:text-white transition-colors duration-150 cursor-pointer p-1 -mr-1 -mt-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-[#e7e1dc]/85 leading-relaxed mt-2">
            Questions about a repair, installation or site visit in Nigeria or beyond? Send us a message and we will get back to you quickly.
          </p>
          <a
            href="https://wa.me/2349031386928?text=Hello%20Ooh%20Jay%2C%20I%20have%20a%20plumbing%20inquiry."
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-[13px] font-semibold text-[#ffdcbd] hover:text-white transition-colors duration-150"
          >
            Start conversation →
          </a>
        </div>
      )}

      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Chat on WhatsApp"
        aria-expanded={showTooltip}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};
