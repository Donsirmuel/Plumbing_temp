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
          className="mb-3 bg-[#0F1E2D] text-white p-4 rounded-2xl shadow-xl border border-white/10 max-w-xs"
        >
          <div className="flex justify-between items-start gap-4">
            <span className="text-[11px] font-semibold tracking-[0.12em] text-white/60 uppercase">
              Chat on WhatsApp
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-white/60 hover:text-white transition-colors duration-150 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-sm text-white/75 leading-6 mt-2">
            Questions about a repair, installation or site visit in Nigeria or beyond? Send us a message and we will get back to you quickly.
          </p>
          <a
            href="https://wa.me/2349031386928?text=Hello%20Ooh%20Jay%2C%20I%20have%20a%20plumbing%20inquiry."
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-[13px] font-medium text-[#7AA8FF] hover:text-white transition-colors duration-150"
          >
            Start conversation →
          </a>
        </div>
      )}

      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A5CFF] text-white shadow-lg hover:bg-[#1448C6] transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5CFF] focus-visible:ring-offset-2"
        aria-label="Chat on WhatsApp"
        aria-expanded={showTooltip}
      >
        <MessageCircle className="h-5 w-5" />
      </button>
    </div>
  );
};
