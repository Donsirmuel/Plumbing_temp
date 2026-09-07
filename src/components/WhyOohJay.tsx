import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Gauge, Wrench, Droplets } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const WhyOohJay: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: 'power2.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-oohjay-section"
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 px-6 sm:px-10 md:px-16 border-y border-[#0F1E2D]/8"
    >
      <div className="max-w-360 mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#0F1E2D]/10">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1A5CFF] uppercase">Practical standards</p>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-[-0.04em] text-[#0F1E2D] mt-2">
              Why clients choose OOH JAY
            </h2>
          </div>
          <p className="text-sm text-[#5B6B7A] leading-6 max-w-md">
            Plumbing problems become expensive when work is rushed or hidden before testing. We install carefully, coordinate clearly, and add construction support only when the project needs it.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-[#F6F5F2] p-7 rounded-2xl border border-[#0F1E2D]/5 flex flex-col gap-4 card-hover">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.12em] text-[#1A5CFF] uppercase">01 · Precision</span>
              <Gauge className="w-5 h-5 text-[#0F1E2D]/70" />
            </div>
            <h3 className="font-sans text-lg font-bold tracking-[-0.02em] text-[#0F1E2D]">Pressure-tested work</h3>
            <p className="text-sm text-[#5B6B7A] leading-6">
              Every concealed line and joint is tested before walls and floors are closed — so leaks don’t hide.
            </p>
          </div>

          <div className="bg-[#F6F5F2] p-7 rounded-2xl border border-[#0F1E2D]/5 flex flex-col gap-4 card-hover">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.12em] text-[#1A5CFF] uppercase">02 · Reliability</span>
              <Droplets className="w-5 h-5 text-[#0F1E2D]/70" />
            </div>
            <h3 className="font-sans text-lg font-bold tracking-[-0.02em] text-[#0F1E2D]">Steady pressure & flow</h3>
            <p className="text-sm text-[#5B6B7A] leading-6">
              We balance pipe sizing and pumps so pressure stays consistent at every outlet, with quiet drainage.
            </p>
          </div>

          <div className="bg-[#F6F5F2] p-7 rounded-2xl border border-[#0F1E2D]/5 flex flex-col gap-4 card-hover">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.12em] text-[#1A5CFF] uppercase">03 · Materials</span>
              <Wrench className="w-5 h-5 text-[#0F1E2D]/70" />
            </div>
            <h3 className="font-sans text-lg font-bold tracking-[-0.02em] text-[#0F1E2D]">Built to last</h3>
            <p className="text-sm text-[#5B6B7A] leading-6">
              Copper, PPR/PEX and filtration chosen for local water chemistry — durable, not decorative.
            </p>
          </div>

          <div className="bg-[#F6F5F2] p-7 rounded-2xl border border-[#0F1E2D]/5 flex flex-col gap-4 card-hover">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.12em] text-[#1A5CFF] uppercase">04 · Coordination</span>
              <ShieldCheck className="w-5 h-5 text-[#0F1E2D]/70" />
            </div>
            <h3 className="font-sans text-lg font-bold tracking-[-0.02em] text-[#0F1E2D]">One coordinated team</h3>
            <p className="text-sm text-[#5B6B7A] leading-6">
              When construction is needed, plumbers and builders plan together from the drawings — fewer surprises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="bg-[#0F1E2D] rounded-2xl p-5 text-white">
            <div className="text-xs font-semibold tracking-[0.12em] text-white/60 uppercase">Testing</div>
            <div className="font-sans text-lg font-bold mt-1">16-bar hold</div>
            <p className="text-xs text-white/60 mt-1">Before walls are closed</p>
          </div>
          <div className="bg-[#0F1E2D] rounded-2xl p-5 text-white">
            <div className="text-xs font-semibold tracking-[0.12em] text-white/60 uppercase">Materials</div>
            <div className="font-sans text-lg font-bold mt-1">Certified piping</div>
            <p className="text-xs text-white/60 mt-1">Copper, PPR & PEX</p>
          </div>
          <div className="bg-[#0F1E2D] rounded-2xl p-5 text-white">
            <div className="text-xs font-semibold tracking-[0.12em] text-white/60 uppercase">Team</div>
            <div className="font-sans text-lg font-bold mt-1">In-house</div>
            <p className="text-xs text-white/60 mt-1">Plumbers + builders together</p>
          </div>
          <div className="bg-[#0F1E2D] rounded-2xl p-5 text-white">
            <div className="text-xs font-semibold tracking-[0.12em] text-white/60 uppercase">Reach</div>
            <div className="font-sans text-lg font-bold mt-1">Nigeria & beyond</div>
            <p className="text-xs text-white/60 mt-1">Homes & businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
};
