import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileRef.current) return;
    if (mobileMenuOpen) {
      gsap.fromTo(
        mobileRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out', overwrite: true }
      );
      if (mobileRef.current.children.length) {
        gsap.fromTo(
          mobileRef.current.children,
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.24, stagger: 0.03, ease: 'power2.out', delay: 0.06, overwrite: true }
        );
      }
    }
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F6F5F2]/90 backdrop-blur-md border-b border-[#0F1E2D]/10 py-3 shadow-[0_4px_24px_rgba(15,30,45,0.06)]'
          : 'bg-[#F6F5F2]/80 backdrop-blur-md py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-360 mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
        <Link
          id="nav-brand-logo"
          to="/"
          onClick={closeMobileMenu}
          className="flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5CFF] focus-visible:ring-offset-2 rounded-sm"
        >
          <span className="font-sans text-[22px] font-extrabold tracking-[0.08em] text-[#0F1E2D] uppercase leading-none">
            OOH JAY
          </span>
          <span className="text-[10px] font-semibold tracking-[0.14em] text-[#5B6B7A] mt-1 uppercase">
            Plumbing for homes & businesses · Nigeria & beyond
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {[
            ['Services', '/services'],
            ['Gallery', '/work'],
            ['Process', '/process'],
            ['Contact', '/contact'],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-[13px] font-medium tracking-[-0.01em] transition-colors duration-150 ${isActive ? 'text-[#0F1E2D]' : 'text-[#5B6B7A] hover:text-[#0F1E2D]'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            id="nav-quote-btn"
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#1A5CFF] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-[#1448C6] active:bg-[#123AA3] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5CFF] focus-visible:ring-offset-2"
          >
            <span>Request a quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0F1E2D] hover:text-[#1A5CFF] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5CFF] rounded-full cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.7]" /> : <Menu className="w-6 h-6 stroke-[1.7]" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="nav-mobile-menu"
          ref={mobileRef}
          className="md:hidden bg-[#F6F5F2] border-t border-[#0F1E2D]/10 px-6 py-6 shadow-lg"
        >
          <div className="flex flex-col">
            {[
              ['Services', '/services'],
              ['Gallery', '/work'],
              ['Process', '/process'],
              ['Contact', '/contact'],
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                onClick={closeMobileMenu}
                className="py-3 text-[15px] font-medium text-[#2D3A4A] hover:text-[#0F1E2D] transition-colors border-b border-[#0F1E2D]/5 last:border-0"
              >
                {label}
              </Link>
            ))}

            <div className="pt-5 mt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenQuote();
                }}
                className="w-full rounded-full py-3.5 bg-[#1A5CFF] text-white text-[14px] font-semibold hover:bg-[#1448C6] transition-colors cursor-pointer"
              >
                Request a quote →
              </button>
              <a
                href="https://wa.me/2349031386928"
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full py-3.5 border border-[#0F1E2D]/15 text-[#0F1E2D] text-[13px] font-medium text-center hover:border-[#0F1E2D]/30 hover:bg-white transition-colors"
              >
                WhatsApp: +234 903 138 6928
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
