import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#141517] text-white pt-20 pb-12 px-6 sm:px-10 md:px-16 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.16em] uppercase font-normal">
                OOH JAY
              </span>
              <span className="font-mono-meta text-[9.5px] tracking-[0.26em] text-white/70 mt-1">
                CONSTRUCTION & PLUMBING
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 font-light max-w-sm leading-relaxed">
              Specialized plumbing engineering and building construction across Nigeria.
              Delivering reliable water systems, pressure networks, plant rooms, and structural execution
              across Lagos, Abuja, and nationwide.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 bg-[#C8B49E] text-[#1C1D1F] font-mono-meta text-[10.5px] tracking-[0.2em] font-semibold hover:bg-white transition-colors cursor-pointer"
              >
                REQUEST A PROJECT QUOTE →
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono-meta text-[10px] tracking-[0.25em] text-[#C8B49E] block uppercase">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs font-mono-meta text-white/70 tracking-[0.16em]">
              <li>
                <button
                  onClick={() => scrollTo('capabilities-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  CAPABILITIES
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('recent-projects-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  PROJECTS & ARCHIVE
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('why-oohjay-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  THE OOH JAY STANDARD
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('process-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  HOW WE WORK (PROCESS)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono-meta text-[10px] tracking-[0.25em] text-[#C8B49E] block uppercase">
              LAGOS HEAD OFFICE & CONTACT
            </span>
            <div className="space-y-3 text-xs font-light text-white/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C8B49E] shrink-0 mt-0.5" />
                <span>Victoria Island & Ikoyi Corridor, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C8B49E] shrink-0" />
                <a
                  href="https://wa.me/2349031386928"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C8B49E] transition-colors font-mono-meta text-[11px]"
                >
                  +234 903 138 6928 (WhatsApp & Calls)
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#C8B49E] shrink-0" />
                <a
                  href="mailto:inquiries@oohjay.com"
                  className="hover:text-[#C8B49E] transition-colors font-mono-meta text-[11px]"
                >
                  inquiries@oohjay.com
                </a>
              </div>
              <div className="pt-2 text-[10px] text-white/50 font-mono-meta">
                PROFESSIONAL PLUMBING &amp; CONSTRUCTION SERVICES • LAGOS &amp; ABUJA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono-meta text-white/50 gap-4">
          <div>
            © {new Date().getFullYear()} OOH JAY CONSTRUCTION & PLUMBING. ALL RIGHTS RESERVED.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
