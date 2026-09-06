import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#EAE7E1]/50 py-24 sm:py-32 px-6 sm:px-10 md:px-16 border-t border-[rgba(28,29,31,0.08)]">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(28,29,31,0.1)]">
          <div>
            <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono-meta tracking-[0.25em] text-[#706B65] uppercase">
              <span>COMMERCIAL TRUST</span>
              <span className="w-6 h-[1px] bg-[#706B65]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1D1F] font-normal tracking-[-0.01em] mt-1">
              Endorsed by Architects & Developers
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#706B65] font-light max-w-md leading-relaxed">
            Real feedback from commercial partners who rely on our structural precision and MEP engineering
            in Lagos and across Nigeria.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 sm:p-10 border border-[rgba(28,29,31,0.08)] hover:border-[#1C1D1F] transition-all flex flex-col justify-between space-y-8 shadow-xs"
            >
              <div className="space-y-5">
                <Quote className="w-7 h-7 text-[#C8B49E] stroke-[1.2]" />
                <p className="font-serif text-lg sm:text-xl text-[#1C1D1F] font-normal leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[rgba(28,29,31,0.08)] space-y-1">
                <div className="font-sans text-sm font-semibold text-[#1C1D1F]">{t.author}</div>
                <div className="text-xs font-mono-meta text-[#706B65] tracking-[0.12em]">
                  {t.role} • {t.organization}
                </div>
                <div className="text-[10px] font-mono-meta text-[#A38B6C] tracking-[0.16em] uppercase">
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
