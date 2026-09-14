import React from 'react';
import { ProcessSection } from '../components/ProcessSection';
import { CtaSection } from '../components/CtaSection';

interface ProcessPageProps {
  onOpenQuote: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenQuote }) => (
  <>
    <section className="bg-[#EFF2F7] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#1A5CFF] uppercase">How we work</p>
        <h1 className="max-w-3xl font-['Fraunces',serif] text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#0F1E2D] sm:text-6xl">
          Clear work, from first conversation to handover.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6B7A] sm:text-lg">
          You should always know what happens next, what is included, and who is responsible for the work.
        </p>
      </div>
    </section>
    <ProcessSection onOpenQuote={onOpenQuote} />
    <CtaSection onOpenQuote={onOpenQuote} />
  </>
);
