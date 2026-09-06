import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1C1D1F]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
        {/* Brand identity matching the attached image */}
        <a
          id="nav-brand-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex flex-col text-left focus:outline-none"
        >
          <span className="font-serif text-2xl sm:text-[1.75rem] tracking-[0.16em] text-white font-normal uppercase">
            OOH JAY
          </span>
          <span className="font-mono-meta text-[8.5px] sm:text-[9.5px] tracking-[0.26em] text-white/75 mt-0.5">
            CONSTRUCTION & PLUMBING
          </span>
        </a>

        {/* Center navigation links */}
        <nav className="hidden md:flex items-center space-x-10" aria-label="Main Navigation">
          <button
            id="nav-link-capabilities"
            onClick={() => scrollToSection('capabilities-section')}
            className="text-[12px] font-mono-meta tracking-[0.2em] text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            CAPABILITIES
          </button>
          <button
            id="nav-link-projects"
            onClick={() => scrollToSection('recent-projects-section')}
            className="text-[12px] font-mono-meta tracking-[0.2em] text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            PROJECTS
          </button>
          <button
            id="nav-link-process"
            onClick={() => scrollToSection('process-section')}
            className="text-[12px] font-mono-meta tracking-[0.2em] text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            PROCESS
          </button>
          <button
            id="nav-link-about"
            onClick={() => scrollToSection('why-oohjay-section')}
            className="text-[12px] font-mono-meta tracking-[0.2em] text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            ABOUT
          </button>
        </nav>

        {/* Right CTA Button (bordered outline as seen in image) */}
        <div className="flex items-center space-x-4">
          <button
            id="nav-quote-btn"
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center space-x-2 text-[11px] font-mono-meta tracking-[0.18em] text-white border border-white/40 hover:border-white hover:bg-white/10 px-5 py-2.5 transition-all duration-200 cursor-pointer"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile toggle */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#C8B49E] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-menu"
          className="md:hidden bg-[#1C1D1F] border-b border-white/15 px-6 py-8 shadow-2xl text-white animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => scrollToSection('capabilities-section')}
              className="text-left font-mono-meta text-xs tracking-[0.22em] text-white/90 hover:text-[#C8B49E] transition-colors"
            >
              CAPABILITIES
            </button>
            <button
              onClick={() => scrollToSection('recent-projects-section')}
              className="text-left font-mono-meta text-xs tracking-[0.22em] text-white/90 hover:text-[#C8B49E] transition-colors"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('process-section')}
              className="text-left font-mono-meta text-xs tracking-[0.22em] text-white/90 hover:text-[#C8B49E] transition-colors"
            >
              PROCESS
            </button>
            <button
              onClick={() => scrollToSection('why-oohjay-section')}
              className="text-left font-mono-meta text-xs tracking-[0.22em] text-white/90 hover:text-[#C8B49E] transition-colors"
            >
              ABOUT
            </button>

            <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full text-center py-3 bg-[#C8B49E] text-[#1C1D1F] font-mono-meta text-[11px] tracking-[0.2em] font-semibold hover:bg-white transition-colors"
              >
                REQUEST A QUOTE →
              </button>
              <a
                href="https://wa.me/2349031386928"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3 border border-white/30 text-white font-mono-meta text-[11px] tracking-[0.2em] flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8B49E]" />
                <span>WHATSAPP: +234 903 138 6928</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
