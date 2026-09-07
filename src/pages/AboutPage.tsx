import React, { useEffect, useRef } from 'react';

export interface AboutPageProps {}

const HERO_MANIFOLD =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDJb6I3wXeEyOYc5e5SSBs6OOlT6qqCavgTNnXhZuZP3jaepJ-erDjYI9_9MlWZLxNV-DkNvz1SntJd5DxipGeqOx92g1vazFK5Mj88bVEhh_MvHhSHd2Iyx6Is3cTIeBjSbWeeNSSTlr7YtvG-OevNnh7ZMaA9vCDZT7HGZsDU0JQ8c21kStgenJSYCUQWXxuTH55njB1DIYbilxNZsSHW82OVSi_gUzOdzFIRdVRaSFQtEsRhLzeV';
const CRAFT_INSPECT =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCD2K3VQmsjvKqmb3hDc_wdKyaPdWXGczpEI1PRx8O921dpQq-Bw2pDlZQBM-Dsr4N2TLVdxwm6IAxLRSuRKmi4_mMbpF1dubuLvZfqZ517hMxW0-zAoL958yVM7pV5lR0NJt3TTJZm7EizWaWYFktT4Z09vAdfuytudjC2dw1Z8cuWoCMXr_d-VX5YwIF2jRviIIj--NdAYLkQQ6dxMJw2j7OhNsXmStYvdWke1-v5te10FM8T_pRM';
const PORTRAIT_OJ =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA5sCf42Dzub4KmNbI42Lzb4qtcY5iD5L_YxwzmbqgN_5SrzwRTqexsSS2c8N8V9jUOTCyt_3wLKdtL3fXHoPhu2yvLfOyYLTb6oORzjhliPjdxU-juXKhE4UsmSiA0fQD7R1dQZiTqXxEpz4MnKfzyT6pBbEwKWbihYjO3dJI9ue5gwefIzEVNgnVwSjAJWiaedh_mp6r4NDUxE5SWtbM4ThCax9pp6k0Yh9_E6uaY6q4jz3YAE9-Y';
const PORTRAIT_BABA =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBP6ZA140tjX-g-3EuX97gTup_CNU9T_hihktp3t505EA43m-piZg_53d1xYVyvw7P36QKtrITKUQ6oZkOshuL3FGbCVtRtGF7WBvpRn48c3a3SnbR9hT6u6Rqb494EWnZ9eQrcq6qgDHX3D6JC6ZHGWZfhOPg-hi2J7wHTgC_2axehLfEQqSC3pQwfgNYvmWmKoUcVnod_rNANwN7OUfYOhmIb1EYPRNQoUxw-s-s7qibQr83jc-G-';
const PORTRAIT_CHIDIMA =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDl0sH6LCgVcxK8OLecb6kuYo0krkLy0bXIGsKDA5_mzrmUultGUlvncpjhrMd8aaI4uoL13iL0dpZP8lCll_ROwrurUwoTCrGA1QPJFjFxy-Hqq-5UOX2xhRdk8ALnp5FrwhIUTf373iS3a6xFwpbb1jf2OKqkD0bqy-5NNqdnkDYwbC6UTSrtjKxkiQtPDRALiZMKcY_-glQ2n4ZvFtegaBb3vlQX3K5CCfmRrsMM3CmWhj1nnaTG';

export const AboutPage: React.FC<AboutPageProps> = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>('.reveal-entry');
    const hero = root.querySelector<HTMLElement>('#about-hero');
    if (hero) {
      const heroEntries = hero.querySelectorAll<HTMLElement>('.reveal-entry');
      heroEntries.forEach((el, i) => {
        window.setTimeout(() => el.classList.add('is-visible'), 90 + i * 110);
      });
    }
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
      <section id="about-hero" className="relative w-full overflow-hidden pb-12 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -left-20 w-96 h-96 bg-[#ffb5a0]/20 rounded-full blur-3xl"
          />
          <div className="flex flex-col gap-6 pt-8 md:pt-12 max-w-4xl">
            <div className="reveal-entry inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#f3ede7] w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#a43716]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#1d1b18]">
                Our Story · 10+ Years in the Trade
              </span>
            </div>
            <h1
              className="reveal-entry font-['Newsreader',serif] text-[38px] leading-[46px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] font-normal text-[#1d1b18] text-balance"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Plumbers who treat your home like our own.
            </h1>
            <p className="reveal-entry font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 text-[#58423c] max-w-3xl">
              Too many households know the same frustration — a late arrival, pipework hidden
              without proper testing, and silence when a joint starts to weep weeks later. OOH
              JAY was built to be the steadier alternative. From our workshop on Abiola Way,
              Abeokuta, Ogun State — serving Lagos &amp; nationwide — we bring careful
              plumbing, plain-spoken advice, and homes left tidy enough to walk barefoot
              through after we leave.
            </p>
          </div>

          {/* Hero Panoramic Feature Strip */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch reveal-entry">
            <div className="md:col-span-8 rounded-2xl overflow-hidden shadow-md h-[340px] sm:h-[420px] relative group bg-[#f3ede7]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                src={HERO_MANIFOLD}
                alt="Master plumber in terracotta uniform soldering a brass manifold with precise copper lines in a sunlit villa, warm editorial documentary style"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#32302d]/80 via-[#32302d]/20 to-transparent flex items-end p-6">
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-white max-w-lg"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Precise copper &amp; multi-layer manifolds — plumbed from our Abiola Way,
                  Abeokuta base and commissioned in homes from Abeokuta to Lagos &amp;
                  nationwide.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="p-6 bg-[#f3ede7] rounded-2xl shadow-sm flex flex-col gap-2">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">
                  Registered Master Guild
                </span>
                <h3
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Zero shortcuts. Certified hands only.
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                  Every OOH JAY technician completes an accredited guild apprenticeship and
                  carries verified trade certification. No casual labour, no subcontracted
                  guesswork.
                </p>
              </div>
              <div className="p-6 bg-[#516257] text-white rounded-2xl shadow-md flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#d4e7d8]">
                    Fastest Van Dispatch
                  </p>
                  <p
                    className="font-['Newsreader',serif] text-[22px] leading-7 font-medium text-white mt-1"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    Abeokuta · Lagos &amp; Beyond
                  </p>
                  <p className="text-[11px] font-medium tracking-[0.04em] text-white/80 mt-1">
                    Abiola Way, Abeokuta, Ogun State — field vans nationwide
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
      <section className="w-full py-12 md:py-20 bg-[#f9f2ed]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative reveal-entry">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[480px] bg-[#f3ede7]">
                <img
                  className="w-full h-full object-cover"
                  src={CRAFT_INSPECT}
                  alt="Veteran plumbing inspector examining a solid brass valve with focused attention in a warm neutral workshop"
                  loading="lazy"
                />
              </div>
              <div className="relative lg:-mt-20 lg:-mr-8 mx-3 sm:mx-4 p-6 bg-white rounded-2xl shadow-xl z-10 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#a43716]">
                  <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                    format_quote
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase">
                    The OOH JAY Standard
                  </span>
                </div>
                <p
                  className="font-['Newsreader',serif] text-[20px] leading-7 font-normal italic text-[#1d1b18]"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  “If a pipe will live behind tile for twenty years, we fit it like
                  watchmaking — aligned, tested, and documented.”
                </p>
                <span className="text-[13px] font-semibold text-[#58423c] mt-1">
                  — Engr. Julius Adeleke, Master Plumbing Craftsman
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-4 reveal-entry">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">
                  Craftsmanship · Accountability · Diaspora Peace of Mind
                </span>
                <h2
                  className="font-['Newsreader',serif] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.015em] font-normal text-[#1d1b18]"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  Trained on modern standards. Trusted across time zones.
                </h2>
              </div>
              <div className="flex flex-col gap-4 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                <p>
                  When we began in Abeokuta, much of the trade still relied on improvisation —
                  tape wound the wrong way, thin galvanised runs that scale shut after two rainy
                  seasons, and pressure that collapses when two taps run at once. We chose a
                  different foundation, operating from Abiola Way with a nationwide mindset from
                  the start.
                </p>
                <p>
                  We equipped the team with laser-levelled set-out, German-engineered press
                  tooling, and acoustic and thermal leak diagnostics that find faults without
                  tearing floors apart. And we kept the old courtesies: floor protectors down,
                  clean covers on, and a walk-through before we consider the job done.
                </p>
                <p className="p-4 bg-white rounded-xl shadow-sm text-[#1d1b18]">
                  <strong className="font-semibold block text-[#a43716] mb-1">
                    A steadier link for Nigerians in the UK, USA &amp; Canada
                  </strong>
                  Building or caring for a home from abroad is hard when updates are a single
                  blurred photo. We become your local eyes and hands: timestamped 4K video
                  diagnostics, itemised material receipts, and live WhatsApp walk-throughs
                  before, during, and after the work — all coordinated from our Abiola Way,
                  Abeokuta headquarters in Ogun State, with site presence Lagos to nationwide.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl shadow-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a43716] text-[20px]" aria-hidden="true">
                    videocam
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    4K Video Audits
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#516257] text-[20px]" aria-hidden="true">
                    receipt_long
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    Direct Invoicing
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7b542b] text-[20px]" aria-hidden="true">
                    verified_user
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    Keyholding Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE NUMBERS THAT MATTER */}
      <section className="w-full py-12 md:py-20 bg-[#fff8f3]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal-entry">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">
              Field Metrics
            </span>
            <h2
              className="font-['Newsreader',serif] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.015em] font-normal text-[#1d1b18] mt-1"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              The proof is in the pressure gauge.
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-2">
              Quiet, verifiable numbers from ten years of daily plumbing — logged from our
              Abiola Way, Abeokuta base to sites nationwide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="reveal-entry p-6 bg-[#f3ede7] rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">Longevity</span>
                <span className="material-symbols-outlined text-[#58423c] text-[20px]" aria-hidden="true">
                  history_toggle_off
                </span>
              </div>
              <div className="my-4">
                <span
                  className="font-['Newsreader',serif] text-[48px] leading-[52px] tracking-[-0.02em] font-medium text-[#a43716]"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  10+
                </span>
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18] mt-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Years Active Trade
                </p>
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c]">
                Continuous operations from Abiola Way, Abeokuta — serving duplexes, compounds
                and light commercial facilities nationwide since 2014.
              </p>
            </div>
            <div className="reveal-entry p-6 bg-[#f3ede7] rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#516257]">Delivered</span>
                <span className="material-symbols-outlined text-[#58423c] text-[20px]" aria-hidden="true">
                  domain
                </span>
              </div>
              <div className="my-4">
                <span
                  className="font-['Newsreader',serif] text-[48px] leading-[52px] tracking-[-0.02em] font-medium text-[#516257]"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  1,400+
                </span>
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18] mt-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Completed Properties
                </p>
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c]">
                Homes in Abeokuta, penthouses in Victoria Island and estates across Lagos,
                Abuja and Ibadan — all logged with test certificates.
              </p>
            </div>
            <div className="reveal-entry p-6 bg-[#f3ede7] rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Response</span>
                <span className="material-symbols-outlined text-[#58423c] text-[20px]" aria-hidden="true">
                  bolt
                </span>
              </div>
              <div className="my-4">
                <span
                  className="font-['Newsreader',serif] text-[48px] leading-[52px] tracking-[-0.02em] font-medium text-[#1d1b18]"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  &lt;90m
                </span>
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18] mt-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Rapid Callout Window
                </p>
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c]">
                Coordinated from Abiola Way, Abeokuta — with Lagos field vans in Lekki, Ikeja
                and Yaba stocked with full valve and fitting kits.
              </p>
            </div>
            <div className="reveal-entry p-6 bg-[#f3ede7] rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">Backing</span>
                <span className="material-symbols-outlined text-[#58423c] text-[20px]" aria-hidden="true">
                  verified
                </span>
              </div>
              <div className="my-4">
                <span
                  className="font-['Newsreader',serif] text-[48px] leading-[52px] tracking-[-0.02em] font-medium text-[#a43716]"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  100%
                </span>
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18] mt-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Written Guarantee
                </p>
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c]">
                365-day workmanship cover on every soldered joint, valve and concealed run —
                issued from our Abeokuta office.
              </p>
            </div>
          </div>
          <div className="reveal-entry mt-6 p-4 bg-[#ede7e2] rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#a43716] animate-ping absolute opacity-60" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#a43716] relative" aria-hidden="true" />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold text-[#1d1b18]">
                Fleet Live Readiness Status
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#58423c] hidden md:inline">
                — 4 Van Units on standby with acoustic leak sensors (Abeokuta coordinated)
              </span>
            </div>
            <div className="flex items-center gap-4 font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold tracking-[0.04em] uppercase text-[#58423c]">
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#516257]" aria-hidden="true">
                  check_circle
                </span>{' '}
                Abiola Way Base Active
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#516257]" aria-hidden="true">
                  check_circle
                </span>{' '}
                Lagos Field Vans Active
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 4 THINGS WE NEVER COMPROMISE ON */}
      <section className="w-full py-12 md:py-20 bg-[#f9f2ed]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 reveal-entry">
            <div className="max-w-xl flex flex-col gap-2">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">
                The Non-Negotiables
              </span>
              <h2
                className="font-['Newsreader',serif] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.015em] font-normal text-[#1d1b18]"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                The 4 things we never compromise on.
              </h2>
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] max-w-md">
              Not agency taglines — workshop rules painted on the wall at Abiola Way, Abeokuta.
              Every apprentice learns them on day one and every job is signed off against them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="reveal-entry p-7 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-['Newsreader',serif] text-[56px] leading-none tracking-[-0.02em] font-normal text-[#a43716]/25"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    01
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#ffdbd1]/60 flex items-center justify-center text-[#a43716]">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                      payments
                    </span>
                  </div>
                </div>
                <h3
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18] mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Price made clear before work begins.
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                  You receive a written diagnostic and costed scope before we cut or chase.
                  No add-on mobilisation fees, no mystery parts after the fact — what you
                  approve is what you pay.
                </p>
              </div>
              <div className="mt-6 bg-[#f9f2ed] p-3 rounded-xl">
                <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>{' '}
                  Written Diagnostic Estimates Guaranteed
                </span>
              </div>
            </div>

            <div className="reveal-entry p-7 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-['Newsreader',serif] text-[56px] leading-none tracking-[-0.02em] font-normal text-[#a43716]/25"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    02
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#d4e7d8]/60 flex items-center justify-center text-[#516257]">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                      cleaning_services
                    </span>
                  </div>
                </div>
                <h3
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18] mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Shoe covers on, dust sheets down.
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                  Homes are treated as living spaces, not sites. Overshoes, taped runners and a
                  HEPA vacuum are standard. We aim to leave floors, marble and rugs visibly
                  cleaner than on arrival.
                </p>
              </div>
              <div className="mt-6 bg-[#f9f2ed] p-3 rounded-xl">
                <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>{' '}
                  Full Cleanliness Guarantee
                </span>
              </div>
            </div>

            <div className="reveal-entry p-7 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-['Newsreader',serif] text-[56px] leading-none tracking-[-0.02em] font-normal text-[#a43716]/25"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    03
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#ffdcbd]/50 flex items-center justify-center text-[#7b542b]">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                      plumbing
                    </span>
                  </div>
                </div>
                <h3
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18] mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Proper brass &amp; thick-walled pipe.
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                  We do not fit thin counterfeit fittings or brittle unrated PVC. Our stock is
                  sourced from certified European and industrial suppliers — built to hold
                  pressure and resist aggressive borehole chemistry.
                </p>
              </div>
              <div className="mt-6 bg-[#f9f2ed] p-3 rounded-xl">
                <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>{' '}
                  Zero Counterfeit Material Policy
                </span>
              </div>
            </div>

            <div className="reveal-entry p-7 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-['Newsreader',serif] text-[56px] leading-none tracking-[-0.02em] font-normal text-[#a43716]/25"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    04
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#ffdbd1]/60 flex items-center justify-center text-[#a43716]">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                      ring_volume
                    </span>
                  </div>
                </div>
                <h3
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18] mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  We pick up the phone when you call.
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                  Courtesy at payment is easy. Character shows when a valve we fitted weeps
                  months later. We answer, attend, and put it right at no charge — no
                  deflection, no vanished numbers.
                </p>
              </div>
              <div className="mt-6 bg-[#f9f2ed] p-3 rounded-xl">
                <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>{' '}
                  365-Day Immediate Return Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MEET THE MASTER PLUMBERS & TEAM */}
      <section className="w-full py-12 md:py-20 bg-[#fff8f3]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal-entry">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">
              The People Behind the Wrenches
            </span>
            <h2
              className="font-['Newsreader',serif] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.015em] font-normal text-[#1d1b18] mt-1"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Real artisans, no hired hands.
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-2">
              The senior technicians who enter your home — trained together at Abiola Way,
              Abeokuta and deployed nationwide with years of verified site experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="reveal-entry bg-[#f3ede7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="h-72 w-full overflow-hidden relative bg-[#ede7e2]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  src={PORTRAIT_OJ}
                  alt="Portrait of Olumide OJ Oladipo, master plumber in branded work jacket standing in workshop with copper fittings"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#a43716] text-[11px] font-semibold tracking-[0.04em] uppercase">
                  Co-Founder · 14 Yrs
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Olumide “OJ” Oladipo
                  </h3>
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] mt-0.5">
                    Master Mechanical Plumber &amp; Hydronics Lead
                  </p>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c] mt-3">
                    Trained under port hydraulic engineers before founding OOH JAY in 2014 at
                    Abiola Way, Abeokuta. Leads acoustic leak tracing, booster balancing and
                    sanitary layout for high-spec bathrooms.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    City &amp; Guilds Mechanical Cert.
                  </span>
                </div>
              </div>
            </div>

            <div className="reveal-entry bg-[#f3ede7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="h-72 w-full overflow-hidden relative bg-[#ede7e2]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  src={PORTRAIT_BABA}
                  alt="Portrait of Babatunde Adeleke, diagnostic plumber holding ultrasonic pipe detection tablet in a hallway"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#516257] text-[11px] font-semibold tracking-[0.04em] uppercase">
                  Lead Diagnostician
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Babatunde Adeleke
                  </h3>
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] mt-0.5">
                    Ultrasonic Leak &amp; Pressure Specialist
                  </p>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c] mt-3">
                    Eight years resolving hidden sub-surface leaks without needless tile breakout.
                    Runs diaspora video audits and commercial flow surveys from Abeokuta to
                    Lagos Island.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    Level 3 Non-Destructive Testing
                  </span>
                </div>
              </div>
            </div>

            <div className="reveal-entry bg-[#f3ede7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="h-72 w-full overflow-hidden relative bg-[#ede7e2]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  src={PORTRAIT_CHIDIMA}
                  alt="Portrait of Engr. Chidinma Eze, quality and project lead holding plumbing blueprints in daylight"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#7b542b] text-[11px] font-semibold tracking-[0.04em] uppercase">
                  Head of Quality
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-semibold text-[#1d1b18]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Engr. Chidinma Eze
                  </h3>
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] mt-0.5">
                    Project Director &amp; Diaspora Liaison
                  </p>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-5 text-[#58423c] mt-3">
                    Oversees QA, verifies every pipe run against code, and leads diaspora
                    milestone handovers — ensuring what is buried is worthy of being buried.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#516257] text-[18px]" aria-hidden="true">
                    verified
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    NSE &amp; COREN Reg. Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Investing in next generation */}
          <div className="reveal-entry mt-10 p-6 md:p-8 bg-[#32302d] text-[#f6f0ea] rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#ffb5a0]">
                Our Apprenticeship Academy
              </span>
              <h3
                className="font-['Newsreader',serif] text-[22px] md:text-[28px] leading-8 md:leading-9 font-normal text-white mt-1"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Investing in the next generation of Nigerian craftsmen.
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#e7e1dc] mt-2">
                Each year we welcome vocational graduates from technical colleges around
                Abeokuta and Ogun State for 18 months at our Abiola Way workshop — copper
                brazing, PEX press, and courteous site conduct — before they set foot in a
                client&apos;s home or on a Lagos site.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:+2349031386928"
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-[#a43716] text-white text-[13px] font-semibold tracking-[0.04em] rounded-full hover:bg-[#c54f2c] transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb5a0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#32302d]"
              >
                Schedule a Diagnostic
              </a>
              <a
                href="https://wa.me/2349031386928"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-white/10 text-white text-[13px] font-semibold tracking-[0.04em] rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2 border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#32302d]"
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
