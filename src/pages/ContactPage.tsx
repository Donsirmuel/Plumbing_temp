import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactPageProps {
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuote }) => (
  <section className="min-h-[calc(100svh-5rem)] bg-[#EFF2F7] px-6 pb-24 pt-28 sm:px-10 lg:px-16">
    <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div>
        <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#1A5CFF] uppercase">Start a conversation</p>
        <h1 className="max-w-3xl font-sans text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] text-[#0F1E2D] sm:text-6xl">
          Tell us what needs to work better.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#5B6B7A] sm:text-lg">
          Tell us about the plumbing work, repair, maintenance, or construction support you need. We will help you understand the next step — in Nigeria & beyond.
        </p>
        <button
          onClick={onOpenQuote}
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-[#1A5CFF] px-7 text-sm font-semibold text-white hover:bg-[#1448C6] transition-colors duration-150 cursor-pointer"
        >
          Request a quote
        </button>
      </div>
      <div className="space-y-5 border-t border-[#0F1E2D]/10 pt-6 text-[#0F1E2D]">
        <p className="text-xs font-semibold tracking-[0.12em] text-[#5B6B7A] uppercase">Head office & contact</p>
        <p className="flex gap-3 text-sm leading-6">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#1A5CFF]" /> Victoria Island &amp; Ikoyi Corridor, Lagos, Nigeria — serving Nigeria & beyond
        </p>
        <a className="flex gap-3 text-sm leading-6 hover:text-[#1A5CFF] transition-colors duration-150" href="tel:+2349031386928">
          <Phone className="mt-1 h-4 w-4 shrink-0 text-[#1A5CFF]" /> +234 903 138 6928
        </a>
        <a className="flex gap-3 text-sm leading-6 hover:text-[#1A5CFF] transition-colors duration-150" href="mailto:inquiries@oohjay.com">
          <Mail className="mt-1 h-4 w-4 shrink-0 text-[#1A5CFF]" /> inquiries@oohjay.com
        </a>
      </div>
    </div>
  </section>
);
