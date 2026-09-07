import React, { useEffect, useRef, useState } from "react";

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
    a: "For multi-day bathroom or repiping jobs we use three simple milestones so you stay in control: 50% to mobilise and run the first-fix pipework, 30% after the 10-bar pressure test and wall sealing, and the final 20% only when fixtures are set, water runs clean, and the space is left tidy. Labour and materials are always listed separately on the quotation.",
  },
  {
    q: "What happens if a leak develops during my 1-year guarantee period?",
    a: "Call or WhatsApp your project reference and we place you at the top of the board. A senior technician returns within 24 hours, and if the joint, weld or seal is ours, we make it right at no charge — no transport, no labour, no excuses. Based from Abiola Way, Abeokuta with field teams in Lagos, we cover Abeokuta, Lagos and nationwide follow-ups.",
  },
  {
    q: "Can I buy the plumbing materials and sanitary wares myself?",
    a: "Yes, many clients prefer to. We issue a precise bill of quantities — pipe grade PN20/PN25, valve pressure ratings, drain diameters and finish models — so what you buy fits first time. Prefer us to procure? We buy at verified store prices and hand you the original receipts, no hidden mark-ups.",
  },
  {
    q: "How do you support clients managing renovations from overseas?",
    a: "Over 40% of our larger sanitary jobs are for Nigerians in the diaspora. We share timestamped photos and videos at each stage, hold pipes under 10-bar pressure on camera before walls are closed, and send a serialized guarantee certificate by email. Payments by straightforward bank transfer, with clear quotations before any spend.",
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
      <div className="relative w-full overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#ffb5a0]/25 via-[#f9f2ed]/40 to-transparent blur-3xl -z-10"
        />

        {/* Hero */}
        <section className="max-w-[1200px] mx-auto px-5 md:px-12 pt-8 pb-16 md:pt-14 md:pb-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto reveal-entry">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3ede7] text-[#a43716] text-[11px] font-semibold tracking-[0.08em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a43716] animate-pulse" aria-hidden="true" />
              <span>Transparent Rates · No Surprises</span>
            </div>
            <h1
              className="font-normal tracking-tight text-[#1d1b18] mt-6 mb-6 text-[38px] leading-[46px] md:text-[56px] md:leading-[64px]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Clear prices, written quotes, and a <span className="italic font-normal text-[#a43716]">1-year guarantee</span>.
            </h1>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 text-[#58423c] max-w-2xl">
              No hidden extras once the floor is open. Every job starts with a written quotation — labour
              separated from materials — so you approve the cost before a pipe is touched. Here is how we
              price and what our 365-day guarantee covers.
            </p>

            {/* Trust Ribbon Pill Group */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[13px] font-semibold text-[#1d1b18]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f2ed] shadow-sm border border-[#dfc0b7]/20">
                <span className="material-symbols-outlined text-[18px] text-[#a43716]" aria-hidden="true">
                  verified
                </span>
                <span>10+ Years Master Practice</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f2ed] shadow-sm border border-[#dfc0b7]/20">
                <span className="material-symbols-outlined text-[18px] text-[#516257]" aria-hidden="true">
                  receipt_long
                </span>
                <span>Zero Opaque Mark-ups</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f2ed] shadow-sm border border-[#dfc0b7]/20">
                <span className="material-symbols-outlined text-[18px] text-[#a43716]" aria-hidden="true">
                  schedule
                </span>
                <span>24h Guarantee Recall</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Metric Ribbon */}
      <section className="w-full bg-[#f9f2ed] py-6 shadow-sm reveal-entry border-y border-[#dfc0b7]/20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center">
              <span
                className="text-[#a43716] font-medium tracking-tight leading-none"
                style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: "48px", lineHeight: "52px", letterSpacing: "-0.02em" }}
              >
                365
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c] mt-1">
                Days Guarantee Cover
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span
                className="text-[#1d1b18] font-medium tracking-tight leading-none"
                style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: "48px", lineHeight: "52px", letterSpacing: "-0.02em" }}
              >
                100%
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c] mt-1">
                Upfront Material Receipts
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span
                className="text-[#a43716] font-medium tracking-tight leading-none"
                style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: "48px", lineHeight: "52px", letterSpacing: "-0.02em" }}
              >
                ₦0
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c] mt-1">
                Photo & Video Quotations
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span
                className="text-[#516257] font-medium tracking-tight leading-none"
                style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: "48px", lineHeight: "52px", letterSpacing: "-0.02em" }}
              >
                &lt; 24h
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c] mt-1">
                Warranty Return Window
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-12 py-20 md:py-28 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal-entry">
          <div className="max-w-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716] block mb-2">
              Straightforward Models
            </span>
            <h2
              className="text-[#1d1b18] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.015em] font-normal"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              How we price our work
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-3">
              Every job comes with an itemised quotation. Labour is listed separately from fittings and
              sanitary ware, so you keep full control of spend — buy yourself or have us procure at store
              price.
            </p>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-[#f3ede7] rounded-full text-[11px] font-semibold tracking-[0.04em] self-start md:self-auto border border-[#dfc0b7]/20">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-[#1d1b18] shadow-sm">Standard Scope</span>
            <span className="px-3 py-1.5 text-[#58423c]">Abeokuta · Lagos · Nationwide</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Tier 1 */}
          <div
            className="flex flex-col justify-between bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#dfc0b7]/20 reveal-entry"
            style={{ transitionDelay: "0ms" }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f3ede7] flex items-center justify-center text-[#a43716] mb-6 group-hover:bg-[#a43716] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                  water_drop
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">
                  Tier 01
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#d4e7d8] text-[#0f1f16]">
                  Same-Day Availability
                </span>
              </div>
              <h3
                className="text-[#1d1b18] text-[24px] md:text-[28px] leading-9 font-medium tracking-[-0.01em] mb-3"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Everyday Fixes & Leaks
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mb-6">
                For the daily nuisances that wear a home down — dripping kitchen taps, hissing cisterns that
                never fill, slow floor drains and burst flexi-hoses under the basin.
              </p>
              <div className="py-4 my-6 bg-[#f9f2ed] rounded-xl px-5 flex flex-col border border-[#dfc0b7]/15">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c]">
                  Typical Billing Framework
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] font-semibold leading-7 text-[#1d1b18] mt-1">
                  Fixed Diagnostic & Service Fee
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#a43716] font-medium mt-0.5">
                  Parts billed at verified market cost
                </span>
              </div>
              <ul className="space-y-3 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c] mb-8">
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
              className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-[#f3ede7] text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold tracking-[0.04em] hover:bg-[#ede7e2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer"
            >
              Book Rapid Repair
            </button>
          </div>

          {/* Tier 2 Highlighted */}
          <div
            className="flex flex-col justify-between bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-2xl transition-all duration-300 relative scale-100 lg:-translate-y-2 border border-[#dfc0b7]/20 reveal-entry"
            style={{ transitionDelay: "80ms" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#a43716] text-white text-[11px] font-semibold tracking-[0.08em] uppercase shadow-sm whitespace-nowrap">
              Most Requested Service
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#a43716]/10 flex items-center justify-center text-[#a43716] mb-6">
                <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                  speed
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">
                  Tier 02
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#ffdcbd] text-[#2c1600]">
                  Fixed Contract
                </span>
              </div>
              <h3
                className="text-[#1d1b18] text-[24px] md:text-[28px] leading-9 font-medium tracking-[-0.01em] mb-3"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Pump, Tank & Pressure
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mb-6">
                Stable showers on every floor — booster and borehole pumps, overhead tanks, pressure balancing
                and whole-house filtration without the hum or airlocks.
              </p>
              <div className="py-4 my-6 bg-[#f3ede7] rounded-xl px-5 flex flex-col border border-[#dfc0b7]/15">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c]">
                  Typical Billing Framework
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] font-semibold leading-7 text-[#1d1b18] mt-1">
                  Fixed-Scope Site Proposal
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#a43716] font-medium mt-0.5">
                  Sized by horsepower & pipe diameters
                </span>
              </div>
              <ul className="space-y-3 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c] mb-8">
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
                  <span>Bypass loop so NEPA or mains switch causes no interruption</span>
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
              className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-[#a43716] text-white font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold tracking-[0.04em] hover:bg-[#c54f2c] shadow-md active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer"
            >
              Request Site Assessment
            </button>
          </div>

          {/* Tier 3 */}
          <div
            className="flex flex-col justify-between bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#dfc0b7]/20 reveal-entry"
            style={{ transitionDelay: "160ms" }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f3ede7] flex items-center justify-center text-[#516257] mb-6 group-hover:bg-[#516257] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                  architecture
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">
                  Tier 03
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#ede7e2] text-[#58423c]">
                  Milestone Based
                </span>
              </div>
              <h3
                className="text-[#1d1b18] text-[24px] md:text-[28px] leading-9 font-medium tracking-[-0.01em] mb-3"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Bathrooms & Repiping
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mb-6">
                New bathrooms and full re-pipes done once and done well — concealed cisterns, thermostatic
                mixers, and whole-house PPR/PEX runs with laser-set slopes.
              </p>
              <div className="py-4 my-6 bg-[#f9f2ed] rounded-xl px-5 flex flex-col border border-[#dfc0b7]/15">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c]">
                  Typical Billing Framework
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] font-semibold leading-7 text-[#1d1b18] mt-1">
                  Itemised Room-by-Room Bill
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#516257] font-medium mt-0.5">
                  3-stage payment milestone release
                </span>
              </div>
              <ul className="space-y-3 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-[#516257] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>10-bar pressure hold on every concealed run before tiling</span>
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
                  <span>Signed 365-day guarantee certificate for the installation</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => handleBook("Bathrooms & Repiping")}
              className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-[#f3ede7] text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold tracking-[0.04em] hover:bg-[#ede7e2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer"
            >
              Discuss Architectural Project
            </button>
          </div>
        </div>
      </section>

      {/* Guarantee Band */}
      <section className="w-full bg-[#32302d] text-[#f6f0ea] py-20 md:py-28 relative overflow-hidden reveal-entry">
        <div aria-hidden="true" className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#c54f2c]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 text-[#d4e7d8] text-[11px] font-semibold tracking-[0.08em] uppercase mb-4">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  verified_user
                </span>
                <span>The OOH JAY Handshake Guarantee</span>
              </div>
              <h2
                className="text-[#f6f0ea] text-[28px] md:text-[40px] leading-[1.15] font-normal tracking-tight mb-6"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Guaranteed against weeping, vibration, and joint failure for 365 days.
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 text-[#e7e1dc] mb-8">
                Too many warranties are just talk. Ours is written and signed. If any PPR weld, copper
                joint, pressure reducer or cistern seal we fitted seeps or fails within a year, we come back
                and set it right — promptly and at no cost. No debate, just plumbing-first care from our
                base on Abiola Way, Abeokuta to Lagos and nationwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 bg-white/[0.06] rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#ffb5a0]">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      timer
                    </span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] font-semibold text-[#f6f0ea]">
                      24h Response
                    </span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#e7e1dc]">
                    Guarantee calls skip the queue. A senior technician is on the road within 24 hours.
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
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#e7e1dc]">
                    Away from site? We share timestamped pressure-test videos and email a serialized
                    certificate for your records.
                  </p>
                </div>
              </div>
            </div>

            {/* Proof of Workmanship card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[#1d1b18] rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between border border-[#dfc0b7]/20">
                <div className="flex items-start justify-between border-b border-[#dfc0b7]/30 pb-6 mb-6">
                  <div>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">
                      Official Warranty Policy
                    </span>
                    <h4
                      className="text-[#1d1b18] text-[22px] leading-8 font-medium tracking-tight mt-1"
                      style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                    >
                      Proof of Workmanship
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#a43716]/10 flex items-center justify-center text-[#a43716] shrink-0">
                    <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                      shield
                    </span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between gap-4 py-2.5 bg-[#f9f2ed] px-4 rounded-lg">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#58423c]">Scope Covered</span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold text-[#1d1b18] text-right">
                      All Joints, Welds & Seals
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2.5 bg-[#f9f2ed] px-4 rounded-lg">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#58423c]">Term</span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-bold text-[#a43716] text-right">
                      365 Calendar Days
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2.5 bg-[#f9f2ed] px-4 rounded-lg">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#58423c]">Callout Surcharge</span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-bold text-[#516257] text-right">
                      ₦0.00 (Zero)
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2.5 bg-[#f9f2ed] px-4 rounded-lg">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#58423c]">Verification Media</span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold text-[#1d1b18] text-right">
                      HD Pressure Test Video
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#f3ede7] flex items-center gap-3 border border-[#dfc0b7]/15">
                  <span className="material-symbols-outlined text-[#a43716] text-[24px] shrink-0" aria-hidden="true">
                    handshake
                  </span>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c]">
                    “We take pride in clean joints and silent pipes. If we fitted it, we stand behind it.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we refuse to do */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-12 py-20 md:py-28 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-entry">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716] block mb-2">
            Our Craft Ethics
          </span>
          <h2
            className="text-[#1d1b18] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.015em] font-normal"
            style={{ fontFamily: "'Newsreader', Georgia, serif" }}
          >
            What we refuse to do
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-3">
            Plumbing in Nigeria has earned its mistrust — rushed cover-ups and shifting bills. Here are four
            habits you will never see from OOH JAY.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-[#f9f2ed] hover:bg-[#f3ede7] transition-colors shadow-sm flex flex-col justify-between border border-[#dfc0b7]/20 reveal-entry">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#ffdad6] text-[#93000a] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    close
                  </span>
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.06em] uppercase text-[#93000a]">
                  Common Practice: WhatsApp Surcharges
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold leading-7 text-[#1d1b18] mb-3">
                No paid diagnostics for remote photo reviews
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                Others charge just to look at your photos. Send us clear pictures or a quick video on WhatsApp
                and we will give an honest read — likely cause, options, and a written quotation range — at
                no charge.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#dfc0b7]/20 flex items-center gap-2 text-[#a43716] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                check
              </span>
              <span>Free photo & video quotations via WhatsApp</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#f9f2ed] hover:bg-[#f3ede7] transition-colors shadow-sm flex flex-col justify-between border border-[#dfc0b7]/20 reveal-entry">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#ffdad6] text-[#93000a] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    close
                  </span>
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.06em] uppercase text-[#93000a]">
                  Common Practice: Roadside Counterfeits
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold leading-7 text-[#1d1b18] mb-3">
                No cheap, brittle imitation valves or pipes
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                The market is full of light brass and thin PVC that splits under pump pressure. We source
                heavy-gauge, pressure-rated fittings from accredited distributors only, and we show you the
                batch and receipts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#dfc0b7]/20 flex items-center gap-2 text-[#a43716] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                check
              </span>
              <span>Only authentic, pressure-tested pipe systems</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#f9f2ed] hover:bg-[#f3ede7] transition-colors shadow-sm flex flex-col justify-between border border-[#dfc0b7]/20 reveal-entry">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#ffdad6] text-[#93000a] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    close
                  </span>
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.06em] uppercase text-[#93000a]">
                  Common Practice: Hasty Enclosures
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold leading-7 text-[#1d1b18] mb-3">
                No loose pipes that hammer inside your walls
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                Water hammer cracks tiles and wakes the house. Every run is clipped with rubber-cushioned
                brackets at measured intervals, so when a quarter-turn tap snaps shut, the wall stays silent.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#dfc0b7]/20 flex items-center gap-2 text-[#a43716] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                check
              </span>
              <span>Acoustically clamped & shock-absorbed conduits</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#f9f2ed] hover:bg-[#f3ede7] transition-colors shadow-sm flex flex-col justify-between border border-[#dfc0b7]/20 reveal-entry">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#ffdad6] text-[#93000a] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    close
                  </span>
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.06em] uppercase text-[#93000a]">
                  Common Practice: Hardware Inflation
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold leading-7 text-[#1d1b18] mb-3">
                No secret hardware padding or duplicate receipts
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                Labour and materials never hide in one lump sum. Buy from our specification yourself, or let
                our team buy and bring the original merchant slips — you pay store price, itemised.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#dfc0b7]/20 flex items-center gap-2 text-[#a43716] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                check
              </span>
              <span>You buy directly or pay store price with itemised slip</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-12 pb-24 md:pb-32 w-full reveal-entry">
        <div className="bg-[#f9f2ed] rounded-3xl p-8 md:p-14 shadow-sm border border-[#dfc0b7]/20">
          <div className="max-w-2xl mb-12">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716] block mb-2">
              Clarity & Assurances
            </span>
            <h2
              className="text-[#1d1b18] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.015em] font-normal"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
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
      <section className="max-w-[1200px] mx-auto px-5 md:px-12 mb-20 w-full reveal-entry">
        <div className="bg-[#a43716] text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#ffdbd1] block mb-2">
              Immediate Help & Quotations
            </span>
            <h3
              className="text-white text-[28px] md:text-[32px] leading-tight font-normal tracking-tight"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Got a leak or project question right now?
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#ffdbd1] mt-2">
              Send photos of the issue to our master plumber on WhatsApp for a clear, itemised quotation — or
              call direct from Abeokuta, Lagos and nationwide.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`https://wa.me/2349031386928?text=${encodeURIComponent("Hello OOH JAY, I need a quotation for a plumbing job — here are photos of the issue.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold tracking-[0.04em] hover:bg-[#f9f2ed] transition-all shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a43716]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#516257]" aria-hidden="true">
                chat
              </span>
              <span>WhatsApp Photos</span>
            </a>
            <a
              href="tel:+2349031386928"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#32302d] text-white font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold tracking-[0.04em] hover:bg-[#1d1b18] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a43716]"
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
