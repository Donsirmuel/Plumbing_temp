import React from 'react';
import { ProcessSection } from '../components/ProcessSection';
import { CtaSection } from '../components/CtaSection';

interface ProcessPageProps {
  onOpenQuote: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenQuote }) => (
  <>
    <section className="bg-[#f9f2ed] px-5 pb-14 pt-24 sm:px-8 sm:pb-16 sm:pt-28 md:px-12 lg:px-16 border-b border-[#dfc0b7]/20">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.14em] text-[#7b542b] uppercase">How we work</p>
        <h1 className="max-w-3xl font-['Fraunces',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#1d1b18]">
          Clear work, from first conversation to handover.
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] sm:text-base md:text-lg leading-relaxed text-[#58423c]">
          You should always know what happens next, what is included, and who is responsible for the work.
        </p>
      </div>
    </section>
    <ProcessSection onOpenQuote={onOpenQuote} />
    <CtaSection onOpenQuote={onOpenQuote} />
  </>
);
