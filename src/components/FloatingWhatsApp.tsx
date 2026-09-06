import React, { useState } from 'react';
import { MessageSquare, X, PhoneCall } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-3 bg-[#1C1D1F] text-white p-4 shadow-2xl border border-white/10 max-w-xs text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex justify-between items-start">
            <span className="font-mono-meta text-[9.5px] tracking-[0.2em] text-[#C8B49E] uppercase">
              OOH JAY WHATSAPP HOTLINE
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-white/60 hover:text-white p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-white/80 font-light mt-1.5 leading-relaxed">
            Need urgent engineering consultation or site inspection in Lagos or Abuja? Chat directly with
            our Chief Engineer.
          </p>
          <a
            href="https://wa.me/2349031386928?text=Hello%20Ooh%20Jay%2C%20I%20have%20an%20urgent%20construction%20or%20plumbing%20inquiry."
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center space-x-2 text-[10px] font-mono-meta tracking-[0.16em] text-[#C8B49E] hover:underline"
          >
            <span>START CONVERSATION (+234 903 138 6928) →</span>
          </a>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="hidden sm:inline-flex items-center space-x-2 bg-[#1C1D1F]/90 backdrop-blur-md text-white px-3.5 py-2 text-[10px] font-mono-meta tracking-[0.16em] border border-white/20 shadow-lg hover:bg-[#1C1D1F] transition-all cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>ENGINEER ONLINE: +234 903 138 6928</span>
        </button>

        <a
          href="https://wa.me/2349031386928?text=Hello%20Ooh%20Jay%20Engineering%2C%20I%20would%20like%20to%20inquire%20about%20your%20construction%20and%20plumbing%20services."
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-108 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>
      </div>
    </div>
  );
};
