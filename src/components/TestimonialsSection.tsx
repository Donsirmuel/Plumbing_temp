import React, { useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // reduced-motion commented out — always animate
    // if (prefersReduced) return;
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F6F5F2] py-16 sm:py-20 px-6 sm:px-10 md:px-16 border-t border-[#0F1E2D]/8">
      <div className="max-w-360 mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#0F1E2D]/10">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1A5CFF] uppercase">Trust</p>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#0F1E2D] mt-2">
              Trusted by partners in Nigeria & beyond
            </h2>
          </div>
          <p className="text-sm text-[#5B6B7A] leading-6 max-w-md">
            Real words from architects, developers and homeowners who rely on our work.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-[#0F1E2D]/8 hover:border-[#0F1E2D]/15 hover:shadow-[0_8px_24px_rgba(15,30,45,0.08)] transition-all duration-200 flex flex-col justify-between gap-6 card-hover"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-[#1A5CFF]" />
                <p className="text-[15px] text-[#0F1E2D] leading-7">“{t.quote}”</p>
              </div>

              <div className="pt-5 border-t border-[#0F1E2D]/8 space-y-1">
                <div className="text-sm font-semibold text-[#0F1E2D]">{t.author}</div>
                <div className="text-xs text-[#5B6B7A]">
                  {t.role} · {t.organization}
                </div>
                <div className="text-xs font-medium text-[#1A5CFF]">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
