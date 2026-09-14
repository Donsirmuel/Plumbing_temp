import React, { useEffect, useRef, useState } from "react";
import { ReadMore } from "../components/ReadMore";

interface ServicesPageProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

type DiagnosticItem = {
  tag: string;
  title: string;
  desc: string;
  time: string;
  benefit: string;
  waText: string;
};

const SERVICES = [
  {
    title: "Leaks, Dripping Taps & Burst Pipes",
    desc: "New pipework for new builds and quick repairs for hidden leaks, burst lines and ceiling stains in lived-in homes.",
    highlights: [
      "Acoustic leak detection — no needless tiling damage",
      "PPR and copper pipe repair & valve replacement",
      "Rapid isolation to limit water damage",
    ],
    icon: "water_drop",
    iconWrap: "bg-[#a43716]/10 text-[#a43716]",
    checkColor: "text-[#a43716]",
    image: "/leak-tester.jpg",
    alt: "Leak detection tester and pressure gauge on site — verifying pipe integrity before close-up",
  },
  {
    title: "Water Pressure, Pumps & Boreholes",
    desc: "New booster sets for new sites and servicing for weak showers, noisy pumps and airlocked tank supplies..",
    highlights: [
      "Booster and submersible pump install & service",
      "Auto float switches to stop overflows",
      "Airlock clearing for steady upper-floor pressure",
    ],
    icon: "speed",
    iconWrap: "bg-[#d4e7d8] text-[#0f1f16]",
    checkColor: "text-[#516257]",
    image: "/borehole.jfif",
    alt: "Borehole head as installed — clean casing and valving for steady supply",
  },
  {
    title: "Bathroom & Kitchen Fitting",
    desc: "Level, watertight fitting for basins, tubs, concealed cisterns and mixers — for new builds and refits.",
    highlights: [
      "Concealed toilets & frameless glass sealing",
      "Double-bowl waste and grease traps",
      "Silicone sealing for watertight bath edges",
    ],
    icon: "shower",
    iconWrap: "bg-[#ffdcbd] text-[#2c1600]",
    checkColor: "text-[#7b542b]",
    image: "/bathroom-installation.jfif",
    alt: "Bathroom installation as finished — basin and shower with watertight finish, Abeokuta",
  },
  {
    title: "Water Heaters & Pure Water Tanks",
    desc: "Safe heater installs with relief valves, plus whole-house filters so borehole water runs clear — new and existing sites. Nationwide from Abeokuta.",
    highlights: [
      "Safety relief valves on every heater",
      "Whole-house sediment and carbon filtration",
      "Overhead tank cleaning and pipe repair",
    ],
    icon: "water_heater",
    iconWrap: "bg-[#a43716]/10 text-[#a43716]",
    checkColor: "text-[#a43716]",
    image: "/water-heater.jfif",
    alt: "Water heater as installed — safe fitting with relief valve and neat connections",
  },
  {
    title: "Drainage, Soakaways & Odour Fixes",
    desc: "We stop sewer smells for good — deep water-seal traps, unblocked showers and correctly sloped waste lines for new and occupied homes. Nationwide.",
    highlights: [
      "Permanent fix for bathroom sewer odour",
      "Mechanical clearing of grease & hair blocks",
      "Re-levelling for garden and soakaway lines",
    ],
    icon: "sanitizer",
    iconWrap: "bg-[#d4e7d8] text-[#0f1f16]",
    checkColor: "text-[#516257]",
    image: "/soakaways.jfif",
    alt: "Soakaway and drainage chamber as built — correctly sloped and serviceable",
  },
  {
    title: "Diaspora & Remote Property Care",
    desc: "Building from abroad? We share honest video updates, verify materials and keep costs clear — for new builds and repairs while you are away. — for wherever you are",
    highlights: [
      "Time-stamped photo & video at every stage",
      "Pressure testing before walls are sealed",
      "WhatsApp updates on UK/US-friendly hours",
    ],
    icon: "public",
    iconWrap: "bg-[#a43716] text-white",
    checkColor: "text-[#a43716]",
    image: "/plumber-in-kitchen.jfif",
    alt: "Plumber at work in kitchen — tidy install documented for remote client review",
  },
] as const;

const HOW_WE_WORK = [
  {
    n: 1,
    title: "Tell Us the Issue",
    desc: "Send a WhatsApp note, photo or short voice memo showing where the water or smell comes from.",
    footIcon: "chat",
    foot: "Takes 2 minutes",
  },
  {
    n: 2,
    title: "Fixed Price Quote",
    desc: "We explain what needs doing and give a firm, upfront price. No work starts without your go-ahead.",
    footIcon: "receipt_long",
    foot: "No surprise invoices",
  },
  {
    n: 3,
    title: "Floor & Shoe Covers",
    desc: "Technicians lay protective sheets and wear shoe covers before carrying tools across your floors.",
    footIcon: "do_not_step",
    foot: "Spotless cleanliness",
  },
  {
    n: 4,
    title: "Pressure Testing",
    desc: "Every joint is checked under load — not just a quick tap turn.",
    footIcon: "published_with_changes",
    foot: "Tested before close",
  },
  {
    n: 5,
    title: "High-Grade Workmanship",
    desc: "Every joint checked under load and finished clean — we stand behind our high-grade workmanship, no shortcuts.",
    footIcon: "verified_user",
    foot: "High-grade workmanship assured",
  },
] as const;

const DIAGNOSTICS: DiagnosticItem[] = [
  {
    tag: "Typical cause",
    title: "Concealed pipe leak or weeping joint inside concrete",
    desc: "Often a split coupling under pressure or a worn toilet seal upstairs. We pinpoint the damp spot without tearing down walls.",
    time: "Usually same-day visit",
    benefit: "No needless tile damage",
    waText: "Hello OOH JAY, I have water stains on my ceiling/wall.",
  },
  {
    tag: "Typical cause",
    title: "Airlock in pipes or failing booster pump switch",
    desc: "Air trapped at the highest elbow after a dry tank, or a pump pressure sensor needing calibration. Flow returns once cleared and balanced.",
    time: "Usually same-day visit",
    benefit: "Steady pressure restored",
    waText: "Hello OOH JAY, my shower upstairs has very weak water pressure.",
  },
  {
    tag: "Typical cause",
    title: "Dried P-trap or missing vent on stack pipe",
    desc: "When trap water evaporates or depth is too shallow, sewer gas rises into the room. We fit deep-seal traps that block it for good.",
    time: "Usually same-day visit",
    benefit: "Fresh air, permanently",
    waText: "Hello OOH JAY, I have a bad smell coming from my bathroom drain.",
  },
  {
    tag: "Typical cause",
    title: "Continuous micro-leak or jammed float valve",
    desc: "If the pump runs with no taps open, the overhead float may be stuck or a buried line is leaking. We trace and stop it before the motor burns out.",
    time: "Usually same-day visit",
    benefit: "Pump motor protected",
    waText: "Hello OOH JAY, my pump keeps running and will not turn off.",
  },
];

const DIAG_LABELS = [
  "Water stains on ceiling or wall",
  "Weak shower trickle upstairs",
  "Sewer smell from drain",
  "Pump won't turn off",
] as const;

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  const [activeDiag, setActiveDiag] = useState(0);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = revealRef.current;
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

  const diag = DIAGNOSTICS[activeDiag];

  return (
    <div ref={revealRef} className="bg-[#fff8f3] text-[#1d1b18]">
      {/* Hero editorial split */}
      <div className="relative w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 pt-8 pb-16 overflow-hidden min-w-0 max-w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 max-w-[90vw] bg-[#a43716]/[0.05] rounded-full blur-3xl -z-10"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left text */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 reveal-entry">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-[#7b542b]">
              <span className="w-6 h-px bg-[#dfc0b7]" aria-hidden="true"></span>Honest Plumbing · Homes &amp; Commercial Properties
            </span>
            <h1
              className="font-['Fraunces',serif] text-[38px] leading-[46px] lg:text-[56px] lg:leading-[64px] tracking-[-0.03em] font-semibold text-[#1d1b18]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Plumbing work that lasts, done without shortcuts.
            </h1>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-7 text-[#58423c] max-w-xl">
              From drips and low pressure to full bathrooms and new pipe runs; for new sites and existing homes.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#a43716] text-white text-[13px] font-semibold tracking-[0.04em] shadow-md hover:bg-[#c54f2c] transition-all active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
              >
                <span className="material-symbols-outlined text-[20px] leading-none" aria-hidden="true">
                  calendar_month
                </span>
                Book a plumber
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#f3ede7] rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(31,29,26,0.08)] p-3">
              <div className="h-96 w-full rounded-xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  src="/plumber-working-in-kitchen.jfif"
                  alt="Plumber working in kitchen — tidy pipework install documented for new and existing homes"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#32302d]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-2 ">
                    <span className="material-symbols-outlined text-[#ffdbd1] text-[22px] leading-none" aria-hidden="true">
                      workspace_premium
                    </span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-semibold leading-7 tracking-[-0.005em] text-[#fff8f3]">
                      Nationwide service
                    </span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-5 text-white/85">For New sites & Existing homes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services — alternating editorial rows, varied highlight treatments */}
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-entry">
          <div className="max-w-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] block mb-2">Detailed Scope of Work</span>
            <h2 className="font-['Fraunces',serif] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.03em] font-semibold text-[#1d1b18]">
              Everyday plumbing problems, solved with care.
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-3">
              Nationwide with free quotations. New builds & lived-in homes.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:gap-12">
          {SERVICES.map((svc, idx) => {
            const isDiaspora = svc.title === "Diaspora & Remote Property Care";
            const isHeaters = svc.title === "Water Heaters & Pure Water Tanks";
            const reversed = idx % 2 === 1;
            const cardTone = isDiaspora
              ? "bg-[#32302d] border-white/10 text-[#f6f0ea]"
              : isHeaters
                ? "bg-[#ede7e2] border-[#dfc0b7]/20"
                : "bg-white border-[#dfc0b7]/20";
            return (
              <div
                key={svc.title}
                className={`reveal-entry rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border flex flex-col lg:flex-row group ${cardTone} ${reversed ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="lg:w-[46%] xl:w-[48%] h-64 sm:h-72 lg:h-auto lg:min-h-[380px] overflow-hidden bg-[#f3ede7] shrink-0 relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    src={svc.image}
                    alt={svc.alt}
                    loading="lazy"
                  />
                  {isDiaspora && (
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-white text-[#1d1b18] rounded-full text-[11px] font-bold tracking-[0.06em] uppercase shadow-sm">
                      Diaspora favourite
                    </span>
                  )}
                  {!isDiaspora && (
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[#1d1b18] text-[11px] font-semibold tracking-[0.04em] shadow-sm border border-[#dfc0b7]/20">
                      {idx === 0
                        ? "Nationwide"
                        : idx === 1
                          ? "Borehole & pump care"
                          : idx === 2
                            ? "Bathroom & kitchen"
                            : idx === 3
                              ? "Heaters & filtration"
                              : "Drainage & soakaways"}
                    </span>
                  )}
                </div>

                <div className="flex-1 p-6 sm:p-7 lg:p-8 xl:p-10 flex flex-col">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${isDiaspora ? "bg-white/15 text-[#ffdbd1] border border-white/10" : svc.iconWrap}`}>
                    <span className="material-symbols-outlined text-[22px] leading-none" aria-hidden="true">
                      {svc.icon}
                    </span>
                  </div>
                  <h3
                    className={`font-['Plus_Jakarta_Sans',sans-serif] text-[20px] md:text-[22px] leading-7 tracking-[-0.04em] font-bold mb-3 ${isDiaspora ? "text-white" : "text-[#1d1b18]"}`}
                  >
                    {svc.title}
                  </h3>
                  <ReadMore text={svc.desc} clampLines={2} variant={isDiaspora ? "dark" : "light"} className="mb-5" />

                  {/* ——— Distinct highlight per category ——— */}
                  {idx === 0 && (
                    <ul className="space-y-2.5 mb-6">
                      {svc.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c]"
                        >
                          <span className={`material-symbols-outlined text-[18px] leading-none mt-[2px] shrink-0 ${svc.checkColor}`} aria-hidden="true">
                            check_circle
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {idx === 1 && (
                    <div className="mb-6 space-y-4">
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-7 text-[#58423c] border-l-2 border-[#d4e7d8] pl-3">
                        Weak upstairs showers, humming pumps or tanks that overflow? We clear airlocks, calibrate boosters and set auto float switches so every floor holds
                        steady pressure — for new sites and lived-in homes, nationwide. Quotations free.
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { k: "Same-day", v: "Airlock cleared", icon: "bolt" },
                          { k: "±0.3 bar", v: "Pressure balanced", icon: "speed" },
                          { k: "Zero overflows", v: "Float set right", icon: "water_drop" },
                        ].map((s) => (
                          <div key={s.k} className="rounded-xl bg-[#f9f2ed] border border-[#dfc0b7]/20 px-3 py-3 text-center">
                            <span className="material-symbols-outlined text-[#a43716] text-[18px] leading-none block mb-1" aria-hidden="true">
                              {s.icon}
                            </span>
                            <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-bold leading-none tracking-[-0.02em] text-[#1d1b18]">{s.k}</div>
                            <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] leading-3 text-[#58423c] mt-1">{s.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-3">
                        <figure className="rounded-xl overflow-hidden bg-[#f3ede7] border border-[#dfc0b7]/20">
                          <div className="h-36 sm:h-40 overflow-hidden">
                            <img
                              src="/bathroom-installation.jfif"
                              alt="Bathroom installation as finished — level set-out before sealing"
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <figcaption className="px-3 py-2 bg-white">
                            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.04em] uppercase text-[#7b542b]">On the bench</span>
                            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] leading-4 text-[#58423c] block">Level set-out, wastes aligned</span>
                          </figcaption>
                        </figure>
                        <figure className="rounded-xl overflow-hidden bg-[#f3ede7] border border-[#dfc0b7]/20">
                          <div className="h-36 sm:h-40 overflow-hidden">
                            <img
                              src="/close-up-of-basin-install.jfif"
                              alt="Close-up of basin install — silicone sealed watertight edge after fitting, Abeokuta"
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <figcaption className="px-3 py-2 bg-white">
                            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.04em] uppercase text-[#516257]">Finished seal</span>
                            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] leading-4 text-[#58423c] block">Silicone sealed, watertight</span>
                          </figcaption>
                        </figure>
                      </div>
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] leading-5 text-[#58423c] mt-3">
                        Real assets from site — new builds & refits. Concealed cisterns, frameless glass & double-bowl wastes fitted without wobbles or hidden seeps.
                      </p>
                    </div>
                  )}

                  {idx === 3 && (
                    <div className="mb-6">
                      <div className="rounded-xl bg-white border border-[#dfc0b7]/30 pl-4 pr-4 py-4 relative overflow-hidden">
                        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-[#a43716]/80 rounded-full" />
                        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-7 text-[#58423c]">
                          Safety first, then comfort. Every heater leaves with a relief valve, lagged hot lines and neat valving; we pair it with whole-house sediment & carbon
                          filters and overhead tank cleans so borehole water runs clear from kitchen to shower. Quotations free — Abeokuta base, nationwide.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {["Relief valve fitted", "Sediment + carbon filter", "Tank cleaned"].map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f9f2ed] border border-[#dfc0b7]/20 text-[12px] font-medium text-[#58423c]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#a43716] shrink-0" aria-hidden="true" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 4 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {svc.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#f9f2ed] border border-[#dfc0b7]/30 text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 font-medium"
                        >
                          <span className="w-6 h-6 rounded-full bg-[#d4e7d8] text-[#0f1f16] flex items-center justify-center shrink-0" aria-hidden="true">
                            <span className="material-symbols-outlined text-[14px] leading-none">verified</span>
                          </span>
                          {h}
                        </span>
                      ))}
                      <span className="inline-flex items-center gap-1.5 px-3 py-2 font-['Plus_Jakarta_Sans',sans-serif] text-[12px] leading-5 text-[#58423c]">
                        <span className="material-symbols-outlined text-[14px] text-[#516257]" aria-hidden="true">
                          info
                        </span>
                        Nationwide · new & occupied homes
                      </span>
                    </div>
                  )}

                  {idx === 5 && (
                    <div className="mb-6">
                      <ol className="relative border-l border-white/15 pl-6 space-y-4 ml-2">
                        {[
                          { step: "Enquiry & video survey", detail: svc.highlights[0], icon: "videocam" },
                          { step: "Pressure test before close-up", detail: svc.highlights[1], icon: "verified_user" },
                          { step: "UK/US-friendly WhatsApp updates", detail: svc.highlights[2], icon: "chat" },
                        ].map((item) => (
                          <li key={item.step} className="relative">
                            <span
                              aria-hidden="true"
                              className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-[#ffdbd1] border-2 border-[#32302d] shadow-sm"
                            />
                            <div className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-[#ffdbd1] text-[16px] leading-none mt-0.5 shrink-0" aria-hidden="true">
                                {item.icon}
                              </span>
                              <div>
                                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold leading-5 text-white">{item.step}</div>
                                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#e7e1dc]">{item.detail}</div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ol>
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] leading-5 text-[#e7e1dc]/80 mt-4">
                        For wherever you are — time-stamped photos at every stage, materials verified, costs clear.
                      </p>
                    </div>
                  )}

                  <div className={`pt-4 mt-auto border-t flex items-center justify-between ${isDiaspora ? "border-white/10" : "border-[#dfc0b7]/15"}`}>
                    <button
                      type="button"
                      onClick={() => onOpenQuote(svc.title)}
                      className={`inline-flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 rounded-full ${isDiaspora ? "text-[#ffdbd1] hover:text-white" : "text-[#a43716] group-hover:text-[#c54f2c]"}`}
                    >
                      <span>Request quotation</span>
                      <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
                        arrow_forward
                      </span>
                    </button>
                    <span
                      className={`hidden sm:inline-flex items-center gap-1 font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.06em] uppercase ${isDiaspora ? "text-[#e7e1dc]/60" : "text-[#58423c]/60"}`}
                    >
                      Quotations free
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How we work */}
      <section className="w-full bg-[#f9f2ed] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 reveal-entry">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] block mb-2">Our Method</span>
            <h2
              className="font-['Fraunces',serif] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.03em] font-semibold text-[#1d1b18]"
            >
              How we work in your home: simple, predictable, clean.
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-7 text-[#58423c] mt-3">
              No hidden bills, no rubble left behind, and no extra trips for forgotten parts.
            </p>
          </div>
          {/* Editorial How we work: bento 7+5 / 5+3+4 — breaks 5-equal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {HOW_WE_WORK.map((step, idx) => {
              const span =
                idx === 0 ? 'lg:col-span-7' : idx === 1 ? 'lg:col-span-5' : idx === 2 ? 'lg:col-span-5' : idx === 3 ? 'lg:col-span-3' : 'lg:col-span-4';
              const featured = idx === 0;
              const darkLast = idx === 4;
              return (
                <div
                  key={step.title}
                  className={`rounded-2xl shadow-sm flex flex-col justify-between border ${span} ${featured ? 'p-8 md:p-10 bg-[#32302d] text-[#f6f0ea] border-white/10 relative overflow-hidden' : darkLast ? 'p-7 bg-[#ede7e2] border-[#dfc0b7]/20' : 'p-6 md:p-7 bg-white border-[#dfc0b7]/20'}`}
                >
                  {featured && <div aria-hidden="true" className="absolute -right-8 sm:-right-10 -top-8 sm:-top-10 w-28 sm:w-40 h-28 sm:h-40 max-w-[35vw] bg-[#a43716]/20 rounded-full blur-2xl pointer-events-none" />}
                  <div className="relative z-10">
                    <div className="relative inline-flex flex-col items-center mb-4">
                      <div
                        className={`w-11 h-11 flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-[16px] font-bold border-2 -rotate-1 shadow-sm ${featured ? 'bg-white border-white text-[#1d1b18]' : 'bg-[#fff8f3] border-[#a43716] text-[#a43716]'}`}
                        style={{ borderRadius: featured ? '46% 54% 52% 48% / 48% 42% 56% 52%' : '42% 58% 52% 48% / 48% 42% 58% 52%' }}
                      >
                        {step.n}
                      </div>
                      <span aria-hidden="true" className={`mt-1.5 h-1.5 rounded-full w-9 -rotate-1 ${featured ? 'bg-[#ffdbd1]/70' : 'bg-[#ffdcbd]'}`} />
                    </div>
                    <h4 className={`font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold leading-7 tracking-[-0.005em] mb-2 ${featured ? 'text-white text-[20px]' : 'text-[#1d1b18]'}`}>{step.title}</h4>
                    <p className={`font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-7 ${featured ? 'text-[#e7e1dc]' : 'text-[#58423c]'}`}>{step.desc}</p>
                  </div>
                  <div
                    className={`pt-4 mt-5 border-t flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold tracking-[0.04em] uppercase relative z-10 ${featured ? 'border-white/15 text-[#ffdbd1]' : 'border-[#f3ede7] text-[#58423c]'}`}
                  >
                    <span className={`material-symbols-outlined text-[16px] leading-none ${featured ? 'text-[#ffb5a0]' : 'text-[#516257]'}`} aria-hidden="true">
                      {step.footIcon}
                    </span>
                    <span>{step.foot}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Problem Finder — prominent differentiated UX */}
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-28 reveal-entry">
        <div className="relative bg-[#f3ede7] rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm border border-[#dfc0b7]/25 overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 bg-[#a43716]/[0.06] rounded-full blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 bg-[#ffdcbd]/60 rounded-full blur-2xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase font-semibold text-[#7b542b] mb-3">
                <span className="w-6 h-px bg-[#a43716]/40" aria-hidden="true" />
                Free diagnosis · Nationwide
              </span>
              <h3 className="font-['Fraunces',serif] text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.03em] font-semibold text-[#1d1b18]">Not sure what kind of plumber you need?</h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] md:text-[16px] leading-7 text-[#58423c] mt-3 max-w-xl">
                Tap what matches your situation and we&apos;ll explain the likely cause, how we fix it without needless damage, and how soon we can be there.
              </p>
              <div className="flex flex-wrap gap-3 mt-8" role="group" aria-label="Problem finder">
                {DIAG_LABELS.map((label, idx) => {
                  const icons = ["water_drop", "shower", "sanitizer", "settings"] as const;
                  const active = activeDiag === idx;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setActiveDiag(idx)}
                      aria-pressed={active}
                      className={`min-h-[48px] inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.02em] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer ${active ? "bg-[#a43716] text-white shadow-md scale-[1.01]" : "bg-white text-[#1d1b18] hover:bg-[#ede7e2] border border-[#dfc0b7]/25 hover:border-[#a43716]/20"}`}
                    >
                      <span className={`material-symbols-outlined text-[18px] leading-none ${active ? "text-white" : "text-[#a43716]"}`} aria-hidden="true">
                        {icons[idx]}
                      </span>
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="hidden lg:block relative rounded-2xl overflow-hidden bg-white border border-[#dfc0b7]/20 shadow-sm self-stretch min-h-[280px]">
              <img
                src="/plumber-working-in-kitchen.jfif"
                alt="Plumber at work — serving nationwide, new builds and lived-in homes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b18]/70 via-[#1d1b18]/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 text-[#1d1b18] text-[11px] font-bold tracking-[0.06em] uppercase shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2d7a3b] animate-pulse" aria-hidden="true" />
                  Nationwide
                </div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 font-medium mt-2 text-white/90">Real asset from site — tidy install, pressure-tested before close-up.</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 bg-white rounded-2xl p-6 md:p-8 lg:p-8 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between border border-[#dfc0b7]/20 transition-opacity duration-200">
            <span aria-hidden="true" className="hidden md:block absolute left-0 top-6 bottom-6 w-1 bg-[#a43716] rounded-full" />
            <div className="space-y-3 max-w-xl md:pl-4">
              <div className="flex items-center gap-2 text-[#a43716] font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-bold tracking-[0.08em] uppercase">
                <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
                  search
                </span>
                <span>{diag.tag}</span>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] md:text-[22px] font-bold leading-7 tracking-[-0.03em] text-[#1d1b18]">{diag.title}</h4>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] md:text-[16px] leading-7 text-[#58423c]">{diag.desc}</p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] md:text-[14px] leading-6 text-[#58423c] pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f9f2ed] border border-[#dfc0b7]/20">
                  <span className="material-symbols-outlined text-[16px] leading-none text-[#a43716]" aria-hidden="true">
                    schedule
                  </span>
                  {diag.time}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#d4e7d8]/60 border border-[#516257]/15">
                  <span className="material-symbols-outlined text-[16px] leading-none text-[#516257]" aria-hidden="true">
                    thumb_up
                  </span>
                  {diag.benefit}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-[220px] shrink-0">
              <a
                href={`https://wa.me/2349031386928?text=${encodeURIComponent(diag.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#a43716] text-white font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] shadow-md hover:bg-[#c54f2c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
              >
                <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
                  chat
                </span>
                Fix this now
              </a>
              <button
                type="button"
                onClick={() => onOpenQuote(diag.title)}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#f3ede7] text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] hover:bg-[#ede7e2] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
              >
                <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
                  calendar_month
                </span>
                Book check
              </button>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] leading-4 text-[#58423c]/60 text-center">Quotations free · Abeokuta base</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
