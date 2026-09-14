import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // reduced-motion commented out — always animate
    // if (prefersReduced) return;
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 px-6 sm:px-10 md:px-16 border-y border-[#0F1E2D]/8">
      <div className="max-w-360 mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#0F1E2D]/10">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1A5CFF] uppercase">From rough-in to handover</p>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#0F1E2D] mt-2">
              What is built and what runs through it
            </h2>
          </div>
          <p className="text-sm text-[#5B6B7A] leading-6 max-w-md">
            Drag to compare — the pipework behind the walls and the finished space you live in.
          </p>
        </div>

        <div className="space-y-3">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onTouchMove={handleTouchMove}
            className="relative overflow-hidden bg-[#0F1E2D] aspect-[16/10] sm:aspect-[21/10] w-full select-none cursor-ew-resize rounded-2xl border border-[#0F1E2D]/10"
          >
            <img
              src="/bathroom-ikoyi.jfif"
              alt="Master ensuite bathroom as finished — basin and shower with watertight finish, Abeokuta"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              loading="lazy"
            />

            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="/plumbing-installation.jfif"
                alt="Pipework behind the walls — plumber laying neat supply runs before close-up"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0F1E2D]/10" />
            </div>

            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#0F1E2D] flex items-center justify-center shadow-lg border border-[#0F1E2D]/10">
                <ChevronsLeftRight className="w-4 h-4" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 z-10 rounded-full bg-[#0F1E2D]/90 text-white px-3 py-1 text-xs font-medium backdrop-blur pointer-events-none">
              Pipework
            </div>
            <div className="absolute bottom-4 right-4 z-10 rounded-full bg-white/95 text-[#0F1E2D] px-3 py-1 text-xs font-medium shadow pointer-events-none">
              Finished space
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-[#5B6B7A]">
            <span>Drag horizontally</span>
            <span className="text-[#0F1E2D] font-medium">Infrastructure · Result</span>
          </div>
        </div>
      </div>
    </section>
  );
};
