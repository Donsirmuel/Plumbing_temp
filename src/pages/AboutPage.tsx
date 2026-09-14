import React, { useEffect, useRef } from 'react';
import { ReadMore } from '../components/ReadMore';

export interface AboutPageProps {}

const HERO_MANIFOLD = '/plumber-laying-pipes.jfif';
const CRAFT_INSPECT = '/close-up-of-basin-install.jfif';
const PORTRAIT_OJ = '/plumber-working-in-kitchen.jfif';
const PORTRAIT_BABA = '/plumber-in-kitchen.jfif';
const PORTRAIT_CHIDIMA = '/plumbing-installation.jfif';

export const AboutPage: React.FC<AboutPageProps> = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>('.reveal-entry');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
      );
      els.forEach((el) => {
        if (!el.classList.contains('is-visible')) io.observe(el);
      });
      return () => io.disconnect();
    }
    els.forEach((el) => el.classList.add('is-visible'));
  }, []);

  return (
    <div ref={rootRef} className="w-full bg-[#fff8f3] text-[#1d1b18]">
      {/* SECTION 1: EDITORIAL HERO STORY */}
      <section id="about-hero" className="relative w-full overflow-hidden pb-12 md:pb-16 reveal-entry">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -left-20 w-72 sm:w-96 h-72 sm:h-96 max-w-[80vw] bg-[#ffb5a0]/20 rounded-full blur-3xl"
          />
          <div className="flex flex-col gap-6 pt-8 md:pt-12 max-w-4xl">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-[#7b542b]">
              <span className="w-6 h-px bg-[#dfc0b7]" aria-hidden="true"></span>Our Story · Since 2014
            </span>
            <h1
              className="font-['Fraunces',serif] text-[38px] leading-[46px] md:text-[56px] md:leading-[64px] tracking-[-0.03em] font-semibold text-[#1d1b18] text-balance"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Plumbers who treat your home like our own.
            </h1>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-7 text-[#58423c] max-w-3xl">
              Too many households know the same frustration; a late arrival, pipework hidden
              without proper testing, and silence when a joint starts to crumble weeks later. OOH
              JAY was built to be the steadier alternative. Operating nationwide, we bring careful
              plumbing for new site builds and repairs.
            </p>
          </div>

          {/* Hero Panoramic Feature Strip */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            <div className="md:col-span-8 rounded-2xl overflow-hidden shadow-md h-[340px] sm:h-[420px] relative group bg-[#f3ede7]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                src={HERO_MANIFOLD}
                alt="Plumber laying pipes for new supply manifold — neat runs before close-up, Abeokuta"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#32302d]/80 via-[#32302d]/20 to-transparent flex items-end p-6">
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 font-semibold text-white max-w-lg"
                >
                  Precise copper &amp; multi-layer manifolds.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="p-6 bg-[#f3ede7] rounded-2xl shadow-sm flex flex-col gap-2">
                <h3
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18]"
                >
                  Zero shortcuts. Certified hands only.
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                  Every OOH JAY technician completes an accredited apprenticeship and
                  carries verified trade certification. No casual labour!
                </p>
              </div>
              <div className="p-6 bg-[#516257] text-white rounded-2xl shadow-md flex items-center justify-between">
                <div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-semibold leading-7 text-white mt-1">
                    Abeokuta · Lagos &amp; Beyond
                  </p>
                  <p className="text-[13px] font-medium tracking-[0.04em] text-white/80 mt-1">
                    Serving Nigerians all over the country and Abroad.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-[#ffdbd1] shrink-0">
                  <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                    schedule
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL 2-COLUMN STORY — TRAINED ON MODERN STANDARDS */}
      <section className="w-full py-12 md:py-20 bg-[#f9f2ed] reveal-entry">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[480px] bg-[#f3ede7]">
                <img
                  className="w-full h-full object-cover"
                  src={CRAFT_INSPECT}
                  alt="Close-up of basin install — neat silicone and fittings as fitted, watertight finish"
                  loading="lazy"
                />
              </div>
              <div className="relative lg:-mt-20 lg:-mr-8 mx-3 sm:mx-4 p-6 bg-white rounded-2xl shadow-xl z-10 flex flex-col gap-2">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">
                  The OOH JAY Standard
                </span>
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-7 font-semibold text-[#1d1b18]"
                >
                  “If a pipe will live behind tile for twenty years, we fit it with
                  precision; aligned, tested, and documented.”
                </p>
                <span className="text-[14px] font-semibold text-[#58423c] mt-1">
                  — Engr. Julius Adeleke, Master Plumbing Craftsman
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-4">
              <div className="flex flex-col gap-2">
                <h2
                  className="font-['Fraunces',serif] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.03em] font-semibold text-[#1d1b18]"
                >
                  Trained on modern standards. Trusted across the globe.
                </h2>
              </div>
              <div className="flex flex-col gap-4 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                <p>
                  When we began in Abeokuta, much of the trade still relied on improvisation —
                  tape wound the wrong way, thin galvanised runs turning failures after two rainy
                  seasons, and pressure that doesn't exist when two taps run at once. We chose a different
                  path, operating with a nationwide mindset from the start for new sites and lived-in
                  homes alike.
                </p>
                <p className="p-4 bg-white rounded-xl shadow-sm text-[#1d1b18] text-[15px] leading-6">
                  <strong className="font-semibold block text-[#a43716] mb-1">
                    A steadier link for Nigerians in the UK, USA &amp; Canada
                  </strong>
                  Building or caring for a home from abroad is hard when updates depend on
                  blurred photos only. We become your local eyes and hands: timestamped video
                  diagnostics, itemised material receipts, and live WhatsApp walk-throughs
                  before, during, and after the work.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl shadow-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a43716] text-[20px]" aria-hidden="true">
                    videocam
                  </span>
                  <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    Video Audits
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#516257] text-[20px]" aria-hidden="true">
                    receipt_long
                  </span>
                  <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    Direct Invoicing
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7b542b] text-[20px]" aria-hidden="true">
                    verified_user
                  </span>
                  <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    Premium Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 4 THINGS WE NEVER COMPROMISE ON */}
      <section className="w-full py-12 md:py-20 bg-[#f9f2ed] reveal-entry">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-xl flex flex-col gap-2">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">
                Our Standards
              </span>
              <h2
                className="font-['Fraunces',serif] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.03em] font-semibold text-[#1d1b18]"
              >
                The 4 things we promise always.
              </h2>
            </div>
          </div>
          {/* Editorial bento: featured + varied — breaks 2×2 template */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Featured — Price — dark editorial, larger */}
            <div className="lg:col-span-7 p-8 md:p-10 bg-[#32302d] rounded-2xl shadow-xl flex flex-col justify-between border border-white/10 relative overflow-hidden">
              <div aria-hidden="true" className="absolute -right-12 -top-12 w-48 h-48 bg-[#a43716]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#ffdbd1] border border-white/10">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                      payments
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#a43716] text-white text-[11px] font-semibold tracking-[0.06em] uppercase">Most asked about</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] md:text-[24px] leading-7 font-bold tracking-[-0.04em] text-white mb-3">
                  Price made clear before work begins.
                </h3>
                <ReadMore
                  text="You receive a written diagnostic and cost of project quotation before we begin. Labour and materials listed separately — no secret fees, no inflated parts price. Quotations free via WhatsApp."
                  clampLines={2}
                  variant="dark"
                />
              </div>
              <div className="relative z-10 mt-8 bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/10">
                <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-white flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ffdbd1] text-[18px]" aria-hidden="true">
                    verified
                  </span>{' '}
                  Written Estimates & Quotations Guaranteed
                </span>
              </div>
            </div>

            {/* Clean — compact, light */}
            <div className="lg:col-span-5 p-7 md:p-8 bg-white rounded-2xl shadow-sm flex flex-col justify-between border border-black/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#d4e7d8]/60 flex items-center justify-center text-[#516257]">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                      cleaning_services
                    </span>
                  </div>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18] mb-2">
                  Clean and tidy job guaranteed.
                </h3>
                <ReadMore
                  text="Your Homes are treated as living spaces, not sites. Sites are treated as safe structures. No hazardous treatments or filthy after-job environment."
                  clampLines={2}
                />
              </div>
              <div className="mt-6 bg-[#f9f2ed] p-3 rounded-xl">
                <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>{' '}
                  Safety & Cleanliness Guarantee
                </span>
              </div>
            </div>

            {/* Parts — warm tint, mid */}
            <div className="lg:col-span-5 p-7 md:p-8 bg-[#ede7e2] rounded-2xl shadow-sm flex flex-col justify-between border border-[#dfc0b7]/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7b542b] shadow-sm">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                      plumbing
                    </span>
                  </div>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18] mb-2">
                  Original parts and Proper fittings.
                </h3>
                <ReadMore
                  text="We do not fit thin counterfeit fittings or brittle unrated PVC. Our stock is sourced from certified suppliers: built to hold pressure and resist aggressive borehole chemistry."
                  clampLines={2}
                />
              </div>
              <div className="mt-6 bg-white p-3 rounded-xl shadow-sm">
                <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>{' '}
                  Zero Counterfeit Material Policy
                </span>
              </div>
            </div>

            {/* Support — spans larger to close the bento */}
            <div className="lg:col-span-7 p-7 md:p-8 bg-white rounded-2xl shadow-sm flex flex-col justify-between border border-black/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ffdbd1]/60 flex items-center justify-center text-[#a43716]">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                      ring_volume
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#7b542b] bg-[#f3ede7] px-2.5 py-1 rounded-full">Up to 1-year</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] md:text-[20px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18] mb-2">
                  We pick up the phone when you call.
                </h3>
                <ReadMore
                  text="Courtesy at payment is guaranteed and still exists months later. We answer, attend, and correct issues with our workmanship — high-grade workmanship assured, every joint checked."
                  clampLines={2}
                />
              </div>
              <div className="mt-6 bg-[#f9f2ed] p-3 rounded-xl">
                <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>{' '}
                  High-grade workmanship assured
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MEET THE MASTER PLUMBERS & TEAM */}
      <section className="w-full py-12 md:py-20 bg-[#fff8f3] reveal-entry">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">
              The People Behind the Wrenches
            </span>
            <h2
              className="font-['Fraunces',serif] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.03em] font-semibold text-[#1d1b18] mt-1"
            >
              Real artisans, no hired hands.
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-2">
              The senior technicians who enter your home equipped with years of experience.
            </p>
          </div>
          {/* Editorial artisans: founder featured larger, varied heights — breaks 3-equal — lighter-touch chrome */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
            <div className="lg:col-span-6 bg-[#f3ede7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col border border-[#dfc0b7]/20">
              <div className="h-[380px] lg:h-[520px] w-full overflow-hidden relative bg-[#ede7e2]">
                <img
                  className="w-full h-full object-cover"
                  src={PORTRAIT_OJ}
                  alt="Plumber at work in kitchen — tidy install as documented for quality review"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[#a43716] text-[11px] font-semibold tracking-[0.05em] uppercase shadow-sm">
                  Co-Founder · Since 2014
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1d1b18]/70 via-[#1d1b18]/20 to-transparent p-6 pt-12">
                  <p className="text-white text-[13px] font-semibold tracking-[0.04em] uppercase opacity-90">Abeokuta · Lagos · Nationwide</p>
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18]">
                    Olumide “OJ” Oladipo
                  </h3>
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] mt-1">
                    Master Mechanical Plumber &amp; Hydronics Lead
                  </p>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-7 text-[#58423c] mt-3">
                    Trained under port hydraulic engineers before founding OOH JAY in 2014. Leads acoustic leak tracing, booster balancing and sanitary layout for high-spec bathrooms. Your direct line when water must be silent.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-2 pt-4 border-t border-[#dfc0b7]/20">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    City &amp; Guilds Mechanical Cert.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 content-start">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col border border-[#dfc0b7]/15">
                <div className="h-56 w-full overflow-hidden relative bg-[#ede7e2]">
                  <img
                    className="w-full h-full object-cover"
                    src={PORTRAIT_BABA}
                    alt="Plumber at work in kitchen — checking supply lines and neat connections"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#f3ede7]/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#516257] text-[11px] font-semibold tracking-[0.04em] uppercase shadow-sm">
                    Lead Diagnostician
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18]">
                      Babatunde Adeleke
                    </h3>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] mt-0.5">
                      Ultrasonic Leak &amp; Pressure Specialist
                    </p>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-3">
                      Resolving hidden sub-surface leaks without needless tile breakout. Runs diaspora video audits and commercial flow surveys from Abeokuta to Lagos Island.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#516257] text-[16px]" aria-hidden="true">
                      verified
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                      Level 3 Non-Destructive Testing
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#ede7e2] rounded-2xl overflow-hidden shadow-sm flex flex-col border border-[#dfc0b7]/20">
                <div className="h-64 w-full overflow-hidden relative bg-[#f3ede7]">
                  <img
                    className="w-full h-full object-cover"
                    src={PORTRAIT_CHIDIMA}
                    alt="Plumbing installation as fitted — neat pipe runs coordinated before close-up"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#7b542b] text-[11px] font-semibold tracking-[0.04em] uppercase shadow-sm">
                    Head of Quality
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18]">
                      Engr. Chidinma Eze
                    </h3>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] mt-0.5">
                      Project Director &amp; Diaspora Liaison
                    </p>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-3">
                      Oversees QA, verifies every pipe run against code, and leads diaspora milestone handovers — ensuring what is buried is worthy of being buried.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#516257] text-[16px]" aria-hidden="true">
                      verified
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                      NSE &amp; COREN Reg. Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investing in next generation */}
          <div className="mt-10 p-6 md:p-8 bg-[#32302d] text-[#f6f0ea] rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#ffb5a0]">
                Our Apprenticeship Academy
              </span>
              <h3
                className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] md:text-[26px] leading-8 md:leading-9 font-bold tracking-[-0.04em] text-white mt-1"
              >
                Investing in the next generation of Nigerian craftsmen.
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#e7e1dc] mt-2">
                Each year we welcome vocational graduates from technical colleges around
                Abeokuta and Ogun State for 18 months at our Abiola Way workshop — copper
                brazing, PEX press, and courteous site conduct — before they set foot in a
                client&apos;s home or on a Lagos site, for new builds and repairs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:+2349031386928"
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-[#a43716] text-white text-[14px] font-semibold tracking-[0.04em] rounded-full hover:bg-[#c54f2c] transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb5a0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#32302d]"
              >
                Reach out to us
              </a>
              <a
                href="https://wa.me/2349031386928"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-white/10 text-white text-[14px] font-semibold tracking-[0.04em] rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2 border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#32302d]"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  chat
                </span>{' '}
                WhatsApp Diaspora Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
