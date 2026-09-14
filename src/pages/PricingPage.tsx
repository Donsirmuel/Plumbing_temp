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
    q: "What happens if a leak develops during my guarantee period?",
    a: "Call or WhatsApp your project reference and we place you at the top of the board. If the joint, weld or seal is ours, we make it right at no extra charge — workmanship backing — warranty doc on request. Based from Abiola Way, Abeokuta with field teams in Lagos, we cover Abeokuta, Lagos and nationwide follow-ups.",
  },
  {
    q: "Can I buy the plumbing materials and sanitary wares myself?",
    a: "Yes, many clients prefer to. We issue a precise bill of quantities — pipe grade, valve pressure ratings, drain diameters and finish models — so what you buy fits first time. Prefer us to procure? We buy at verified store prices and hand you the original receipts, no hidden mark-ups.",
  },
  {
    q: "How do you support clients managing renovations from overseas?",
    a: "Many of our larger sanitary jobs are for Nigerians in the diaspora. We share timestamped photos and videos at each stage, hold pipes under pressure on camera before walls are closed, and send a guarantee certificate by email. Payments by straightforward bank transfer, with clear quotations before any spend.",
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
              No hidden extras once the floor is open. Every job whether new site
              installs or repairs starts with a written quotation that seperates
              labour from materials, so you approve the cost before your property is touched.
            </p>

            {/* Trust Ribbon Pill Group */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[14px] font-semibold text-[#1d1b18]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f2ed] shadow-sm border border-[#dfc0b7]/20">
                <span className="material-symbols-outlined text-[18px] text-[#a43716]" aria-hidden="true">
                  verified
                </span>
                <span>Years active: 2014–present</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f2ed] shadow-sm border border-[#dfc0b7]/20">
                <span className="material-symbols-outlined text-[18px] text-[#516257]" aria-hidden="true">
                  receipt_long
                </span>
                <span>Precise pricing</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f2ed] shadow-sm border border-[#dfc0b7]/20">
                <span className="material-symbols-outlined text-[18px] text-[#a43716]" aria-hidden="true">
                  shield
                </span>
                <span>Workmanship backing</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Pricing Cards */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-20 md:py-28 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal-entry">
          <div className="max-w-xl">
            <h2
              className="font-['Fraunces',serif] text-[#1d1b18] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.03em] font-semibold"
            >
              How we price our work
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-3">
              Every job comes with an itemised quotation. Labour is listed separately from fittings and
              sanitary ware, so you keep full control of spend — buy yourself or have us procure at store
              price. For new builds and existing repairs alike.
            </p>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-[#f3ede7] rounded-full text-[13px] font-semibold tracking-[0.04em] self-start md:self-auto border border-[#dfc0b7]/20">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-[#1d1b18] shadow-sm">Standard Scope</span>
            <span className="px-3 py-1.5 text-[#58423c]">Abeokuta · Lagos · Nationwide</span>
          </div>
        </div>

        {/* Editorial pricing: middle card lifted/featured, outer cards quieter — breaks 3-equal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start reveal-entry">
          {/* Tier 1 — compact, muted */}
          <div className="lg:col-span-4 lg:mt-6 flex flex-col justify-between bg-white rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group border border-[#dfc0b7]/20">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f3ede7] flex items-center justify-center text-[#a43716] mb-6">
                <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                  water_drop
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1d1b18] text-[22px] md:text-[24px] leading-9 font-bold tracking-[-0.04em] mb-3">
                Everyday Fixes & Leaks
              </h3>
              <ReadMore
                text="For the daily nuisances that wear a home down — dripping kitchen taps, hissing cisterns that never fill, slow floor drains and burst flexi-hoses under the basin. New and existing homes."
                clampLines={2}
                className="mb-6"
              />
              <div className="py-4 my-6 bg-[#f9f2ed] rounded-xl px-5 flex flex-col border border-[#dfc0b7]/15">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c]">
                  Typical Billing Framework
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] font-semibold leading-7 text-[#1d1b18] mt-1">
                  Fixed Diagnostic & Service Fee
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#a43716] font-medium mt-0.5">
                  Parts billed at verified market cost
                </span>
              </div>
              <ul className="space-y-3 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#a43716] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Leak tracing with visual and acoustic tools — no needless tile cuts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#a43716] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Washers, PTFE, O-rings and sealants included in labour</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#a43716] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Original shop receipts shown for every fitting supplied</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#a43716] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Floors wiped dry and left tidy before we leave</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => handleBook("Everyday Fixes & Leaks")}
              className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-[#f3ede7] text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] hover:bg-[#ede7e2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer"
            >
              Book Rapid Repair
            </button>
          </div>

          {/* Tier 2 — FEATURED: lifted, scaled, warm border + only card with photo thumbnail */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#fffaf7] rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative border-2 border-[#a43716]/15 lg:-mt-4 lg:scale-[1.04] lg:shadow-[0_24px_48px_rgba(164,55,22,0.14)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#a43716] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase shadow-md whitespace-nowrap">
              Most requested · Pump specialists
            </div>
            <div className="pt-3">
              <div className="w-12 h-12 rounded-xl bg-[#a43716] flex items-center justify-center text-white mb-5 shadow-sm">
                <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                  speed
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1d1b18] text-[24px] md:text-[26px] leading-9 font-bold tracking-[-0.04em] mb-3">
                Pump, Tank & Pressure
              </h3>
              <ReadMore
                text="Stable showers on every floor — booster and borehole pumps, overhead tanks, pressure balancing and whole-house filtration without the hum or airlocks. For new sites and retrofits."
                clampLines={2}
                className="mb-5"
              />
              {/* Only featured card carries a real photo thumbnail — earns emphasis */}
              <div className="rounded-xl overflow-hidden mb-5 border border-[#dfc0b7]/20 bg-[#f3ede7]">
                <img
                  src="/pressure-pump-installs.jfif"
                  alt="Booster pump as installed — tidy manifold with anti-vibration mounts, Abeokuta"
                  className="w-full h-36 object-cover"
                  loading="lazy"
                />
                <div className="px-3 py-2 flex items-center justify-between bg-white">
                  <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#7b542b]">As fitted — Abiola Way · Lagos</span>
                  <span className="text-[11px] font-semibold text-[#a43716]">Silent mount</span>
                </div>
              </div>
              <div className="py-4 mb-6 bg-[#f3ede7] rounded-xl px-5 flex flex-col border border-[#a43716]/10">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c]">
                  Typical Billing Framework
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] font-semibold leading-7 text-[#1d1b18] mt-1">
                  Fixed-Scope Site Proposal
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#a43716] font-medium mt-0.5">
                  Sized by horsepower & pipe diameters
                </span>
              </div>
              <ul className="space-y-3 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#a43716] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Pressure calibrated to protect heaters and extend pump life</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#a43716] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Rubber anti-vibration mounts — no wall buzz when taps shut</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#a43716] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Bypass loop so mains switch causes no interruption</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#a43716] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Dedicated isolator and earthing check on every pump</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => handleBook("Pump, Tank & Pressure")}
              className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-[#a43716] text-white font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] hover:bg-[#c54f2c] shadow-md active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer"
            >
              Request Site Assessment
            </button>
          </div>

          {/* Tier 3 — taller editorial, calm */}
          <div className="lg:col-span-4 lg:mt-6 flex flex-col justify-between bg-white rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group border border-[#dfc0b7]/20">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f3ede7] flex items-center justify-center text-[#516257] mb-6 group-hover:bg-[#516257] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                  architecture
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1d1b18] text-[22px] md:text-[24px] leading-9 font-bold tracking-[-0.04em] mb-3">
                Bathrooms & Repiping
              </h3>
              <ReadMore
                text="New bathrooms and full re-pipes done once and done well — concealed cisterns, thermostatic mixers, and whole-house PPR/PEX runs with laser-set slopes. For new builds and renovations."
                clampLines={2}
                className="mb-6"
              />
              <div className="py-4 my-6 bg-[#f9f2ed] rounded-xl px-5 flex flex-col border border-[#dfc0b7]/15">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c]">
                  Typical Billing Framework
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] font-semibold leading-7 text-[#1d1b18] mt-1">
                  Itemised Room-by-Room Bill
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#516257] font-medium mt-0.5">
                  Staged payment milestones
                </span>
              </div>
              <ul className="space-y-3 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#516257] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Pressure hold on every concealed run before tiling</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#516257] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Laser-aligned outlets for clean tile symmetry</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#516257] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>As-built plumbing diagram handed over at handover</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#516257] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Workmanship backing — warranty doc on request</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => handleBook("Bathrooms & Repiping")}
              className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-[#f3ede7] text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] hover:bg-[#ede7e2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer"
            >
              Discuss Architectural Project
            </button>
          </div>
        </div>
      </section>

      {/* Guarantee Band */}
      <section className="w-full bg-[#32302d] text-[#f6f0ea] py-20 md:py-28 relative overflow-hidden reveal-entry">
        <div aria-hidden="true" className="absolute -right-12 sm:-right-20 -bottom-12 sm:-bottom-20 w-64 sm:w-96 h-64 sm:h-96 max-w-[60vw] rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -left-12 sm:-left-20 -top-12 sm:-top-20 w-64 sm:w-80 h-64 sm:h-80 max-w-[60vw] rounded-full bg-[#c54f2c]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#d4e7d8] mb-2">Workmanship Backing</span>
              <h2
                className="font-['Fraunces',serif] text-[#f6f0ea] text-[28px] md:text-[36px] leading-[1.15] font-semibold tracking-[-0.03em] mb-6"
              >
                Workmanship backing — warranty doc on request.
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-7 text-[#e7e1dc] mb-8">
                Too many warranties are just talk. Ours is written and signed. If any joint, weld or seal we fitted fails, we come back
                and set it right — workmanship backing — warranty doc on request. From our
                base on Abiola Way, Abeokuta to Lagos and nationwide, for new and existing work.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 bg-white/[0.06] rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#ffb5a0]">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      shield
                    </span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] font-semibold text-[#f6f0ea]">
                      Warranty Doc
                    </span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#e7e1dc]">
                    Workmanship backing — warranty doc on request, issued from our Abeokuta office.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#ffb5a0]">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      public
                    </span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] font-semibold text-[#f6f0ea]">
                      Diaspora Assurance
                    </span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#e7e1dc]">
                    Away from site? We share timestamped pressure-test videos and email a certificate for your records.
                  </p>
                </div>
              </div>
            </div>

            {/* Proof of Workmanship card — differentiated toward proof: real pressure-test thumbnail + warranty scan */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[#1d1b18] rounded-2xl p-6 md:p-7 shadow-xl relative overflow-hidden flex flex-col border border-[#dfc0b7]/20">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1d1b18] text-[20px] leading-8 font-bold tracking-[-0.04em]">
                      Proof of Workmanship
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c] mt-1">
                      Workmanship backing — warranty doc on request · Abiola Way, Abeokuta
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-[#a43716]/10 flex items-center justify-center text-[#a43716] shrink-0 border border-[#a43716]/15">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                      shield
                    </span>
                  </div>
                </div>

                {/* Pressure-test video thumbnail — real site photo with play affordance */}
                <div className="rounded-xl overflow-hidden border border-[#dfc0b7]/20 mb-4 group relative bg-[#f3ede7]">
                  <img
                    src="/plumbing-installation.jfif"
                    alt="Pressure test holding at 6 bar before tiling — manifold under test, Abeokuta site"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#1d1b18]/15 group-hover:bg-[#1d1b18]/25 transition-colors flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white/95 text-[#a43716] flex items-center justify-center shadow-lg border border-white">
                      <span className="material-symbols-outlined text-[28px] ml-0.5" aria-hidden="true">
                        play_arrow
                      </span>
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
                    <span className="bg-[#1d1b18]/85 backdrop-blur-sm text-white text-[11px] font-semibold tracking-[0.04em] px-2.5 py-1 rounded-full">
                      6 bar hold · before walls closed
                    </span>
                    <span className="bg-white/95 text-[#1d1b18] text-[11px] font-semibold px-2.5 py-1 rounded-full">Video on request</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.04em] uppercase text-[#516257] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257]" aria-hidden="true" />
                  Timestamped on site · shared on WhatsApp for diaspora handovers
                </div>

                {/* Warranty doc scanpreview — warm paper, stamp */}
                <div className="rounded-xl bg-[#fffaf7] border border-[#dfc0b7]/20 p-4 flex gap-3 items-start">
                  <div className="w-12 h-14 rounded bg-white border border-[#dfc0b7]/30 shadow-sm flex flex-col items-center justify-center shrink-0 p-1">
                    <span className="material-symbols-outlined text-[#a43716] text-[18px]" aria-hidden="true">
                      description
                    </span>
                    <span className="text-[8px] font-bold tracking-[0.06em] uppercase text-[#7b542b] leading-none mt-1 text-center">Warranty Doc</span>
                    <span className="w-8 h-px bg-[#a43716]/40 mt-1" aria-hidden="true" />
                    <span className="text-[7px] font-semibold text-[#516257] mt-1">OOH JAY · Abeokuta</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-[#1d1b18] leading-5">Signed guarantee certificate — issued from Abiola Way</p>
                    <p className="text-[13px] leading-5 text-[#58423c] mt-1">
                      Covers every joint, weld & seal we fitted. Emailed as scan for your records; original stamped on site.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3.5 rounded-xl bg-[#f9f2ed] flex items-start gap-3 border border-[#dfc0b7]/15">
                  <span className="material-symbols-outlined text-[#a43716] text-[20px] shrink-0 mt-0.5" aria-hidden="true">
                    handshake
                  </span>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c]">
                    “If we fitted it, we stand behind it — nationwide. Leak during guarantee? Top of the board, made right.”
                  </p>
                </div>
              </div>
            </div>
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
            habits you will never see from OOH JAY — Abiola Way, Abeokuta.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#dfc0b7]/20 shadow-sm overflow-hidden divide-y divide-[#f3ede7]">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#f3ede7]">
            {/* 1 */}
            <div className="p-6 md:p-8 flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#fff1ee] border border-[#ffc9b8] flex items-center justify-center text-[#a43716] relative" aria-hidden="true">
                <span className="material-symbols-outlined text-[18px]">payments</span>
                <span className="absolute w-5 h-px bg-[#a43716] rotate-[-22deg] opacity-70" />
              </span>
              <div className="min-w-0">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold leading-6 tracking-[-0.03em] text-[#1d1b18]">
                  <span className="line-through decoration-[#a43716] decoration-2 underline-offset-2">Payments for photo reviews</span>
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-2">
                  Others charge just to look at your photos. Send clear pictures or quick video on WhatsApp — we give an honest read, likely cause and written quotation range — at no charge.
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] uppercase text-[#516257]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257]" aria-hidden="true" />
                  Free photo & video quotations
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="p-6 md:p-8 flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#fff1ee] border border-[#ffc9b8] flex items-center justify-center text-[#a43716] relative" aria-hidden="true">
                <span className="material-symbols-outlined text-[18px]">plumbing</span>
                <span className="absolute w-5 h-px bg-[#a43716] rotate-[-22deg] opacity-70" />
              </span>
              <div className="min-w-0">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold leading-6 tracking-[-0.03em] text-[#1d1b18]">
                  <span className="line-through decoration-[#a43716] decoration-2 underline-offset-2">Cheap imitation valves or thin PVC</span>
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-2">
                  Light brass and thin PVC split under pump pressure. We source heavy-gauge, pressure-rated fittings from accredited distributors — batch and receipts shown.
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] uppercase text-[#516257]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257]" aria-hidden="true" />
                  Only authentic, pressure-tested systems
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#f3ede7]">
            {/* 3 */}
            <div className="p-6 md:p-8 flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#fff1ee] border border-[#ffc9b8] flex items-center justify-center text-[#a43716] relative" aria-hidden="true">
                <span className="material-symbols-outlined text-[18px]">handyman</span>
                <span className="absolute w-5 h-px bg-[#a43716] rotate-[-22deg] opacity-70" />
              </span>
              <div className="min-w-0">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold leading-6 tracking-[-0.03em] text-[#1d1b18]">
                  <span className="line-through decoration-[#a43716] decoration-2 underline-offset-2">Loose pipes that hammer in walls</span>
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-2">
                  Water hammer cracks tiles and wakes the house. Every run is clipped with rubber-cushioned brackets at measured intervals — walls stay silent.
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] uppercase text-[#516257]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257]" aria-hidden="true" />
                  Acoustically clamped conduits
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="p-6 md:p-8 flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#fff1ee] border border-[#ffc9b8] flex items-center justify-center text-[#a43716] relative" aria-hidden="true">
                <span className="material-symbols-outlined text-[18px]">receipt</span>
                <span className="absolute w-5 h-px bg-[#a43716] rotate-[-22deg] opacity-70" />
              </span>
              <div className="min-w-0">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold leading-6 tracking-[-0.03em] text-[#1d1b18]">
                  <span className="line-through decoration-[#a43716] decoration-2 underline-offset-2">Secret padding or duplicate slips</span>
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-2">
                  Labour and materials never hide in one lump sum. Buy from our spec yourself, or let us buy and bring original merchant slips — store price, itemised.
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] uppercase text-[#516257]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#516257]" aria-hidden="true" />
                  Store price, itemised receipt
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
              Payment, site visits and guarantee claims explained plainly — nationwide from Abeokuta.
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
                      className={`w-8 h-8 rounded-full bg-[#f3ede7] flex items-center justify-center shrink-0 text-[#1d1b18] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
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
              Send photos of the issue to our plumber on WhatsApp for a clear, itemised quotation — or
              call direct from Abeokuta, Lagos and nationwide, for new builds and repairs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`https://wa.me/2349031386928?text=${encodeURIComponent("Hello OOH JAY, I need a quotation for a plumbing job — here are photos of the issue.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] hover:bg-[#f9f2ed] transition-all shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a43716]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#516257]" aria-hidden="true">
                chat
              </span>
              <span>WhatsApp Photos</span>
            </a>
            <a
              href="tel:+2349031386928"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#32302d] text-white font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] hover:bg-[#1d1b18] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a43716]"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                call
              </span>
              <span>+234 903 138 6928</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
