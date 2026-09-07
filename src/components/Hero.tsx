import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroCopperBg from '../assets/images/hero_copper_plumbing_1788680078325.jpg';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onExploreClick: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenQuote }) => {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) return;

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.fromTo(frameRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45 })
        .fromTo(imageRef.current, { scale: 1.02 }, { scale: 1, duration: 0.9, ease: 'power2.out' }, '<')
        .fromTo(headlineRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.45')
        .fromTo(subRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 }, '-=0.28')
        .fromTo(ctaRef.current, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3 }, '-=0.24');

      if (heroRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className="relative bg-[#F6F5F2] px-4 pb-4 pt-20 sm:px-6 sm:pb-6 sm:pt-24 lg:px-8"
    >
      <div
        ref={frameRef}
        className="relative mx-auto max-w-[1480px] overflow-hidden rounded-[2rem] bg-[#0F1E2D] shadow-[0_20px_60px_rgba(15,30,45,0.16)]"
      >
        {/* Image with light, not crushing, overlay — keeps pipes legible */}
        <img
          ref={imageRef}
          src={heroCopperBg}
          alt="Copper plumbing manifold and pressure valves installed for a home and business water system"
          className="absolute inset-0 h-full w-full object-cover object-center will-change-transform"
          loading="eager"
        />
        {/* Softer gradient — confident, not muddy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2A]/85 via-[#0B1A2A]/40 to-[#0B1A2A]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2A]/55 via-transparent to-transparent" />

        <div className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[72vh] flex flex-col justify-end px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.02em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7AA8FF]" />
              Plumbing for homes & businesses · Nigeria & beyond
            </p>

            <h1
              ref={headlineRef}
              className="font-sans text-[clamp(2rem,6.2vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-white"
            >
              Plumbing that
              <br />
              <span className="text-[#A9C4FF]">just works.</span>
            </h1>

            <p
              ref={subRef}
              className="mt-5 max-w-xl text-sm leading-6 text-white/80 sm:text-[15px] sm:leading-7"
            >
              From a leaking home line to a complete commercial water system — we install, repair and maintain plumbing you can rely on, with construction support when the project needs it.
            </p>

            <div ref={ctaRef} className="mt-7 flex flex-wrap gap-3">
              <button
                id="hero-quote-btn"
                onClick={onOpenQuote}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1A5CFF] px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1448C6] active:bg-[#123AA3] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1E2D]"
              >
                Request a quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white/10 px-6 text-sm font-medium text-white backdrop-blur transition-colors duration-150 hover:bg-white/15 border border-white/15 cursor-pointer"
              >
                View gallery
              </button>
            </div>

            <p className="mt-4 text-xs text-white/60">
              Residential & commercial · Tested before walls are closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
