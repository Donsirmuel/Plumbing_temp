import React, { useEffect, useRef, useState } from "react";
import { ReadMore } from "../components/ReadMore";

export interface PricingPageProps {
  onOpenQuote?: (serviceTitle?: string) => void;
}

type Faq = {
  q: string;
  a: string;
};

const FAQS: Faq[] = [
  {
    q: "Do you charge an inspection fee if I decide not to proceed?",
    a: "Quotations and estimates over WhatsApp are always free — send clear photos or a short video and we will talk you through what is likely wrong and what it should cost. If we need to travel for a physical check with moisture meters or opening an access panel, a small diagnostic visit fee applies. Approve the written quotation and we credit that fee in full toward the job.",
  },
  {
    q: "How do payment terms work for large bathroom overhauls?",
    a: "For multi-day bathroom or repiping jobs we use three simple milestones so you stay in control: 50% to mobilise and run the first-fix pipework, 30% after the pressure test and wall sealing, and the final 20% only when fixtures are set, water runs clean, and the space is left tidy. Labour and materials are always listed separately on the quotation.",
  },
  {
    q: "What happens if a leak develops after the job?",
    a: "Call or WhatsApp your project reference and we place you at the top of the board. If the joint, weld or seal is ours, we make it right at no extra charge — high-grade workmanship assured. Based from Abiola Way, Abeokuta with field teams in Lagos, we cover Abeokuta, Lagos and nationwide.",
  },
  {
    q: "Can I buy the plumbing materials and sanitary wares myself?",
    a: "Yes, many clients prefer to. We issue a precise bill of quantities — pipe grade, valve pressure ratings, drain diameters and finish models — so what you buy fits first time. Prefer us to procure? We buy at verified store prices and hand you the original receipts, no hidden mark-ups.",
  },
  {
    q: "How do you support clients managing renovations from overseas?",
    a: "Many of our larger sanitary jobs are for Nigerians in the diaspora. We share timestamped photos and videos at each stage and hold pipes under pressure on camera before walls are closed. Payments by straightforward bank transfer, with clear quotations before any spend.",
  },
];

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenQuote }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".reveal-entry");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleBook = (title?: string) => {
    if (onOpenQuote) onOpenQuote(title);
  };

  return (
    <div ref={rootRef} className="bg-[#fff8f3] text-[#1d1b18]">
      {/* Aura */}
      <div className="relative w-full max-w-full overflow-hidden min-w-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[min(800px,95vw)] h-[350px] max-w-full bg-gradient-to-b from-[#ffb5a0]/25 via-[#f9f2ed]/40 to-transparent blur-3xl -z-10"
        />

        {/* Hero */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 pt-8 pb-16 md:pt-14 md:pb-24 reveal-entry">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-[#7b542b]">
              <span className="w-6 h-px bg-[#dfc0b7]" aria-hidden="true"></span>Transparent Rates · No Surprises
            </span>
            <h1
              className="font-semibold tracking-[-0.03em] text-[#1d1b18] mt-6 mb-6 text-[38px] leading-[46px] md:text-[56px] md:leading-[64px]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Clear prices, written quotes, and <span className="text-[#a43716]">workmanship backing</span>.
            </h1>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-7 text-[#58423c] max-w-2xl">
              No surprise bills once the floor is opened up. Every project, from a new building installation to an emergency leak repair, begins with a written quotation. We separate labour from materials, so you review and approve the exact figures before work starts.
            </p>

            {/* Trust Ribbon */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[13px] font-semibold text-[#1d1b18]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f2ed] border border-[#dfc0b7]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a43716]" aria-hidden="true" />
                <span>Working across Nigeria since 2014</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f2ed] border border-[#dfc0b7]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#516257]" aria-hidden="true" />
                <span>Itemised quotes before work starts</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f2ed] border border-[#dfc0b7]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a43716]" aria-hidden="true" />
                <span>Workmanship backed on every joint</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Pricing Cards */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-24 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-entry">
          <div className="max-w-xl">
            <h2
              className="font-['Fraunces',serif] text-[#1d1b18] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.03em] font-semibold"
            >
              How we price our work
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-3">
              Every job comes with an itemised quotation. Labour is listed separately from pipes, valves, and
              sanitary fittings, so you know exactly where every naira goes. You can purchase materials yourself
              from our schedule, or have us supply them with original store receipts attached.
            </p>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-[#f3ede7] rounded-full text-[13px] font-semibold tracking-[0.04em] self-start md:self-auto border border-[#dfc0b7]/20">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-[#1d1b18] shadow-sm">Standard scope</span>
            <span className="px-3 py-1.5 text-[#58423c]">Abeokuta · Lagos · Nationwide</span>
          </div>
        </div>

        {/* Editorial pricing: middle card lifted/featured, outer cards quieter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start reveal-entry">
          {/* Tier 1 — compact, muted */}
          <div className="lg:col-span-4 lg:mt-6 flex flex-col justify-between bg-white rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group border border-[#dfc0b7]/20">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716] block mb-2">
                Repairs
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1d1b18] text-[22px] md:text-[24px] leading-8 font-bold tracking-[-0.04em] mb-3">
                Everyday fixes and leaks
              </h3>
              <ReadMore
                text="For the daily annoyances that waste water and damage ceilings: dripping taps, toilet cisterns that run non-stop, slow floor traps, and weeping flexible hoses under kitchen sinks."
                clampLines={2}
                className="mb-6"
              />
              <div className="py-4 my-6 bg-[#f9f2ed] rounded-xl px-5 flex flex-col border border-[#dfc0b7]/15">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c]">
                  How we bill
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] font-semibold leading-7 text-[#1d1b18] mt-1">
                  Fixed diagnostic and service fee
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#a43716] font-medium mt-0.5">
                  Parts invoiced at verified market cost
                </span>
              </div>
              <ul className="space-y-3 font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a43716] shrink-0 mt-2" aria-hidden="true" />
                  <span>Pinpoint leak tracing with pressure gauges and listening gear before cutting walls</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a43716] shrink-0 mt-2" aria-hidden="true" />
                  <span>Standard washers, thread tape, and O-rings included in labour</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a43716] shrink-0 mt-2" aria-hidden="true" />
                  <span>Original merchant slips provided for any replacement brassware or valves</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a43716] shrink-0 mt-2" aria-hidden="true" />
                  <span>Floors dried and workspace cleaned before the technician leaves</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => handleBook("Everyday fixes and leaks")}
              className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-[#f3ede7] text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] hover:bg-[#ede7e2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer"
            >
              Book a repair visit
            </button>
          </div>

          {/* Tier 2 — FEATURED: lifted, scaled, warm border */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#fffaf7] rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative border-2 border-[#a43716]/15 lg:-mt-4 lg:scale-[1.04] lg:shadow-[0_24px_48px_rgba(164,55,22,0.14)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#a43716] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase shadow-md whitespace-nowrap">
              Most requested · Pressure specialists
            </div>
            <div className="pt-3">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716] block mb-2">
                Water supply
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1d1b18] text-[24px] md:text-[26px] leading-8 font-bold tracking-[-0.04em] mb-3">
                Pump, tank and water pressure
              </h3>
              <ReadMore
                text="Steady water pressure on every floor. We set up booster and submersible borehole pumps, overhead tanks, automatic float switches, and whole-house filtration so taps flow strong without pump rattle."
                clampLines={2}
                className="mb-5"
              />
              {/* Photo thumbnail */}
              <div className="rounded-xl overflow-hidden mb-5 border border-[#dfc0b7]/20 bg-[#f3ede7]">
                <img
                  src="/pressure-pump-installs.webp"
                  alt="Booster pump installation with anti-vibration rubber mounts"
                  className="w-full h-36 object-cover"
                  loading="lazy"
                />
                <div className="px-3 py-2 flex items-center justify-between bg-white text-[11px] font-semibold">
                  <span className="tracking-[0.06em] uppercase text-[#7b542b]">Installed setup</span>
                  <span className="text-[#a43716]">Anti-vibration mount</span>
                </div>
              </div>
              <div className="py-4 mb-6 bg-[#f3ede7] rounded-xl px-5 flex flex-col border border-[#a43716]/10">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c]">
                  How we bill
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] font-semibold leading-7 text-[#1d1b18] mt-1">
                  Fixed-scope site proposal
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#a43716] font-medium mt-0.5">
                  Sized by pump power and pipe diameter
                </span>
              </div>
              <ul className="space-y-3 font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a43716] shrink-0 mt-2" aria-hidden="true" />
                  <span>Pressure switches calibrated to protect water heaters and avoid burst pipe joints</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a43716] shrink-0 mt-2" aria-hidden="true" />
                  <span>Heavy rubber vibration pads so pump motors do not vibrate through house walls</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a43716] shrink-0 mt-2" aria-hidden="true" />
                  <span>Full bypass pipe loop so you still get gravity water during maintenance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a43716] shrink-0 mt-2" aria-hidden="true" />
                  <span>Dedicated electrical isolator switch and safety earthing check on every motor</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => handleBook("Pump, tank and water pressure")}
              className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-[#a43716] text-white font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] hover:bg-[#c54f2c] shadow-md active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer"
            >
              Request a site assessment
            </button>
          </div>

          {/* Tier 3 — taller editorial, calm */}
          <div className="lg:col-span-4 lg:mt-6 flex flex-col justify-between bg-white rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group border border-[#dfc0b7]/20">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#516257] block mb-2">
                Installations
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1d1b18] text-[22px] md:text-[24px] leading-8 font-bold tracking-[-0.04em] mb-3">
                Bathrooms and repiping
              </h3>
              <ReadMore
                text="New bathroom fit-outs and full pipe replacements done once and done properly. We install concealed wall-hung frames, thermostatic shower valves, and multilayer PPR lines sloped to prevent blockages."
                clampLines={2}
                className="mb-6"
              />
              <div className="py-4 my-6 bg-[#f9f2ed] rounded-xl px-5 flex flex-col border border-[#dfc0b7]/15">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c]">
                  How we bill
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] font-semibold leading-7 text-[#1d1b18] mt-1">
                  Itemised room-by-room quote
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#516257] font-medium mt-0.5">
                  Milestone payments linked to completed stages
                </span>
              </div>
              <ul className="space-y-3 font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257] shrink-0 mt-2" aria-hidden="true" />
                  <span>Sustained hydrostatic pressure test on every concealed pipe run before any tiler lays mortar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257] shrink-0 mt-2" aria-hidden="true" />
                  <span>Laser-leveled pipe outlets so faucets and shower mixers align with tile grout lines</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257] shrink-0 mt-2" aria-hidden="true" />
                  <span>As-built plumbing sketch and pipe route photos handed over when the job finishes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257] shrink-0 mt-2" aria-hidden="true" />
                  <span>Full workmanship backing with clear point of contact if you ever need adjustments</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => handleBook("Bathrooms and repiping")}
              className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-[#f3ede7] text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] hover:bg-[#ede7e2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer"
            >
              Discuss an installation
            </button>
          </div>
        </div>
      </section>

      {/* High-Grade Workmanship — assurance without warranty documents */}
      <section className="w-full bg-[#32302d] text-[#f6f0ea] py-16 md:py-20 relative overflow-hidden reveal-entry">
        <div aria-hidden="true" className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#d4e7d8] mb-3 block">Workmanship you can depend on</span>
            <h2 className="font-['Fraunces',serif] text-[#f6f0ea] text-[28px] md:text-[36px] leading-[1.15] font-semibold tracking-[-0.03em] mb-4">
              Built to last and every joint checked.
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-7 text-[#e7e1dc]">
              We don&apos;t give you complex legal disclaimers. We provide straightforward workmanship backing: every joint, weld, and valve is tested under working pressure before handover, left clean, and documented with photos and video on site.
            </p>
          </div>
        </div>
      </section>

      {/* What we refuse to do — two-column list with red line-through motif, distinct from About principles */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-20 md:py-28 w-full reveal-entry">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-['Fraunces',serif] text-[#1d1b18] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.03em] font-semibold">
            What we refuse to do
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-3">
            Plumbing in Nigeria has earned its mistrust with rushed cover-ups and shifting bills. Here are four
            habits you will never see from OOH JAY.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#dfc0b7]/20 shadow-sm overflow-hidden divide-y divide-[#f3ede7]">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#f3ede7]">
            {/* 1 */}
            <div className="p-6 md:p-8 flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[#f9f2ed] border border-[#dfc0b7]/40 flex items-center justify-center text-[#a43716] text-[12px] font-bold" aria-hidden="true">
                01
              </span>
              <div className="min-w-0">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold leading-6 tracking-[-0.03em] text-[#1d1b18]">
                  <span className="line-through decoration-[#a43716] decoration-2 underline-offset-2">Charging fees just to view your photos</span>
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-2">
                  Some trades charge an inspection fee before they even look at your problem. Send us clear pictures or a short WhatsApp video clip. We will tell you the probable cause and give you a written price range at no charge.
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] uppercase text-[#516257]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257]" aria-hidden="true" />
                  Free photo and video assessments
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="p-6 md:p-8 flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[#f9f2ed] border border-[#dfc0b7]/40 flex items-center justify-center text-[#a43716] text-[12px] font-bold" aria-hidden="true">
                02
              </span>
              <div className="min-w-0">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold leading-6 tracking-[-0.03em] text-[#1d1b18]">
                  <span className="line-through decoration-[#a43716] decoration-2 underline-offset-2">Cheap imitation valves or thin PVC</span>
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-2">
                  Lightweight brass and thin unrated PVC burst when booster pumps kick in. We buy only pressure-rated fittings from reputable distributors, and we show you the merchant slips.
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] uppercase text-[#516257]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257]" aria-hidden="true" />
                  Only authentic, pressure-tested fittings
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#f3ede7]">
            {/* 3 */}
            <div className="p-6 md:p-8 flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[#f9f2ed] border border-[#dfc0b7]/40 flex items-center justify-center text-[#a43716] text-[12px] font-bold" aria-hidden="true">
                03
              </span>
              <div className="min-w-0">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold leading-6 tracking-[-0.03em] text-[#1d1b18]">
                  <span className="line-through decoration-[#a43716] decoration-2 underline-offset-2">Loose pipe runs that shudder inside walls</span>
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-2">
                  When a tap closes suddenly, the shock wave shakes unsecured pipes against masonry. We anchor every line with rubber-lined clips at regular intervals so your walls stay quiet.
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] uppercase text-[#516257]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257]" aria-hidden="true" />
                  Rubber-cushioned pipe brackets
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="p-6 md:p-8 flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[#f9f2ed] border border-[#dfc0b7]/40 flex items-center justify-center text-[#a43716] text-[12px] font-bold" aria-hidden="true">
                04
              </span>
              <div className="min-w-0">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold leading-6 tracking-[-0.03em] text-[#1d1b18]">
                  <span className="line-through decoration-[#a43716] decoration-2 underline-offset-2">Lump-sum bills with hidden margins</span>
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-2">
                  We never roll materials and labour into one unexplained number. You get an itemised materials list and can buy everything yourself, or have us collect them at actual store prices.
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] uppercase text-[#516257]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257]" aria-hidden="true" />
                  Original store receipts provided
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 pb-24 md:pb-32 w-full reveal-entry">
        <div className="bg-[#f9f2ed] rounded-3xl p-8 md:p-14 shadow-sm border border-[#dfc0b7]/20">
          <div className="max-w-2xl mb-12">
            <h2
              className="font-['Fraunces',serif] text-[#1d1b18] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.03em] font-semibold"
            >
              Frequently asked questions on pricing
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-2">
              Payment, site visits and workmanship explained plainly — nationwide from Abeokuta.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-xl p-6 shadow-sm border border-[#dfc0b7]/15 cursor-pointer transition-all duration-200 hover:shadow-md"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenFaq(isOpen ? null : idx);
                    }
                  }}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] font-semibold leading-7 text-[#1d1b18]">
                      {faq.q}
                    </h4>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#f3ede7] flex items-center justify-center shrink-0 text-[#1d1b18] text-sm font-semibold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </div>
                  </div>
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3 pt-4 border-t border-[#f3ede7]" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 mb-20 w-full reveal-entry">
        <div className="bg-[#a43716] text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h3
              className="font-['Plus_Jakarta_Sans',sans-serif] text-white text-[26px] md:text-[30px] leading-tight font-bold tracking-[-0.04em]"
            >
              Got a leak or project question right now?
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#ffdbd1] mt-2">
              Send photos of the issue to our plumber on WhatsApp for a clear quotation, or call direct from Abeokuta, Lagos, and nationwide.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`https://wa.me/2349031386928?text=${encodeURIComponent("Hello OOH JAY, I need a quotation for a plumbing job — here are photos of the issue.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.02em] hover:bg-[#f9f2ed] transition-all shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a43716]"
            >
              <span>Send photos on WhatsApp</span>
            </a>
            <a
              href="tel:+2349031386928"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#32302d] text-white font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.02em] hover:bg-[#1d1b18] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a43716]"
            >
              <span>Call 0903 138 6928</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
