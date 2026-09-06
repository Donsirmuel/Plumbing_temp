import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroCopperBg from '../assets/images/hero_copper_plumbing_1788680078325.jpg';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onExploreClick: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenQuote }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const bgVignetteRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const telemetryLeftRef = useRef<HTMLDivElement>(null);
  const telemetryRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP context ensures clean scoping and garbage collection on unmount
    const ctx = gsap.context(() => {
      // 1. Storytelling Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Image initial subtle zoom breath
      tl.fromTo(
        bgImageRef.current,
        { scale: 1.15, filter: 'brightness(0.65) contrast(115%)' },
        { scale: 1.05, filter: 'brightness(0.78) contrast(110%)', duration: 2.2, ease: 'power2.out' },
        0
      );

      // Discipline Tag Tracking expansion
      tl.fromTo(
        tagRef.current,
        { opacity: 0, letterSpacing: '0.12em', y: 15 },
        { opacity: 1, letterSpacing: '0.28em', y: 0, duration: 1.0, ease: 'power3.out' },
        0.3
      );

      // Headline Line 1 Split reveal
      tl.fromTo(
        line1Ref.current,
        { yPercent: 110, rotateZ: 1 },
        { yPercent: 0, rotateZ: 0, duration: 1.15, ease: 'power4.out' },
        0.5
      );

      // Headline Line 2 Split reveal
      tl.fromTo(
        line2Ref.current,
        { yPercent: 110, rotateZ: -1 },
        { yPercent: 0, rotateZ: 0, duration: 1.15, ease: 'power4.out' },
        0.65
      );

      // Precision divider rule scale from center
      tl.fromTo(
        dividerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.85, ease: 'power3.inOut' },
        0.85
      );

      // Narrative subtitle
      tl.fromTo(
        narrativeRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.95, ease: 'power3.out' },
        1.0
      );

      // Dual CTA Buttons
      if (ctaGroupRef.current) {
        tl.fromTo(
          ctaGroupRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out' },
          1.15
        );
      }

      // Telemetry HUD markers
      tl.fromTo(
        [telemetryLeftRef.current, telemetryRightRef.current],
        { opacity: 0, y: 10 },
        { opacity: 0.75, y: 0, duration: 1.0, ease: 'power2.out' },
        1.3
      );

      // Scroll Indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 0.7, y: 0, duration: 0.9, ease: 'power2.out' },
        1.4
      );

      // 2. Scroll-Driven Multi-Layer Depth Parallax (ScrollTrigger)
      if (heroRef.current) {
        // Background image expands and drifts
        gsap.to(bgImageRef.current, {
          yPercent: 22,
          scale: 1.2,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        });

        // Vignette darkens to provide a seamless transition to the dark body sections
        gsap.to(bgVignetteRef.current, {
          backgroundColor: 'rgba(0, 0, 0, 0.88)',
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        });

        // Center storytelling content lifts upward and fades gracefully
        gsap.to(contentRef.current, {
          y: -110,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '70% top',
            scrub: 0.5,
          },
        });

        // Telemetry badges drift sideways creating 2.5D camera perspective
        gsap.to(telemetryLeftRef.current, {
          x: -40,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '50% top',
            scrub: 0.5,
          },
        });

        gsap.to(telemetryRightRef.current, {
          x: 40,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '50% top',
            scrub: 0.5,
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
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-center px-6 sm:px-10 overflow-hidden pt-28 sm:pt-32 pb-10 bg-[#1C1D1F]"
    >
      {/* Background Cinematic Plumbing & Precision Craftsmanship Photography with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={bgImageRef}
          src={heroCopperBg}
          alt="Professional precision copper pipework installation, manifold valving and mechanical water infrastructure"
          className="w-full h-full object-cover object-center will-change-transform"
          loading="eager"
        />
        {/* Dynamic Architectural Vignette Overlay */}
        <div
          ref={bgVignetteRef}
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 transition-colors"
        />
      </div>

      {/* Top Drafting / Telemetry Accents (Architectural Storytelling) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pointer-events-none pt-4 hidden md:flex">
        <div
          ref={telemetryLeftRef}
          className="flex items-center space-x-2 text-white/70 font-mono-meta text-[10px] tracking-[0.22em] uppercase"
        >
          <span className="w-1.5 h-1.5 bg-[#C8B49E] rounded-full animate-pulse" />
          <span>LAT 6.4549° N, LONG 3.4246° E // LAGOS STATE</span>
        </div>

        <div
          ref={telemetryRightRef}
          className="flex items-center space-x-2 text-white/70 font-mono-meta text-[10px] tracking-[0.22em] uppercase"
        >
          <span>16-BAR HYDROSTATIC CERTIFIED • DUAL-CIRCUIT BALANCED</span>
          <span className="text-[#C8B49E]">⌖</span>
        </div>
      </div>

      {/* Center Golden-Ratio Storytelling Content Block */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-5 sm:space-y-6 my-auto pt-6 sm:pt-0"
      >
        {/* Discipline Subhead Tag */}
        <div className="inline-flex items-center space-x-3 text-white/90">
          <span
            ref={tagRef}
            className="font-mono-meta text-[10px] sm:text-[11.5px] uppercase px-3.5 py-1 bg-black/40 backdrop-blur-xs border border-white/20 shadow-md"
          >
            PLUMBING &amp; CONSTRUCTION
          </span>
        </div>

        {/* Dominant Serif Headline with Smooth Split-Line Overflow Masking */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] text-white font-normal uppercase tracking-[0.02em] leading-[1.04] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          <span className="block overflow-hidden py-1">
            <span ref={line1Ref} className="block will-change-transform">
              Built With Precision.
            </span>
          </span>
          <span className="block overflow-hidden py-1">
            <span ref={line2Ref} className="block will-change-transform text-[#F3EFEA]">
              Made To Last.
            </span>
          </span>
        </h1>

        {/* Precision Tan Horizontal Divider Line */}
        <div
          ref={dividerRef}
          className="w-14 sm:w-20 h-[1.5px] bg-[#C8B49E] my-1 will-change-transform shadow-xs"
        />

        {/* Narrative Subtitle */}
        <p
          ref={narrativeRef}
          className="text-white/90 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] px-4"
        >
          Plumbing &amp; construction, carried out with care from what lies beneath the surface to the
          final finish.
        </p>

        {/* Dual CTA Buttons side by side */}
        <div
          ref={ctaGroupRef}
          className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md"
        >
          {/* Tan filled button */}
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#C8B49E] hover:bg-[#b8a28a] text-[#1C1D1F] font-mono-meta text-[11px] sm:text-[12px] tracking-[0.2em] font-semibold px-8 py-3.5 transition-all duration-200 shadow-xl cursor-pointer group"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Outlined transparent button */}
          <button
            id="hero-quote-btn"
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-white/60 hover:border-white hover:bg-white/15 text-white font-mono-meta text-[11px] sm:text-[12px] tracking-[0.2em] px-8 py-3.5 transition-all duration-200 backdrop-blur-xs cursor-pointer shadow-md"
          >
            <span>REQUEST A QUOTE</span>
          </button>
        </div>
      </div>

      {/* Bottom Scroll Discovery Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-10 flex flex-col items-center space-y-2 mt-8 sm:mt-12 text-white/70"
      >
        <span className="font-mono-meta text-[9px] sm:text-[10px] tracking-[0.28em] uppercase">
          SCROLL TO DISCOVER
        </span>
        <button
          onClick={onExploreClick}
          className="p-1 hover:text-white transition-colors cursor-pointer animate-bounce"
          aria-label="Scroll down to projects"
        >
          <ArrowDown className="w-4 h-4 stroke-[1.5]" />
        </button>
      </div>
    </section>
  );
};
