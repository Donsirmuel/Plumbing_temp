import React from 'react';
import { ShieldCheck, Gauge, CheckCircle2, Wrench, Building2, Droplets } from 'lucide-react';

export const WhyOohJay: React.FC = () => {
  return (
    <section
      id="why-oohjay-section"
      className="bg-[#EAE7E1]/50 py-24 sm:py-28 px-6 sm:px-10 md:px-16 border-y border-[rgba(28,29,31,0.08)]"
    >
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(28,29,31,0.1)] pb-8">
          <div>
            <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono-meta tracking-[0.25em] text-[#706B65] uppercase">
              <span>PRACTICAL STANDARDS</span>
              <span className="w-6 h-[1px] bg-[#706B65]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1D1F] font-normal tracking-[-0.01em] mt-1">
              Why Discerning Clients Choose Ooh Jay
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#706B65] font-light max-w-md leading-relaxed">
            Plumbing and construction problems usually happen when trades work in silos. We bring precision
            plumbing and solid construction under one disciplined, coordinated team.
          </p>
        </div>

        {/* 4 Crisp Practical Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 border border-[rgba(28,29,31,0.08)] hover:border-[#1C1D1F] transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-meta text-[10px] text-[#A38B6C] tracking-[0.2em]">01 / PRECISION</span>
                <Gauge className="w-5 h-5 text-[#1C1D1F] stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1D1F] leading-tight font-normal">
                Systematic Pressure Testing
              </h3>
              <p className="text-xs sm:text-sm text-[#706B65] font-light leading-relaxed">
                Every concealed water line, manifold joint, and drainage run is pressure-tested before walls and floors are sealed, preventing hidden leaks.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(28,29,31,0.08)] text-[9.5px] font-mono-meta text-[#706B65] tracking-[0.16em] uppercase">
              PRESSURE VERIFICATION
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 border border-[rgba(28,29,31,0.08)] hover:border-[#1C1D1F] transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-meta text-[10px] text-[#A38B6C] tracking-[0.2em]">02 / RELIABILITY</span>
                <Droplets className="w-5 h-5 text-[#1C1D1F] stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1D1F] leading-tight font-normal">
                Steady Pressure &amp; Clean Flow
              </h3>
              <p className="text-xs sm:text-sm text-[#706B65] font-light leading-relaxed">
                We balance pipe sizing and booster pumps so water pressure remains consistent across all outlets simultaneously, with smooth, silent drainage.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(28,29,31,0.08)] text-[9.5px] font-mono-meta text-[#706B65] tracking-[0.16em] uppercase">
              BALANCED WATER FLOW
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 border border-[rgba(28,29,31,0.08)] hover:border-[#1C1D1F] transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-meta text-[10px] text-[#A38B6C] tracking-[0.2em]">03 / TECHNICAL KNOWLEDGE</span>
                <Wrench className="w-5 h-5 text-[#1C1D1F] stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1D1F] leading-tight font-normal">
                Quality Materials &amp; Filtration
              </h3>
              <p className="text-xs sm:text-sm text-[#706B65] font-light leading-relaxed">
                From hard-drawn copper and multilayer PPR to whole-house water filtration suited to local borehole chemistry, we use materials built to last.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(28,29,31,0.08)] text-[9.5px] font-mono-meta text-[#706B65] tracking-[0.16em] uppercase">
              DURABLE PIPEWORK
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 border border-[rgba(28,29,31,0.08)] hover:border-[#1C1D1F] transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-meta text-[10px] text-[#A38B6C] tracking-[0.2em]">04 / COORDINATION</span>
                <ShieldCheck className="w-5 h-5 text-[#1C1D1F] stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1D1F] leading-tight font-normal">
                Unified Plumbing &amp; Building
              </h3>
              <p className="text-xs sm:text-sm text-[#706B65] font-light leading-relaxed">
                Plumbers and builders collaborate from day one. Conduits and sleeves are cast directly into structural pours, avoiding damaging wall hacking.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(28,29,31,0.08)] text-[9.5px] font-mono-meta text-[#706B65] tracking-[0.16em] uppercase">
              DIRECT TEAM INTEGRATION
            </div>
          </div>
        </div>

        {/* Refined Engineering Standards Strip (Clean & Non-Intrusive) */}
        <div className="border border-[rgba(28,29,31,0.12)] bg-white p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left">
          <div className="space-y-1">
            <span className="font-mono-meta text-[10px] text-[#A38B6C] tracking-[0.2em] block uppercase">TESTING</span>
            <div className="font-serif text-xl sm:text-2xl text-[#1C1D1F] font-normal">Pressure Testing</div>
            <p className="text-xs text-[#706B65] font-light">Tested before enclosing walls</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono-meta text-[10px] text-[#A38B6C] tracking-[0.2em] block uppercase">MATERIALS</span>
            <div className="font-serif text-xl sm:text-2xl text-[#1C1D1F] font-normal">Certified Piping</div>
            <p className="text-xs text-[#706B65] font-light">Brazed copper, PPR &amp; PEX</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono-meta text-[10px] text-[#A38B6C] tracking-[0.2em] block uppercase">COORDINATION</span>
            <div className="font-serif text-xl sm:text-2xl text-[#1C1D1F] font-normal">In-House Teams</div>
            <p className="text-xs text-[#706B65] font-light">Plumbers and builders in sync</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono-meta text-[10px] text-[#A38B6C] tracking-[0.2em] block uppercase">PRECISION</span>
            <div className="font-serif text-xl sm:text-2xl text-[#1C1D1F] font-normal">Calibrated Slopes</div>
            <p className="text-xs text-[#706B65] font-light">Accurate drainage falls &amp; plumb</p>
          </div>
        </div>
      </div>
    </section>
  );
};
