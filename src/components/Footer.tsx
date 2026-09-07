import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0B1A2A] text-white pt-16 pb-10 px-6 sm:px-10 md:px-16">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-sans text-2xl font-extrabold tracking-[0.08em] uppercase leading-none">
                OOH JAY
              </span>
              <span className="text-[11px] font-medium tracking-[0.12em] text-white/60 mt-1.5 uppercase">
                Plumbing for homes & businesses · Nigeria & beyond
              </span>
            </div>
            <p className="text-sm text-white/65 leading-6 max-w-sm">
              Homes and businesses rely on water every day. We install, repair and maintain the systems that keep it flowing — with construction support when the project needs it.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 rounded-full bg-[#1A5CFF] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1448C6] transition-colors duration-150 cursor-pointer"
              >
                Request a quote →
              </button>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold tracking-[0.14em] text-white/50 uppercase">
              Navigate
            </span>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-150">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors duration-150">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors duration-150">
                  How we work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold tracking-[0.14em] text-white/50 uppercase">
              Contact
            </span>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7AA8FF] shrink-0 mt-0.5" />
                <span className="leading-6">Victoria Island & Ikoyi Corridor, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#7AA8FF] shrink-0" />
                <a
                  href="https://wa.me/2349031386928"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors duration-150"
                >
                  +234 903 138 6928 — WhatsApp & calls
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#7AA8FF] shrink-0" />
                <a href="mailto:inquiries@oohjay.com" className="hover:text-white transition-colors duration-150">
                  inquiries@oohjay.com
                </a>
              </div>
              <div className="pt-1 text-xs text-white/50">
                Residential & commercial plumbing · Nigeria & beyond
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>© {new Date().getFullYear()} OOH JAY Plumbing Services. All rights reserved.</div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-150 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
