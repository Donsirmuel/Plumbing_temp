import React, { useEffect, useMemo, useState } from 'react';
import { PROJECTS } from '../data/projects';
import { TESTIMONIALS } from '../data/testimonials';
import { Project } from '../types';
import { ReadMore } from '../components/ReadMore';

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
      'Master bathroom ensuite — basin, shower and watertight finish as installed. New bathroom and refit work.',
    location: 'Abeokuta',
    year: '2024',
    category: 'bathrooms',
    categoryLabel: 'Sanitary Architecture',
    image: '/master-bathroom-ensuite.jfif',
    alt: 'Master bathroom ensuite in Abeokuta — basin, shower and watertight finish as installed',
    projectId: 'victoria-island-master-bath',
  },
  {
    key: 'vibration-free-pump',
    title: 'Vibration-Free Water Pump Setup',
    description:
      'Pressure pump and filter array in plant room — silent install with brass valves and labelled shutoffs. New and existing pump servicing.',
    location: 'Lagos',
    year: '2024',
    category: 'pumps',
    categoryLabel: 'Pressure Engineering',
    image: '/pressure-pump-installs.jfif',
    alt: 'Pressure pump and filter array in plant room, silent install as fitted',
    projectId: 'mechanical-plant-room',
  },
  {
    key: 'kitchen-laundry-boost',
    title: 'Kitchen & Laundry Water Pressure Boost',
    description:
      'Kitchen fitting with re-routed supply — washing machine and sink run without losing pressure. For new builds and lived-in homes.',
    location: 'Abeokuta',
    year: '2024',
    category: 'piping',
    categoryLabel: 'Flow Balancing',
    image: '/kitchen1.jfif',
    alt: 'Kitchen fitting in Abeokuta — sink and tap as installed, water tested',
    projectId: 'copper-manifold-installation',
  },
  {
    key: 'twin-tank-filter',
    title: 'Twin Water Tank & Clean Filter Array',
    description: 'Overhead water tank and filter set — clean, gravity-fed supply with serviceable valving. New and replacement installs.',
    location: 'Ogun State',
    year: '2024',
    category: 'pumps',
    categoryLabel: 'Water Filtration & Tanks',
    image: '/overhead-water-tank.jfif',
    alt: 'Overhead water tank as installed — neat valving and overflow as fitted',
    projectId: 'pressure-testing-valving',
  },
  {
    key: 'remote-new-build',
    title: 'Remote New Build Complete Plumbing',
    description:
      'New build plumbing — neat supply runs documented for remote client review. From Abiola Way, Abeokuta for diaspora and local clients.',
    location: 'Nationwide',
    year: '2024',
    category: 'piping',
    categoryLabel: 'Remote Client Oversight',
    image: '/plumber-laying-pipes.jfif',
    alt: 'Plumber laying pipes for new supply manifold — neat runs before close-up',
    projectId: 'subterranean-drainage-build',
  },
  {
    key: 'commercial-riser',
    title: 'Commercial Riser & Pressure Balancing',
    description: 'Industrial overhead pipework in commercial plant — risers and pressure control laid for service access.',
    location: 'Abuja Central',
    year: '2023',
    category: 'commercial',
    categoryLabel: 'Multi-Unit Infrastructure',
    image: '/industrial-plumbing.jfif',
    alt: 'Industrial overhead pipework in commercial plant as installed',
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
    if (false) { // reduced-motion disabled
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
              className="font-['Fraunces',serif] text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.03em] font-semibold text-[#1d1b18] text-balance"
              style={{ fontFamily: "'Fraunces', serif" }}
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

      {/* Sticky Filter Bar — scroll-snap + fade affordance, not just no-scrollbar */}
      <section className="sticky top-20 z-30 w-full bg-[#fff8f3]/90 backdrop-blur-md py-3 shadow-sm overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12">
          {/* fade edges to signal scrollability */}
          <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#fff8f3] to-transparent z-10 hidden sm:block" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#fff8f3] to-transparent z-10" />
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-5 sm:scroll-px-6 md:scroll-px-12 pb-1 -mb-1">
            {FILTERS.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  aria-pressed={isActive}
                  className={`whitespace-nowrap min-h-11 px-5 py-3 rounded-full text-[14px] font-semibold tracking-[0.02em] border transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 snap-start shrink-0 ${
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
        </div>
      </section>

      {/* Curated Editorial Grid — true masonry with featured, panorama, and varied heights */}
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 auto-rows-auto">
          {filtered.map((meta, idx) => {
            const project = PROJECTS.find((p) => p.id === meta.projectId) ?? PROJECTS[0];
            const isPanorama = meta.key === 'twin-tank-filter';
            const isFeatured = idx === 0 && active === 'all' && !isPanorama;

            if (isPanorama) {
              return (
                <article
                  key={meta.key}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-2xl lg:col-span-12 h-[320px] md:h-[420px] shadow-sm hover:shadow-md transition-all duration-300 border border-black/5"
                >
                  <img
                    src={meta.image}
                    alt={meta.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" aria-hidden="true" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[12px] font-semibold tracking-[0.02em] text-[#1d1b18] shadow-sm">
                      {meta.location} · {meta.year}
                    </span>
                  </div>
                  <div className="relative z-10 p-6 md:p-8 flex flex-col gap-2 max-w-2xl">
                    <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/80">
                      {meta.categoryLabel} — Panorama
                    </span>
                    <h2 className="font-['Fraunces',serif] text-[22px] md:text-[26px] leading-7 font-semibold tracking-[-0.03em] text-white">
                      {meta.title}
                    </h2>
                    <p className="text-[15px] leading-6 text-white/85 line-clamp-2">{meta.description}</p>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="mt-2 self-start inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1d1b18] rounded-full text-[14px] font-semibold hover:bg-[#fff8f3] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
                      aria-label={`View project ${meta.title}`}
                    >
                      View project
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </article>
              );
            }

            if (isFeatured) {
              return (
                <article
                  key={meta.key}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-black/5 lg:col-span-12 lg:flex-row"
                >
                  <div className="relative w-full overflow-hidden bg-[#f3ede7] shrink-0 h-72 md:h-[420px] lg:w-[70%] lg:h-auto lg:min-h-[460px]">
                    <img
                      src={meta.image}
                      alt={meta.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[12px] font-semibold tracking-[0.02em] text-[#1d1b18] shadow-sm">
                        {meta.location} · {meta.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1 gap-4 lg:w-[30%] lg:justify-center lg:p-8 bg-white">
                    <div className="flex flex-col gap-2">
                      <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">
                        {meta.categoryLabel}
                      </span>
                      <h2 className="font-['Fraunces',serif] font-semibold tracking-[-0.03em] text-[#1d1b18] group-hover:text-[#a43716] transition-colors text-[24px] md:text-[28px] leading-8">
                        {meta.title}
                      </h2>
                      <ReadMore text={meta.description} clampLines={2} textSizeClass="text-[16px]" className="mt-1" />
                    </div>

                    <div className="flex flex-col gap-3 pt-4 border-t border-black/5">
                      <div className="flex gap-3 items-start">
                        <img
                          src="/close-up-of-basin-install.jfif"
                          alt="Detail: basin mixer close-up as installed"
                          className="w-20 h-20 rounded-xl object-cover shrink-0 border border-black/5"
                          loading="lazy"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Detail shot</span>
                          <p className="text-[13px] leading-5 text-[#58423c]">Mixer & watertight surround — pressure-tested before handover.</p>
                        </div>
                      </div>
                      <blockquote className="relative pl-4 border-l-2 border-[#a43716]/20">
                        <p className="font-['Fraunces',serif] text-[14px] leading-6 italic text-[#1d1b18]">
                          “They left the bathroom cleaner than they found it. Water pressure is perfect.”
                        </p>
                        <cite className="mt-1 block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c] not-italic">
                          — Site client, Abeokuta
                        </cite>
                      </blockquote>
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="mt-2 -mx-7 -mb-7 px-7 py-4 bg-[#f9f2ed]/80 border-t border-black/5 flex items-center justify-between text-left hover:bg-[#f3ede7] transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#a43716] lg:mx-0 lg:mb-0 lg:mt-auto lg:rounded-xl lg:border lg:px-5 lg:py-3"
                      aria-label={`View project ${meta.title}`}
                    >
                      <span className="text-[15px] font-semibold text-[#a43716]">View project</span>
                      <span className="material-symbols-outlined text-[#a43716] group-hover:translate-x-0.5 transition-transform shrink-0" aria-hidden="true">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </article>
              );
            }

            let spanClass: string;
            let imgHeight: string;
            if (active === 'all') {
              switch (meta.key) {
                case 'vibration-free-pump':
                  spanClass = 'lg:col-span-7';
                  imgHeight = 'h-[280px] md:h-[360px]';
                  break;
                case 'kitchen-laundry-boost':
                  spanClass = 'lg:col-span-5';
                  imgHeight = 'h-64 md:h-[320px]';
                  break;
                case 'remote-new-build':
                  spanClass = 'lg:col-span-5';
                  imgHeight = 'h-64 md:h-[380px]';
                  break;
                case 'commercial-riser':
                  spanClass = 'lg:col-span-7';
                  imgHeight = 'h-60 md:h-[340px]';
                  break;
                default:
                  spanClass = 'lg:col-span-6';
                  imgHeight = 'h-64';
                  break;
              }
            } else {
              spanClass = 'lg:col-span-6';
              imgHeight = idx % 2 === 0 ? 'h-64 md:h-[340px]' : 'h-64 md:h-[300px]';
            }

            return (
              <article
                key={meta.key}
                className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-black/5 ${spanClass}`}
              >
                <div className={`relative w-full overflow-hidden bg-[#f3ede7] shrink-0 ${imgHeight}`}>
                  <img
                    src={meta.image}
                    alt={meta.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[12px] font-semibold tracking-[0.02em] text-[#1d1b18] shadow-sm">
                      {meta.location} · {meta.year}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1 gap-3">
                  <div className="flex flex-col gap-2">
                    <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">{meta.categoryLabel}</span>
                    <h2 className="font-['Fraunces',serif] font-semibold tracking-[-0.03em] text-[#1d1b18] group-hover:text-[#a43716] transition-colors text-[20px] leading-7">
                      {meta.title}
                    </h2>
                    <ReadMore text={meta.description} clampLines={2} textSizeClass="text-[16px]" className="mt-1" />
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="mt-auto -mx-7 -mb-7 px-7 py-4 bg-[#f9f2ed]/80 border-t border-black/5 flex items-center justify-between text-left hover:bg-[#f3ede7] transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#a43716]"
                    aria-label={`View project ${meta.title}`}
                  >
                    <span className="text-[15px] font-semibold text-[#a43716]">View project</span>
                    <span className="material-symbols-outlined text-[#a43716] group-hover:translate-x-0.5 transition-transform shrink-0" aria-hidden="true">
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
                className="font-['Fraunces',serif] text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.03em] font-semibold text-[#1d1b18]"
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

      {/* Testimonials — typographic, trade-appropriate */}
      <section className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-20 reveal-entry">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Client Referrals</span>
            <h2
              className="font-['Fraunces',serif] text-[24px] md:text-[30px] leading-[1.1] tracking-[-0.03em] font-semibold text-[#1d1b18]"
            >
              Proof through their words, not just pictures.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, idx) => {
            const headshots = ['/plumber-working-in-kitchen.jfif', '/plumber-laying-pipes.jfif', '/plumber-in-kitchen.jfif'];
            const headshot = headshots[idx % headshots.length];
            return (
              <div key={t.id} className="flex flex-col gap-4">
                <span className="font-['Fraunces',serif] text-[56px] leading-none text-[#a43716]/15 select-none" aria-hidden="true">
                  “
                </span>
                <blockquote className="font-['Fraunces',serif] text-[18px] md:text-[19px] leading-8 text-[#1d1b18] -mt-6">
                  “{t.quote}”
                </blockquote>
                <div className="flex items-center gap-3 pt-5 mt-1 border-t border-[#ede7e2]">
                  <img
                    src={headshot}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border border-black/5 shrink-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#1d1b18]">{t.author}</span>
                    <span className="text-[13px] leading-5 text-[#58423c]">
                      {t.role} · {t.organization}
                    </span>
                    <span className="text-[12px] leading-4 text-[#58423c]/70">{t.location}</span>
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
              className="font-['Fraunces',serif] text-[22px] md:text-[26px] leading-[1.15] font-semibold tracking-[-0.03em] text-white"
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
          <div className="absolute -right-10 sm:-right-16 -bottom-10 sm:-bottom-16 w-48 sm:w-72 h-48 sm:h-72 max-w-[50vw] rounded-full bg-[#a43716]/10 pointer-events-none blur-2xl" aria-hidden="true" />
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
