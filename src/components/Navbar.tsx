import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

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

  // scroll lock when mobile drawer open
  useEffect(() => {
    if (mobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [mobileMenuOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems: [string, string][] = [
    ['Services', '/services'],
    ['Gallery', '/work'],
    ['About', '/about'],
    ['Pricing', '/pricing'],
    ['Contact', '/contact'],
  ];

  return (
    <header
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Main nav */}
      <div
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'bg-[#fff8f3]/90 backdrop-blur-xl border-b border-[#dfc0b7]/20 shadow-[0_1px_8px_rgba(31,29,26,0.04)]'
            : 'bg-[#fff8f3]/90 backdrop-blur-xl border-b border-[#dfc0b7]/0 shadow-[0_1px_8px_rgba(31,29,26,0.04)]'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 h-20 flex items-center justify-between gap-3 min-w-0 max-w-full overflow-x-clip">
          <Link
            id="nav-brand-logo"
            to="/"
            onClick={closeMobileMenu}
            className="flex items-baseline gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 rounded-sm shrink-0 min-w-0"
          >
            <span
              className="font-['Newsreader',serif] text-[22px] md:text-[24px] font-medium tracking-tight text-[#1d1b18] leading-none whitespace-nowrap"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              OOH JAY
            </span>
            <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] whitespace-nowrap max-[340px]:hidden">
              Plumbing
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2 xl:gap-3 min-w-0" aria-label="Main Navigation">
            {navItems.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `text-[14px] font-medium tracking-[-0.01em] transition-all duration-200 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 ${isActive ? 'bg-[#a43716] text-white font-semibold shadow-sm' : 'text-[#58423c] hover:text-[#1d1b18] hover:bg-[#f3ede7]'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 min-w-0 shrink-0">
            <button
              id="nav-quote-btn"
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-[#a43716] text-white text-[13px] font-semibold tracking-[0.02em] rounded-full hover:bg-[#c54f2c] active:scale-[0.98] transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 shadow-sm whitespace-nowrap shrink-0 max-w-full"
            >
              Book a Plumber
            </button>
            {/* Icon-only fallback at 390–639 to avoid truncation — hidden at <360 and >=640 */}
            <button
              onClick={onOpenQuote}
              aria-label="Book a Plumber"
              className="inline-flex sm:hidden items-center justify-center w-10 h-10 rounded-full bg-[#a43716] text-white hover:bg-[#c54f2c] active:scale-[0.98] transition-colors shrink-0 max-[360px]:hidden"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">plumbing</span>
            </button>

            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 text-[#1d1b18] hover:text-[#a43716] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] rounded-full cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.7]" /> : <Menu className="w-6 h-6 stroke-[1.7]" />}
            </button>
          </div>
        </div>
      </div>

      {/* overlay — fades, pointer-events toggled — outside backdrop-blur wrapper so fixed is relative to viewport, not the blurred container */}
      <button
        aria-label="Close navigation menu"
        aria-hidden={!mobileMenuOpen}
        tabIndex={mobileMenuOpen ? 0 : -1}
        onClick={closeMobileMenu}
        className={`md:hidden fixed left-0 right-0 bottom-0 top-20 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      <div
        id="nav-mobile-menu"
        ref={mobileRef}
        aria-hidden={!mobileMenuOpen}
        className={`md:hidden fixed left-0 right-0 top-20 bottom-0 bg-[#fff8f3] border-t border-[#dfc0b7]/20 px-5 sm:px-6 py-6 shadow-xl z-50 overflow-y-auto max-h-[calc(100dvh-80px)] transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-1">
              {navItems.map(([label, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `min-h-11 py-3 px-4 rounded-full text-[15px] font-medium transition-all duration-200 flex items-center ${isActive ? 'bg-[#a43716] text-white font-semibold shadow-sm' : 'text-[#58423c] hover:text-[#1d1b18] hover:bg-[#f3ede7]'}`
                  }
                >
                  {label}
                </NavLink>
              ))}

              <div className="pt-5 mt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    closeMobileMenu();
                    onOpenQuote();
                  }}
                  className="w-full rounded-full py-3.5 bg-[#a43716] text-white text-[14px] font-semibold hover:bg-[#c54f2c] transition-colors cursor-pointer"
                >
                  Book a Plumber
                </button>
                <a
                  href="tel:+2349031386928"
                  className="w-full rounded-full py-3.5 border border-[#dfc0b7]/40 text-[#1d1b18] text-[13px] font-medium text-center hover:border-[#dfc0b7] hover:bg-white transition-colors"
                >
                  Emergency? Call +234 903 138 6928
                </a>
                <a
                  href="https://wa.me/2349031386928"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full py-3 border border-transparent bg-[#516257]/10 text-[#516257] text-[13px] font-medium text-center hover:bg-[#516257]/15 transition-colors"
                >
                  WhatsApp: +234 903 138 6928
                </a>
              </div>
            </div>
        </div>
    </header>
  );
};
