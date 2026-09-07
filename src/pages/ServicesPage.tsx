import React from 'react';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { WhyOohJay } from '../components/WhyOohJay';
import { CtaSection } from '../components/CtaSection';

interface ServicesPageProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => (
  <>
    <section className="bg-[#EFF2F7] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#1A5CFF] uppercase">What we do</p>
        <h1 className="max-w-3xl font-sans text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] text-[#0F1E2D] sm:text-6xl">
          Plumbing that keeps homes and businesses moving.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6B7A] sm:text-lg">
          From everyday repairs to complete water systems — we plan, install, maintain and support the plumbing people depend on in Nigeria & beyond.
        </p>
      </div>
    </section>
    <CapabilitiesSection onOpenQuote={onOpenQuote} />
    <WhyOohJay />
    <CtaSection onOpenQuote={() => onOpenQuote()} />
  </>
);
