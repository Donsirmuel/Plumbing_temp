import React, { useEffect, useRef, useState } from "react";

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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEhPlWNJIKNSSFJa2aSm8P9OPaAI6jrlnfHZGpGy6-nC2yPmu2hShq71JZU0wDJ5aH1cVqsvTEqj1O2Www_cadvPkFcRgCFVma5mljsJB6WHByf3fF923mKhkKO_ArR8uppL5zpAZtK7KFo0WRB2SibK5g0fAobWO-TvjiwDXOLkNMqQ_A89gdQS4BhlFDbGD4RO7e9c4-wFtrC4L5iDyIKFIY_RX_H3ct9x1KlJ_T22bFTOXChWGw",
    alt: "Leak detector resting against bathroom wall",
  },
  {
    title: "Water Pressure, Pumps & Boreholes",
    desc: "New booster sets for new sites and servicing for weak showers, noisy pumps and airlocked tank supplies.",
    highlights: [
      "Booster and submersible pump install & service",
      "Auto float switches to stop overflows",
      "Airlock clearing for steady upper-floor pressure",
    ],
    icon: "speed",
    iconWrap: "bg-[#d4e7d8] text-[#0f1f16]",
    checkColor: "text-[#516257]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1953DnPaS09R6DKgsthWxCih-5clJdHKmQRbSc6QBsk_6IZARMeGOfcU00i4szbTaIus9tNyeHg7eaMpDF4FBCO97WzjcqTsCCEFUvQ5bhHyFCuBfiBjjRKT-IXxmbFdylnJgEzfsvPhf6YcZk4ypMK-3VZoO-_SoSwewlRgKUD0mYnhdHreGpGqQMYfQOaXDErrHaQabRSvgMoOTghSHjlpd_KpSmoPf76OfhfgZGRUNwDpf4CLB",
    alt: "Booster pump with brass valves in utility room",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDly6EehIsiUUwbAnc78f7jbXbg-VgVho-latSGXwSGN9fcSMUzf4r8XwT0TNiPTHttTLMKL-xazuqgrz2CqeP2-w5eR8vPKwU_rfeB55CV-Qb0IEMtq1KP2cLXoImJpwHdcW6HoVWiDoOk_YoEvI9IAOqRtIlU2Aaj1DTicoy_p0HwY5gCQmGGstn7AyO2dtZDeM9nzD7ZWgmS9e4NvNuqAK_gEO9P1bSs9Tw80E034rY15Iaf_4La",
    alt: "Rainfall shower with matte black mixer and glass partition",
  },
  {
    title: "Water Heaters & Pure Water Tanks",
    desc: "Safe heater installs with relief valves, plus whole-house filters so borehole water runs clear — new and existing sites.",
    highlights: [
      "Safety relief valves on every heater",
      "Whole-house sediment and carbon filtration",
      "Overhead tank cleaning and pipe repair",
    ],
    icon: "water_heater",
    iconWrap: "bg-[#a43716]/10 text-[#a43716]",
    checkColor: "text-[#a43716]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqZkbJzwxRkixHBD3SpKGZPtDBxr_2eCJ6ll-wsG9rtWr8cqwWngwGiARqX4Wu4TtjQK6ISPItMlGqJ7h9FZ1x1cUGS82HwKBsIqepUx02Gmfm7BNB68cJpIcOaV_1a6HTVCSmnlcJqxtvKmmYVXz8XLQS9arcv6A8TMqA-T_omI9nxSNn9kE57TbGpoY46fhtIxMWcrGzRbFpn0uSg0Ri3Elhuxt-y8qpZ1ZTFuhqUJz96FGbspRJ",
    alt: "Water filtration system with clear housings and tank manifold",
  },
  {
    title: "Drainage, Soakaways & Odour Fixes",
    desc: "We stop sewer smells for good — deep water-seal traps, unblocked showers and correctly sloped waste lines for new and occupied homes.",
    highlights: [
      "Permanent fix for bathroom sewer odour",
      "Mechanical clearing of grease & hair blocks",
      "Re-levelling for garden and soakaway lines",
    ],
    icon: "sanitizer",
    iconWrap: "bg-[#d4e7d8] text-[#0f1f16]",
    checkColor: "text-[#516257]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCr09v_EKT3KFSEdlyQfpDQvFeslX_m4Nc1S0N1ThpTd7_IrqJ4SepAHYe5j87PLF0DLBdXNimZzl_TzB5EFlPJRhrLKkbff99-GepQY36sCayv8UFQffETiBxErULg5PlsdivzYvYgNojxaRcXKNc5pRy77Jduowqy4U8D1z_gs9Cgr4Bp3m2Zk3pWbm4zK9ai5BcpE8_h-mk2h0t1qYN8jAZTMTHvxEwN_pziFyb1LvECtKfI-AAf",
    alt: "Linear shower drain flush with porcelain tiles",
  },
  {
    title: "Diaspora & Remote Property Care",
    desc: "Building from abroad? We share honest video updates, verify materials and keep costs clear — for new builds and repairs while you are away.",
    highlights: [
      "Time-stamped photo & video at every stage",
      "Pressure testing before walls are sealed",
      "WhatsApp updates on UK/US-friendly hours",
    ],
    icon: "public",
    iconWrap: "bg-[#a43716] text-white",
    checkColor: "text-[#a43716]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIwjdba4Tmti7oNhYGvfsJ02SpMvfv8XvOxn8T78NjLZvhk1J61SJ-7MY2_eweoPIFMWs4PgJ-oSLEUE8zDVysXDHNS3UhKXaG3kJ1lcRdEZ84SCgk9EOeanyz-vk_oiZWz6yveM5gnj5OP9Y9evDfMHSpniOuomnxTbcvKGu9HX8zFpTAlkV42WHPOm63DkR1Ps1c-CIl4NNet4SGqufV98DxvF8W8uk2zUkE8ukJBXACDZi6Z3OM",
    alt: "Tablet showing pressure-tested plumbing manifold on site",
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
    title: "Workmanship Backing",
    desc: "You get a work receipt and warranty doc on request. Workmanship backing — warranty doc on request.",
    footIcon: "verified_user",
    foot: "Warranty doc on request",
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
      <div className="relative w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 pt-8 pb-16 overflow-visible">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#a43716]/[0.05] rounded-full blur-3xl -z-10"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left text */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 reveal-entry">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#d4e7d8] text-[#0f1f16] text-[11px] font-semibold tracking-[0.08em] uppercase leading-none">
              <span className="w-2 h-2 rounded-full bg-[#516257] animate-pulse" aria-hidden="true" />
              Honest Plumbing · Homes &amp; Commercial Properties
            </div>
            <h1
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[38px] leading-[46px] lg:text-[56px] lg:leading-[64px] tracking-[-0.04em] font-bold text-[#1d1b18]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Plumbing work that lasts, done without shortcuts.
            </h1>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-7 text-[#58423c] max-w-xl">
              From drips and low pressure to full bathrooms and new pipe runs; for new sites and existing homes. We arrive on time with the right parts, quote upfront, and leave your space tidy throughout the period of working on your property.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ede7e2] text-[#1d1b18] text-[13px] font-semibold leading-none">
                <span className="material-symbols-outlined text-[#a43716] text-[18px] leading-none" aria-hidden="true">
                  verified
                </span>
                No hidden charges
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ede7e2] text-[#1d1b18] text-[13px] font-semibold leading-none">
                <span className="material-symbols-outlined text-[#a43716] text-[18px] leading-none" aria-hidden="true">
                  security
                </span>
                Workmanship backing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ede7e2] text-[#1d1b18] text-[13px] font-semibold leading-none">
                <span className="material-symbols-outlined text-[#a43716] text-[18px] leading-none" aria-hidden="true">
                  cleaning_services
                </span>
                Clean floor promise
              </span>
            </div>
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
              <a
                href={`https://wa.me/2349031386928?text=${encodeURIComponent("Hello OOH JAY, I need plumbing help — can you advise?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f3ede7] text-[#1d1b18] text-[13px] font-semibold shadow-sm hover:bg-[#ede7e2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
              >
                <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
                  chat
                </span>
                WhatsApp for free advice
              </a>
              <a
                href="tel:+2349031386928"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#dfc0b7]/40 text-[#1d1b18] text-[13px] font-semibold hover:bg-[#f9f2ed] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
              >
                <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
                  call
                </span>
                0903 138 6928
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#f3ede7] rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(31,29,26,0.08)] p-3">
              <div className="h-96 w-full rounded-xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-VGDLmjwWY3-e6n183CRyx_ExdUG2_0T7KDUGUM_r-irzDtheBy3P9FHEFQgh5dcIgMf_73BotH6o9xxAtEST9-flEMkrZ-iVa8Wr0yLGcnY5-FbTU2_S3Qg_XT_E1GRS_GFHTmp7kol3xiQtn3LIx7bq9RUTwccFz-CbnO_K86u3zHe1-I7rmytbVblWeVVWaK7cYDdm_e6Tzioojt44wWj1QJzu9vhXAcE1I5RWkBfZUlC3rfKL"
                  alt="Plumber installing polished brass fittings in sunlit bathroom with terracotta tiles"
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

      {/* Services grid */}
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-entry">
          <div className="max-w-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] block mb-2">Detailed Scope of Work</span>
            <h2
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.04em] font-bold text-[#1d1b18]"
            >
              Everyday plumbing problems, solved with care.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group border ${svc.title === "Diaspora & Remote Property Care" ? "bg-[#ede7e2] border-[#dfc0b7]/30" : "bg-white border-[#dfc0b7]/20"}`}
            >
              <div className="h-64 w-full overflow-hidden bg-[#f3ede7]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={svc.image}
                  alt={svc.alt}
                  loading="lazy"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${svc.iconWrap}`}>
                  <span className="material-symbols-outlined text-[22px] leading-none" aria-hidden="true">
                    {svc.icon}
                  </span>
                </div>
                <h3
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] leading-7 tracking-[-0.04em] font-bold text-[#1d1b18] mb-3"
                >
                  {svc.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-7 text-[#58423c] mb-4">{svc.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {svc.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                      <span className={`material-symbols-outlined text-[18px] leading-none mt-[2px] shrink-0 ${svc.checkColor}`} aria-hidden="true">
                        check_circle
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 mt-auto border-t border-[#dfc0b7]/15">
                  <button
                    type="button"
                    onClick={() => onOpenQuote(svc.title)}
                    className="inline-flex items-center gap-2 text-[#a43716] font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-semibold tracking-[0.04em] group-hover:text-[#c54f2c] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 rounded-full"
                  >
                    <span>Request quotation</span>
                    <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="w-full bg-[#f9f2ed] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 reveal-entry">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] block mb-2">Our Method</span>
            <h2
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.04em] font-bold text-[#1d1b18]"
            >
              How we work in your home: simple, predictable, clean.
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-7 text-[#58423c] mt-3">
              No hidden bills, no rubble left behind, and no extra trips for forgotten parts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {HOW_WE_WORK.map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between border border-[#dfc0b7]/20"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#f3ede7] text-[#a43716] font-['Plus_Jakarta_Sans',sans-serif] text-[16px] font-bold flex items-center justify-center mb-4">
                    {step.n}
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] font-semibold leading-7 tracking-[-0.005em] text-[#1d1b18] mb-2">{step.title}</h4>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-7 text-[#58423c]">{step.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#f3ede7] flex items-center gap-2 text-[#58423c] font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] uppercase">
                  <span className="material-symbols-outlined text-[16px] leading-none text-[#516257]" aria-hidden="true">
                    {step.footIcon}
                  </span>
                  <span>{step.foot}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Problem Finder */}
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-20 md:py-24 reveal-entry">
        <div className="bg-[#f3ede7] rounded-3xl p-8 md:p-12 shadow-sm border border-[#dfc0b7]/20">
          <div className="max-w-2xl mb-8">
            <h3
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] md:text-[28px] leading-9 font-bold tracking-[-0.04em] text-[#1d1b18]"
            >
              Not sure what kind of plumber you need?
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-2">
              Pick what matches your situation and we&apos;ll explain the likely cause and how soon we can fix it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mb-8" role="group" aria-label="Problem finder">
            {DIAG_LABELS.map((label, idx) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveDiag(idx)}
                aria-pressed={activeDiag === idx}
                className={`px-4 py-3 rounded-full font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer ${activeDiag === idx ? "bg-[#a43716] text-white" : "bg-white text-[#1d1b18] hover:bg-[#ede7e2] border border-[#dfc0b7]/20"}`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start justify-between border border-[#dfc0b7]/20 transition-opacity duration-200">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-[#a43716] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold tracking-[0.04em] uppercase">
                <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
                  search
                </span>
                <span>{diag.tag}</span>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[19px] font-semibold leading-7 tracking-[-0.005em] text-[#1d1b18]">{diag.title}</h4>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-7 text-[#58423c]">{diag.desc}</p>
              <div className="flex flex-wrap items-center gap-4 font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-7 text-[#58423c] pt-2">
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] leading-none text-[#a43716]" aria-hidden="true">
                    schedule
                  </span>
                  {diag.time}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] leading-none text-[#a43716]" aria-hidden="true">
                    thumb_up
                  </span>
                  {diag.benefit}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href={`https://wa.me/2349031386928?text=${encodeURIComponent(diag.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#a43716] text-white font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] shadow-sm hover:bg-[#c54f2c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
              >
                <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
                  chat
                </span>
                Fix this now
              </a>
              <button
                type="button"
                onClick={() => onOpenQuote(diag.title)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f3ede7] text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] hover:bg-[#ede7e2] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
              >
                <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
                  calendar_month
                </span>
                Book check
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="w-full bg-[#516257] text-white py-16 reveal-entry">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <h3
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[26px] md:text-[32px] leading-[36px] md:leading-[40px] tracking-[-0.04em] font-bold text-[#fff8f3] mb-3"
            >
              Got a leak or water emergency right now?
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-7 text-[#e7e1dc]">
              Talk directly to a licensed plumber. Based on Abiola Way, Abeokuta — serving Lagos & nationwide for new builds and repairs.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="tel:+2349031386928"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#a43716] text-white font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] shadow-lg hover:bg-[#c54f2c] transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#516257]"
            >
              <span className="material-symbols-outlined text-[20px] leading-none" aria-hidden="true">
                call
              </span>
              Call Now: 0903 138 6928
            </a>
            <a
              href={`https://wa.me/2349031386928?text=${encodeURIComponent("Hello OOH JAY, I have a water emergency — please help.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white text-[#1d1b18] font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold tracking-[0.04em] shadow-md hover:bg-[#f9f2ed] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#516257]"
            >
              <span className="material-symbols-outlined text-[20px] leading-none text-[#a43716]" aria-hidden="true">
                chat
              </span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
