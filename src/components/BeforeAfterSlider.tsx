import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import rawPipesImg from '../assets/images/hero_copper_plumbing_1788680078325.jpg';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

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
    if (isDragging.current) {
      handleMove(e.clientX);
    }
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
    <section className="bg-[#EAE7E1]/40 py-24 sm:py-32 px-6 sm:px-10 md:px-16 border-t border-[rgba(28,29,31,0.08)]">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(28,29,31,0.1)]">
          <div>
            <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono-meta tracking-[0.25em] text-[#706B65] uppercase">
              <span>SYSTEMS &amp; FINISH</span>
              <span className="w-6 h-[1px] bg-[#706B65]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1D1F] font-normal tracking-[-0.01em] mt-1">
              From Pipework Rough-In to Handover
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#706B65] font-light max-w-md leading-relaxed">
            Drag the tactile slider horizontally to inspect our work: what is built, the plumbing running through it, and the commissioned finished space.
          </p>
        </div>

        {/* Comparison Stage */}
        <div className="space-y-3">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onTouchMove={handleTouchMove}
            className="relative overflow-hidden bg-[#1C1D1F] aspect-[16/10] sm:aspect-[21/10] w-full select-none cursor-ew-resize border border-[rgba(28,29,31,0.15)] shadow-lg"
          >
            {/* Base Layer: Finished Sanitaryware & Wet Area */}
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2200&q=85"
              alt="Completed commissioned luxury bathroom with precision sanitaryware"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
            />

            {/* Top Layer: Clipped Raw Pipework & Conduits Infrastructure */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={rawPipesImg}
                alt="Active rough-in copper pipework, valves and mechanical water infrastructure"
                className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[105%]"
                loading="lazy"
              />
            </div>

            {/* Hairline Divider & Minimal Drag Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-xl z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#1C1D1F] text-white flex items-center justify-center shadow-lg border border-white/50">
                <ChevronsLeftRight className="w-4 h-4 stroke-[1.5]" />
              </div>
            </div>

            {/* Clean, Non-Intrusive Indicators */}
            <div className="absolute bottom-5 left-5 z-10 bg-[#1C1D1F]/90 text-white px-3 py-1.5 text-[9.5px] font-mono-meta tracking-[0.2em] pointer-events-none shadow backdrop-blur-xs">
              RAW PIPEWORK &amp; INFRASTRUCTURE
            </div>
            <div className="absolute bottom-5 right-5 z-10 bg-white/95 text-[#1C1D1F] px-3 py-1.5 text-[9.5px] font-mono-meta tracking-[0.2em] pointer-events-none shadow backdrop-blur-xs">
              COMPLETED COMMISSIONED SPACE
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono-meta text-[#706B65] pt-1">
            <span>DRAG HORIZONTALLY TO REVEAL TRANSFORMATION</span>
            <span className="text-[#1C1D1F]">WHAT IS BUILT • WHAT RUNS THROUGH IT • THE RESULT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
