import React, { useEffect, useMemo, useState } from 'react';
import { PROJECTS } from '../data/projects';
import { TESTIMONIALS } from '../data/testimonials';
import { Project } from '../types';

interface WorkPageProps {
  onSelectProject: (project: Project) => void;
}

type GalleryCategory = 'all' | 'bathrooms' | 'pumps' | 'piping' | 'commercial';

interface GalleryMeta {
  key: string;
  title: string;
  description: string;
  location: string;
  year: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  alt: string;
  projectId: string;
}

const GALLERY_META: GalleryMeta[] = [
  {
    key: 'master-ensuite',
    title: 'Master Ensuite Re-pipe & Mixer Upgrade',
    description:
      'Replaced cracked underground PVC with solid, silent copper piping. Concealed shower mixer fitted with laser alignment and zero moisture seepage behind tiles.',
    location: 'Ikoyi, Lagos',
    year: '2024',
    category: 'bathrooms',
    categoryLabel: 'Sanitary Architecture',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdQtoVJ2R0vwxDBgL1lAzzzgun1AmuWkpIJMDu3QRux4OUK_LTtomPjsUEjOYrWE0-7ew2TGRjPXR6pjgSEViN5EI03k--prQ71aWW0gybIvu4kdm460yoPSm0kYRgqRJA-BSEqRIGvykgrntYgQLDEne5872XjzFM9A1QTvw11zVAh7orVg-mxW1XzFl_2yJCs-9rvpMTznFeYAIEV0YwWI7YTcM8dDoo7uXZZTa_7viqerhVk4oU',
    alt: 'High-end minimalist master bathroom in Ikoyi Lagos with brushed bronze concealed mixer taps, warm terracotta textured tiles, fresh caulking lines, and pristine copper sanitary fittings in natural light.',
    projectId: 'victoria-island-master-bath',
  },
  {
    key: 'vibration-free-pump',
    title: 'Vibration-Free Water Pump Setup',
    description:
      'Swapped a noisy, rattling old cast pump for a quiet variable speed booster with brass valves and labeled zone shutoffs.',
    location: 'Victoria Island, lagos',
    year: '2024',
    category: 'pumps',
    categoryLabel: 'Pressure Engineering',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBq8IGXFfExQU8CWvB0ScwB_mwoJHoJSIqCo70h-nyrWSMsLTJkS55HeFL4QQoqKNC_1sa1kYKhJBqhSD8hiKyRHnUclnb4PsNCCokIeb059HTID9uPpXlFjWSPRt8YN2kiuzj_nv_Ck0pFPSqABTixvaCX3ov32ijwpEyh4Wi8cdBrofewOhVAJxWrqdWtQlgK9TTS419dvAdTkXxRPl1vc1zz-DEmvwmCNWVAUeSI5cTEQGzASSEf',
    alt: 'Industrial silent water booster pump system installed on vibration dampening rubber mounts in Victoria Island Lagos, with polished brass shutoff ball valves, pressure gauge, and clean labeled copper distribution manifold.',
    projectId: 'mechanical-plant-room',
  },
  {
    key: 'kitchen-laundry-boost',
    title: 'Kitchen & Laundry Water Pressure Boost',
    description:
      'Re-routed main kitchen supply into independent feeds so the washing machine and dishwasher run at full throttle without the sink tap dropping to a trickle.',
    location: 'Ibadan',
    year: '2024',
    category: 'piping',
    categoryLabel: 'Flow Balancing',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD78lfqKS0rurpiGGR3NYWN4d5m0ur-tIwa1gqLr4M2fjwz9R8-xbstIOfXkcrc-0hmKrWVhPRwy4gbqY_wxzCYkKf8jISH_PQsbjZZhv9uGvUFV8J5nWgtv4RHtOFqr7CTNXdgLQWGnWbenYNYgfCpAQ5xNP3kEYGYz85WsJ_d4R4-BbhC2O7FvrUoF4sTURwbn6A6DJlUrGin9_xYTGaWEzG62zcUunQOfMjvzrPEQozWYYRoThze',
    alt: 'Organized under-sink plumbing layout inside a modern luxury kitchen in Lekki Phase 1, featuring dedicated stainless steel braided flexible hoses, quarter-turn brass mini-valves, and an integrated reverse osmosis filtration tap.',
    projectId: 'copper-manifold-installation',
  },
  {
    key: 'twin-tank-filter',
    title: 'Twin Water Tank & Clean Filter Array',
    description:
      'Replaced brittle, sun-bleached PVC runs with thermal-shielded conduits. Added dual-stage filtration so every bath and sink discharges clear.',
    location: 'Ijebu, Ogun',
    year: '2024',
    category: 'pumps',
    categoryLabel: 'Water Filtration & Tanks',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdhmaXZySGyEJc4vz3mQhTSQog7Hk0umq5MSupKChuvUR0xhoy49bfe4AmIukUBCKW2zFN63FjG6wUbN8Cq5APu2ilS0AfEXibJ2w-RWcro9DzdQpcI-GpqDrTCLzpNXgR9Ajqy_TE8RmX-bJaqXSb0p9VDhy3vmmkhCcoQJWYQnUbnMq_jHDWqImG5miH4XlX4sV7YEdKqg6qsIchDBGcb-Ix3B5wL1ZNzZioulQ417Wf-Sn4sOzT',
    alt: 'Rooftop overhead twin water tanks in Ikeja GRA Lagos with UV-resistant multi-layer insulated piping, heavy-duty float valves, double canister sediment water filters, and safety overflow drain lines.',
    projectId: 'pressure-testing-valving',
  },
  {
    key: 'remote-new-build',
    title: 'Remote New Build Complete Plumbing',
    description:
      'Plumbed this 5-bedroom residence with daily WhatsApp video logs and material receipts while client was abroad — new build and finishing together.',
    location: 'Banana Island',
    year: '2024',
    category: 'piping',
    categoryLabel: 'Remote Client Oversight',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAuRpXEt6vaoaQhWgT6ixYxpNC2MDjsRpaUzhWPJ6XWT06wAIAts4Rq3wiDyrlniBs_Cob7mBrpELAIA747BuMD1mk4Z8pxm6KnlIDf5J_H-p98lfOVBpKYTdBMXKCjndIPtzzpgGOkQw4S71pZ1VxtFJV39yLU4QERpmESIKb_L_y1HxIE-IRPoOdoNm28ZBtpSsCCD0KTo1obIfSu5mdtKqQySNeqFkL33sexYspMZm0CUbKD0',
    alt: 'First-fix rough plumbing in a high-end Banana Island Lagos villa under construction, with perfectly plumbed PPR water conduits secured by metal clamps inside chased brickwork, pressure gauges attached for hydro-testing.',
    projectId: 'subterranean-drainage-build',
  },
  {
    key: 'commercial-riser',
    title: 'Commercial Riser & Pressure Balancing',
    description:
      'Cured constant backflow and fluctuating morning water pressure across duplex flats by installing synchronized pressure balancing stations.',
    location: 'Abuja Central',
    year: '2023',
    category: 'commercial',
    categoryLabel: 'Multi-Unit Infrastructure',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAq6I-vTW2Y3EH7bQ81TJz_a212obCgNbsoKCkuuVBvLroYbYTkreJWHWvmKuxUrdzd2SUIiWKUIQmSPiugVIs5RhwXgQnzEWsL8TTQOINKv7LsTt9ZBJ2jm1-7RkN2NFUUuFAFlEgznvhO8cIIbdLLlNQFfEkJDPO6-wUSb-_4J2Odu2wUffZzxE6qf9CBHalLF5Xt2avgny_tgcQAJw1SaLQApRXBLkZk55N0HIa1afiVE5in_MZK',
    alt: 'Organized vertical utility shaft in an Abuja multi-family duplex apartment block, with insulated green PPR main pipes, precision balancing valves, water meters, and pressure regulating valves labeled for each residential flat.',
    projectId: 'commercial-hydronic-risers',
  },
];

const FILTERS: { key: GalleryCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'bathrooms', label: 'Bathrooms & Showers' },
  { key: 'pumps', label: 'Pumps & Tanks' },
  { key: 'piping', label: 'Piping & Pipe Replacement' },
  { key: 'commercial', label: 'Commercial & Apartments' },
];

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectProject }) => {
  const [active, setActive] = useState<GalleryCategory>('all');

  const filtered = useMemo(
    () => (active === 'all' ? GALLERY_META : GALLERY_META.filter((m) => m.category === active)),
    [active]
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>('.reveal-entry').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll<HTMLElement>('.reveal-entry').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active, filtered.length]);

  return (
    <div className="bg-[#fff8f3]">
      {/* Top Intro */}
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 pt-10 md:pt-14 pb-8 reveal-entry">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[640px] flex flex-col gap-3">
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Our Work</span>
            <h1
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.04em] font-bold text-[#1d1b18] text-balance"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Real photos of tidy pipes, calm bathrooms, and clean water.
            </h1>
            <p className="text-[16px] md:text-[18px] leading-7 text-[#58423c] mt-1 text-balance">
              Photographs of Quality jobs taken after testing and cleaning up; new site builds and repairs on existing homes alike.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[14px] text-[#58423c] self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#a43716]" aria-hidden="true" />
            <span className="font-semibold tracking-[0.04em] uppercase text-[#a43716] text-[12px]">Years active: 2014–present</span>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-20 z-30 w-full bg-[#fff8f3]/90 backdrop-blur-md py-3 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {FILTERS.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                aria-pressed={isActive}
                className={`whitespace-nowrap px-5 py-3 rounded-full text-[14px] font-semibold tracking-[0.02em] border transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-[#a43716] text-white border-[#a43716] shadow-sm'
                    : 'bg-[#f3ede7] text-[#1d1b18] border-transparent hover:bg-[#ede7e2]'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Curated Grid */}
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((meta) => {
            const project = PROJECTS.find((p) => p.id === meta.projectId) ?? PROJECTS[0];
            return (
              <article
                key={meta.key}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-black/5"
              >
                <div className="relative w-full h-64 overflow-hidden bg-[#f3ede7]">
                  <img
                    src={meta.image}
                    alt={meta.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[12px] font-semibold tracking-[0.02em] text-[#1d1b18] shadow-sm">
                      {meta.location} · {meta.year}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1 gap-3">
                  <div className="flex flex-col gap-2">
                    <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">
                      {meta.categoryLabel}
                    </span>
                    <h2
                      className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] leading-7 font-bold tracking-[-0.04em] text-[#1d1b18] group-hover:text-[#a43716] transition-colors"
                    >
                      {meta.title}
                    </h2>
                    <p className="text-[16px] leading-7 text-[#58423c] mt-1">{meta.description}</p>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="mt-auto -mx-7 -mb-7 px-7 py-4 bg-[#f9f2ed]/80 border-t border-black/5 flex items-center justify-between text-left hover:bg-[#f3ede7] transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#a43716]"
                    aria-label={`View project ${meta.title}`}
                  >
                    <span className="text-[15px] font-semibold text-[#a43716]">View project</span>
                    <span
                      className="material-symbols-outlined text-[#a43716] group-hover:translate-x-0.5 transition-transform shrink-0"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        {filtered.length === 0 && <p className="mt-8 text-sm text-[#58423c]">No projects in this category yet.</p>}
      </section>

      {/* Clean Site Guarantee */}
      <section className="w-full bg-[#ede7e2] py-16 md:py-20 mt-8 reveal-entry">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Our Clean Site Standard</span>
              <h2
                className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.04em] font-bold text-[#1d1b18]"
              >
                We treat your home like a showroom, not an active quarry.
              </h2>
              <div className="flex flex-col gap-3 mt-1">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#a43716]/10 text-[#a43716] flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </span>
                  <p className="text-[16px] leading-7 text-[#1d1b18]">
                    <strong className="font-semibold">Protective Overcovers:</strong> Clean overshoes before stepping past your front door.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#a43716]/10 text-[#a43716] flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </span>
                  <p className="text-[16px] leading-7 text-[#1d1b18]">
                    <strong className="font-semibold">Heavy Canvas Tarpaulins:</strong> Floors and polished wood shielded while tools are active.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#a43716]/10 text-[#a43716] flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </span>
                  <p className="text-[16px] leading-7 text-[#1d1b18]">
                    <strong className="font-semibold">Wet/Dry Vacuuming:</strong> Every shaving and droplet cleared before we sign off.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="tel:+2349031386928"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#a43716] text-white rounded-full text-[14px] font-semibold hover:bg-[#c54f2c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    phone_in_talk
                  </span>
                  Book Clean Plumber Today
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl flex flex-col gap-3 shadow-sm border border-black/5">
                <div className="w-11 h-11 rounded-xl bg-[#d4e7d8] text-[#3a4b40] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]" aria-hidden="true">
                    cleaning_services
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] font-bold tracking-[-0.04em] text-[#1d1b18]">Pristine Site Sign-off</h3>
                <p className="text-[16px] leading-7 text-[#58423c]">
                  We inspect before presenting the final work order. If you spot dust or scrap, we return to wipe it down.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl flex flex-col gap-3 shadow-sm border border-black/5">
                <div className="w-11 h-11 rounded-xl bg-[#ffdcbd] text-[#623f18] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]" aria-hidden="true">
                    handyman
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] font-bold tracking-[-0.04em] text-[#1d1b18]">No Pipe Ruptures</h3>
                <p className="text-[16px] leading-7 text-[#58423c]">
                  Scanners pinpoint existing conduits and rebar before we drill a single anchor.
                </p>
              </div>
              <div
                className="bg-white p-5 rounded-2xl flex flex-col gap-3 shadow-sm border border-black/5 sm:col-span-2"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#a43716]/10 text-[#a43716] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[32px]" aria-hidden="true">
                      shield_with_heart
                    </span>
                  </div>
                  <div className="flex flex-col text-center sm:text-left">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] font-bold tracking-[-0.04em] text-[#1d1b18]">Workmanship backing with warranty doc on request</h4>
                    <p className="text-[16px] leading-7 text-[#58423c] mt-1">
                      We provide documented warranty docs on resquest for every job done covering up to 1 year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-20 reveal-entry">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Verified Client Notes</span>
            <h2
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] md:text-[30px] leading-[1.1] tracking-[-0.04em] font-bold text-[#1d1b18]"
            >
              Proof through their words, not just pictures.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => {
            const initials = t.author
              .split(' ')
              .map((w) => w[0])
              .join('')
              .slice(0, 2)
              .toUpperCase();
            const bg = idx === 0 ? 'bg-[#d4e7d8] text-[#3a4b40]' : idx === 1 ? 'bg-[#ffdbd1] text-[#3b0900]' : 'bg-[#ffdcbd] text-[#623f18]';
            return (
              <div
                key={t.id}
                className="p-5 bg-white rounded-2xl shadow-sm border border-black/5 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex text-[#a43716]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-[16px] leading-7 text-[#1d1b18]">“{t.quote}”</p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 -mx-5 -mb-5 px-5 pb-4 bg-[#f9f2ed]/50 rounded-b-2xl flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 ${bg}`}>{initials}</div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-[#1d1b18]">{t.author}</span>
                    <span className="text-[14px] text-[#58423c]">
                      {t.role} · {t.organization}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dark CTA */}
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-6 mb-10 reveal-entry">
        <div className="bg-[#516257] text-white rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-md">
          <div className="flex flex-col gap-2 max-w-xl z-10">
            <h2
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] md:text-[26px] leading-[1.15] font-bold tracking-[-0.04em] text-white"
            >
              Have a pipe issue, wet patch, or new fitting to review?
            </h2>
            <p className="text-[15px] leading-6 text-white/90 mt-1">
              Take 2 photos of the area on WhatsApp. Our lead plumber will reply with preliminary advice and transparent pricing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto">
            <a
              href="https://wa.me/2349031386928"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#a43716] text-white rounded-full text-[14px] font-semibold hover:bg-[#c54f2c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#516257]"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                chat
              </span>
              WhatsApp Photos
            </a>
            <a
              href="tel:+2349031386928"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/15 text-white hover:bg-white/25 rounded-full text-[14px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                call
              </span>
              Direct Call
            </a>
          </div>
          <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-[#a43716]/10 pointer-events-none blur-2xl" aria-hidden="true" />
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
