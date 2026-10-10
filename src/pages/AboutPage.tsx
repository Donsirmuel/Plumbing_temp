import React, { useEffect, useRef } from 'react';
import { ReadMore } from '../components/ReadMore';

export interface AboutPageProps {}

const HERO_MANIFOLD = '/plumber-laying-pipes.webp';
const CRAFT_INSPECT = '/close-up-of-basin-install.webp';
const PORTRAIT_OJ = '/plumber-working-in-kitchen.webp';
const PORTRAIT_BABA = '/plumber-in-kitchen.webp';
const PORTRAIT_CHIDIMA = '/plumbing-installation.webp';

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
              <span className="w-6 h-px bg-[#dfc0b7]" aria-hidden="true"></span>Our background since 2014
            </span>
            <h1
              className="font-['Fraunces',serif] text-[38px] leading-[46px] md:text-[56px] md:leading-[64px] tracking-[-0.03em] font-semibold text-[#1d1b18] text-balance"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Plumbers who treat your home like our own.
            </h1>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-7 text-[#58423c] max-w-3xl">
              Too many property owners know the familiar frustrations: late arrivals, pipes buried in concrete before anyone runs a pressure test, and unanswered phones when a joint begins to leak. We built OOH JAY to offer a steadier experience. Based on Abiola Way, Abeokuta with field teams across Lagos, we deliver methodical plumbing for new construction sites and everyday household repairs.
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
                  Neat copper and multilayer manifolds.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="p-6 bg-[#f3ede7] rounded-2xl shadow-sm flex flex-col gap-2">
                <h3
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18]"
                >
                  Trained hands only. No shortcuts.
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                  Every technician at OOH JAY has completed structured trade apprenticeship and carries verified qualifications. We never send unvetted casual labourers to your home.
                </p>
              </div>
              <div className="p-6 bg-[#516257] text-white rounded-2xl shadow-md flex items-center justify-between">
                <div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-semibold leading-7 text-white mt-1">
                    Abeokuta, Lagos and across Nigeria
                  </p>
                  <p className="text-[13px] font-medium tracking-[0.04em] text-white/80 mt-1">
                    Serving local families and property owners abroad.
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/15 text-[#ffdbd1] text-[12px] font-bold tracking-[0.06em] uppercase shrink-0">
                  Est. 2014
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL 2-COLUMN STORY */}
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
                  The OOH JAY standard
                </span>
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-7 font-semibold text-[#1d1b18]"
                >
                  “If a pipe will live behind tile for twenty years, we fit it with care: properly aligned, tested under working pressure, and documented before any tile is laid.”
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
                  Trained to modern standards, trusted by families at home and abroad.
                </h2>
              </div>
              <div className="flex flex-col gap-4 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c]">
                <p>
                  When we began in Abeokuta, much of the trade still relied on improvisation:
                  tape wound the wrong direction, thin galvanised lines rusting through after two rainy
                  seasons, and water pressure that vanishes the moment someone opens a second tap. We chose
                  a different path. We work to strict plumbing codes, whether on a brand new build in Lekki or an existing bungalow in Abeokuta.
                </p>
                <div className="p-5 bg-white rounded-xl shadow-sm text-[#1d1b18] text-[15px] leading-6">
                  <strong className="font-semibold block text-[#a43716] mb-1">
                    Direct support for Nigerians in the UK, USA, and Canada
                  </strong>
                  Building or maintaining a home from abroad is stressful when updates are just blurry snapshots. We act as your reliable eyes and hands: timestamped video walk-throughs, itemised store receipts, and direct WhatsApp calls before and after every phase of work.
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <span className="text-[12px] font-bold tracking-[0.04em] uppercase text-[#1d1b18] block">
                    Video walk-throughs
                  </span>
                  <span className="text-[12px] text-[#58423c] mt-0.5 block">Clear footage of hidden pipe runs</span>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <span className="text-[12px] font-bold tracking-[0.04em] uppercase text-[#1d1b18] block">
                    Store receipts
                  </span>
                  <span className="text-[12px] text-[#58423c] mt-0.5 block">Materials billed at actual cost</span>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <span className="text-[12px] font-bold tracking-[0.04em] uppercase text-[#1d1b18] block">
                    Pressure tested
                  </span>
                  <span className="text-[12px] text-[#58423c] mt-0.5 block">Checked under pump pressure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 4 STANDARDS */}
      <section className="w-full py-12 md:py-20 bg-[#f9f2ed] reveal-entry">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-xl flex flex-col gap-2">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">
                Our standards
              </span>
              <h2
                className="font-['Fraunces',serif] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.03em] font-semibold text-[#1d1b18]"
              >
                Four commitments we keep on every job
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* 01 */}
            <div className="lg:col-span-7 p-8 md:p-10 bg-[#32302d] rounded-2xl shadow-xl flex flex-col justify-between border border-white/10 relative overflow-hidden">
              <div aria-hidden="true" className="absolute -right-12 -top-12 w-48 h-48 bg-[#a43716]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[13px] font-bold tracking-[0.06em] text-[#ffdbd1]">
                    Standard 01
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#a43716] text-white text-[11px] font-semibold tracking-[0.06em] uppercase">Most requested</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] md:text-[24px] leading-7 font-bold tracking-[-0.04em] text-white mb-3">
                  Clear prices before work begins
                </h3>
                <ReadMore
                  text="You receive an itemised written quotation before our technicians start. Labour and materials are listed separately so there are no surprise charges or inflated replacement costs."
                  clampLines={2}
                  variant="dark"
                />
              </div>
              <div className="relative z-10 mt-8 bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/10">
                <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-white">
                  Written quotes and material schedules provided
                </span>
              </div>
            </div>

            {/* 02 */}
            <div className="lg:col-span-5 p-7 md:p-8 bg-white rounded-2xl shadow-sm flex flex-col justify-between border border-black/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[13px] font-bold tracking-[0.06em] text-[#516257]">
                    Standard 02
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18] mb-2">
                  Tidy workspaces and protected floors
                </h3>
                <ReadMore
                  text="Your home is treated as a clean living space. We protect tile and sanitary ware during work, contain dust where feasible, and thoroughly wipe down the floor before leaving."
                  clampLines={2}
                />
              </div>
              <div className="mt-6 bg-[#f9f2ed] p-3 rounded-xl">
                <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                  Clean site promise on every call
                </span>
              </div>
            </div>

            {/* 03 */}
            <div className="lg:col-span-5 p-7 md:p-8 bg-[#ede7e2] rounded-2xl shadow-sm flex flex-col justify-between border border-[#dfc0b7]/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[13px] font-bold tracking-[0.06em] text-[#7b542b]">
                    Standard 03
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18] mb-2">
                  Genuine, pressure-rated fittings
                </h3>
                <ReadMore
                  text="We do not install counterfeit valves or thin PVC that splits under booster pressure. We source heavy-duty, rated pipework and fittings from accredited distributors."
                  clampLines={2}
                />
              </div>
              <div className="mt-6 bg-white p-3 rounded-xl shadow-sm">
                <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                  Zero counterfeit material policy
                </span>
              </div>
            </div>

            {/* 04 */}
            <div className="lg:col-span-7 p-7 md:p-8 bg-white rounded-2xl shadow-sm flex flex-col justify-between border border-black/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[13px] font-bold tracking-[0.06em] text-[#a43716]">
                    Standard 04
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#7b542b] bg-[#f3ede7] px-2.5 py-1 rounded-full">After-job care</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] md:text-[20px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18] mb-2">
                  Responsive support after the job
                </h3>
                <ReadMore
                  text="Good communication should not stop once the bill is settled. If you have any question or need a quick adjustment on work we carried out, you reach the same team directly."
                  clampLines={2}
                />
              </div>
              <div className="mt-6 bg-[#f9f2ed] p-3 rounded-xl">
                <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                  Workmanship backed on every project
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MASTER PLUMBERS & TEAM */}
      <section className="w-full py-12 md:py-20 bg-[#fff8f3] reveal-entry">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">
              Our team
            </span>
            <h2
              className="font-['Fraunces',serif] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.03em] font-semibold text-[#1d1b18] mt-1"
            >
              Qualified technicians on every job
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#58423c] mt-2">
              The plumbers who arrive at your property carry formal training and practical on-site experience.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
            <div className="lg:col-span-6 bg-[#f3ede7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col border border-[#dfc0b7]/20">
              <div className="h-[380px] lg:h-[520px] w-full overflow-hidden relative bg-[#ede7e2]">
                <img
                  className="w-full h-full object-cover"
                  src={PORTRAIT_OJ}
                  alt="Plumber at work in kitchen — pipe installation for quality review"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[#a43716] text-[11px] font-semibold tracking-[0.05em] uppercase shadow-sm">
                  Co-founder · In trade since 2014
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
                    Master Plumber &amp; Pipework Lead
                  </p>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-7 text-[#58423c] mt-3">
                    Trained in hydraulic pipefitting before co-founding OOH JAY in 2014. Oversees acoustic leak detection, booster pump installations, and sanitary pipe layout for modern residential properties.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#dfc0b7]/20">
                  <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                    City &amp; Guilds Mechanical Certified
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
                    alt="Plumber checking pipework connections"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#f3ede7]/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#516257] text-[11px] font-semibold tracking-[0.04em] uppercase shadow-sm">
                    Leak detection
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18]">
                      Babatunde Adeleke
                    </h3>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] mt-0.5">
                      Leak Detection &amp; Pressure Specialist
                    </p>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-3">
                      Locates concealed underground and wall leaks using non-invasive acoustic equipment, preventing unnecessary tile and wall demolition.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#dfc0b7]/15">
                    <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                      Non-Destructive Testing Certified
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#ede7e2] rounded-2xl overflow-hidden shadow-sm flex flex-col border border-[#dfc0b7]/20">
                <div className="h-64 w-full overflow-hidden relative bg-[#f3ede7]">
                  <img
                    className="w-full h-full object-cover"
                    src={PORTRAIT_CHIDIMA}
                    alt="Plumbing installation pipe runs before close-up"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#7b542b] text-[11px] font-semibold tracking-[0.04em] uppercase shadow-sm">
                    Quality inspection
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18]">
                      Engr. Chidinma Eze
                    </h3>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b] mt-0.5">
                      Project Engineer &amp; Diaspora Updates
                    </p>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-3">
                      Coordinates quality assurance, verifies pipe slopes against building codes, and manages milestone photo and video reports for remote property owners.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#dfc0b7]/20">
                    <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">
                      COREN Registered Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Training */}
          <div className="mt-10 p-6 md:p-8 bg-[#32302d] text-[#f6f0ea] rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#ffb5a0]">
                Apprentice training
              </span>
              <h3
                className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] md:text-[26px] leading-8 md:leading-9 font-bold tracking-[-0.04em] text-white mt-1"
              >
                Investing in skilled Nigerian plumbing craftsmen
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-6 text-[#e7e1dc] mt-2">
                We accept vocational technical college graduates for rigorous workshop training in pipe alignment, joint welding, and clean on-site conduct before they work on client properties.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:+2349031386928"
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-[#a43716] text-white text-[14px] font-semibold tracking-[0.04em] rounded-full hover:bg-[#c54f2c] transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb5a0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#32302d]"
              >
                Call our office
              </a>
              <a
                href="https://wa.me/2349031386928"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-white/10 text-white text-[14px] font-semibold tracking-[0.04em] rounded-full hover:bg-white/20 transition-colors border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#32302d]"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
