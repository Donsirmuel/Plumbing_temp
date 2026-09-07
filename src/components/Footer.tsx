import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenQuote?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="w-full bg-[#f9f2ed] border-t border-[#dfc0b7]/30 text-[#1d1b18]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: OOH JAY */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <div className="flex items-baseline gap-2">
              <span
                className="text-[20px] font-medium tracking-tight text-[#1d1b18]"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                OOH JAY
              </span>
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">Abeokuta · Lagos</span>
            </div>
            <p className="text-[14px] leading-6 text-[#58423c] max-w-sm">
              Dependable plumbing for homes and businesses. Based on Abiola Way, Abeokuta — serving Lagos, Abeokuta and beyond with clear quotations and calm workmanship.
            </p>
            <div className="mt-2 flex flex-col gap-1">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#8b716a]">Direct Line &amp; WhatsApp</span>
              <a href="tel:+2349031386928" className="text-[18px] font-semibold text-[#1d1b18] hover:text-[#a43716] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                +234 903 138 6928
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h3 className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">Navigation</h3>
            <ul className="flex flex-col gap-2 text-[14px] text-[#58423c]">
              <li>
                <Link to="/services" className="hover:text-[#1d1b18] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#1d1b18] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1d1b18] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#1d1b18] transition-colors">
                  Pricing &amp; Guarantee
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1d1b18] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Emergency & WhatsApp */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">Emergency &amp; WhatsApp</h3>
            <div className="flex flex-col gap-3 text-[14px] text-[#58423c]">
              <div className="flex flex-col gap-1.5">
                <a href="tel:+2349031386928" className="inline-flex items-center gap-2 font-semibold text-[#1d1b18] hover:text-[#a43716] transition-colors">
                  <span className="material-symbols-outlined text-[18px] text-[#a43716]">phone_in_talk</span>
                  +234 903 138 6928 . Call 24/7
                </a>
                <a
                  href="https://wa.me/2349031386928"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#1d1b18] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#516257]">chat</span>
                  Chat on WhatsApp
                </a>
                <a href="mailto:inquiries@oohjay.com" className="inline-flex items-center gap-2 hover:text-[#1d1b18] transition-colors text-[13px]">
                  <span className="material-symbols-outlined text-[18px] text-[#a43716]">email</span>
                  inquiries@oohjay.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: OOH JAY Promise */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <div className="mt-1 p-4 bg-[#fff8f3] rounded-xl border border-[#dfc0b7]/30 flex items-start gap-3 shadow-sm">
              <span className="material-symbols-outlined text-[#a43716] text-[22px] mt-0.5 shrink-0">verified</span>
              <div>
                <p className="text-[13px] font-semibold tracking-[0.02em] text-[#1d1b18]">1-Year Guarantee</p>
                <p className="text-[13px] leading-5 text-[#58423c] mt-0.5">
                  Every fitting, pipe repair, and sanitary valve is warrantied against failures — if it drips, we return free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#dfc0b7]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[13px] text-[#8b716a]">© {new Date().getFullYear()} OOH JAY Plumbing Services Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="tel:+2349031386928" className="text-[13px] text-[#8b716a] hover:text-[#1d1b18] transition-colors">
              Direct Line
            </a>
            <Link to="/pricing" className="text-[13px] text-[#8b716a] hover:text-[#1d1b18] transition-colors">
              Warranty Terms
            </Link>
            <button onClick={scrollToTop} className="text-[13px] text-[#8b716a] hover:text-[#1d1b18] transition-colors cursor-pointer inline-flex items-center gap-1">
              Back to top <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
