import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

interface HomePageProps {
  onExploreClick: () => void;
  onOpenQuote: () => void;
  onSelectProject: (project: Project) => void;
}

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCAan4PuGH0L6WgigZGyP1S2NMMknTcovBIA67Jfi47-VSUKhYEObLpWtrwIOpWXJicNhF4H9BC211fXeE6fwfFL-ISVCDiTBt1Fh0r1t95mxSVLqaSupOVMxDqWPQN9dvx0Jhf4G7MSFI5ATQEIRZCuvNPCTX6hqJ8KudDETf4Z0WBlzvNuKfpocypUT5V5orCJoYkGdRY6CrLUj532ea5C3Ma-wlWP5Bmodw8ohiWq_lBHVdNlSbH';

const RECENT_IMAGES = {
  ensuite:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCbDo6MNVIi4JTYt6uuKZVdNPLP8NOTJvaoe5nq_05OCuTntmbdta9dwuhBgmRrgiPYnfVDgorLg0o8Ui8_3NSrfBn8MbvSY1PSjJa9zpojYNA7X7aKPTZV60TlSsH7vYwmf5LNuOHdWlpt-34E0nn0Gj-8P6c8Y4MC73RakIVOa2OVaIZ172vOSZ-EvgAegwWOiuW_NHImhS1jZo_0XBsqAkR8XIsR18AVMfW61nVyfUb25eCefDYU',
  pump:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDbeAP7t7anHtf58UHeIVfB1A_KuEj-YP5PBfgMh-2vmiJF6ciOjVM1qcHQta6NlyqtXukiFN-7RlBwuICebdb-pPRzwCA1Rk9C-kBIogFNHnOHPN7tOhJEpN-SSxveDJYqKxoSItcvY4D69ZHncFGhMZKVwo5SGXOGFcJgAgXvNp2sLfTvbJlgLok3dBxoR9n2XTTxcLALMOcA90bApaoxMeniGCQjUUpYZu4FhlrBA7Fl9Hkh0VqJ',
  kitchen:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDJIOuxwuZwRNcReLkvOeCFa3uw5wVNFMpPY6SG_8z7BYq4yk8ZxB8n8CuHnXoab01yFx2eXWiu_i9aVnh9FRK2Z8g91pU3dKrHsF1B51TJmr-e151-S-Vfpo3zzh0qNE4OYYOEsrszjqisdfnNHQspUJjCzB807Vm0xCSKNJqsq-4IPSVgscejJOXS8krZKlH8lsrjLIL5bpN42DbjJGbnACHR-9PO0uHHow5NIkhRt3C3SrU3hUGr',
};

export const HomePage: React.FC<HomePageProps> = ({ onExploreClick, onOpenQuote, onSelectProject }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', issue: 'Urgent Leak or Burst Pipe', area: 'Ikoyi', note: '' });

  const handleExplore = () => {
    const el = document.getElementById('recent-jobs');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onExploreClick();
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenQuote();
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = rootRef.current;
    if (!root) return;

    // reveal-entry with IntersectionObserver, 0.8s per stitch, respects reduced-motion via CSS but also JS guard
    const revealEls = root.querySelectorAll<HTMLElement>('.reveal-entry');
    // hero entries visible immediately with stagger (matches stitch script)
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      const heroEntries = heroSection.querySelectorAll<HTMLElement>('.reveal-entry');
      heroEntries.forEach((entry, i) => {
        window.setTimeout(() => entry.classList.add('is-visible'), 120 + i * 120);
      });
    }

    if (prefersReduced) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
              window.setTimeout(() => {
                (entry.target as HTMLElement).classList.add('is-visible');
              }, idx * 60);
              obs.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.12 }
      );
      revealEls.forEach((el) => {
        // hero already handled, but observe rest
        if (!el.classList.contains('is-visible')) observer.observe(el);
      });
      return () => observer.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);

  // Premium storytelling parallax: background, text and cards move at different speeds on scroll
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const hero = document.getElementById('hero-section');
    const bg = document.getElementById('hero-bg-wrapper');
    const textLayer = document.getElementById('hero-text-layer');
    const cardsLayer = document.getElementById('hero-cards-layer');
    const metrics = document.getElementById('metrics-grid');
    if (!hero) return;
    const ctx = gsap.context(() => {
      if (bg) gsap.to(bg, { yPercent: -8, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.8 } });
      if (textLayer) gsap.to(textLayer, { yPercent: -6, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.8 } });
      if (cardsLayer) gsap.to(cardsLayer, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.8 } });
      if (metrics) {
        const counters = metrics.querySelectorAll<HTMLElement>('.counter-value');
        counters.forEach((el) => {
          const target = parseInt(el.dataset.target || '0', 10);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
            onUpdate: () => {
              const v = Math.round(obj.val);
              el.textContent = `${prefix}${v.toLocaleString()}${suffix}`;
            },
          });
        });
      }
    }, hero);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (window.innerWidth <= 768) return;
    const heroSection = document.getElementById('hero-section') as HTMLElement | null;
    const tiltFeatured = document.getElementById('tilt-featured') as HTMLElement | null;
    const tiltBadge1 = document.getElementById('tilt-badge-1') as HTMLElement | null;
    const tiltBadge2 = document.getElementById('tilt-badge-2') as HTMLElement | null;
    if (!heroSection) return;

    const onMove = (e: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      if (tiltFeatured) tiltFeatured.style.transform = `perspective(1000px) rotateY(${deltaX * 5}deg) rotateX(${-deltaY * 5}deg) translateZ(10px)`;
      if (tiltBadge1) tiltBadge1.style.transform = `perspective(800px) rotateY(${deltaX * 8}deg) rotateX(${-deltaY * 8}deg) translate3d(${deltaX * 6}px, ${deltaY * 6}px, 20px)`;
      if (tiltBadge2) tiltBadge2.style.transform = `perspective(800px) rotateY(${deltaX * -7}deg) rotateX(${-deltaY * 7}deg) translate3d(${deltaX * -5}px, ${deltaY * -5}px, 15px)`;
    };
    const onLeave = () => {
      if (tiltFeatured) tiltFeatured.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
      if (tiltBadge1) tiltBadge1.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
      if (tiltBadge2) tiltBadge2.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
    };
    heroSection.addEventListener('mousemove', onMove);
    heroSection.addEventListener('mouseleave', onLeave);
    return () => {
      heroSection.removeEventListener('mousemove', onMove);
      heroSection.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="w-full bg-[#fff8f3]">
      {/* Immersive hero — Navbar already renders announcement bar, so Home starts with hero */}
      <section
        id="hero-section"
        className="relative w-full min-h-[92vh] lg:min-h-screen overflow-hidden flex flex-col justify-between bg-[#191513] text-[#f6f0ea]"
      >
        {/* Parallax Deep Visual Background Layer with kenburns 36s — layered storytelling */}
        <div id="hero-bg-wrapper" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Warm artisanal luxury bathroom and polished architectural copper plumbing pipework with ambient natural golden light"
            className="w-full h-full object-cover object-center animate-kenburns origin-center opacity-70 will-change-transform brightness-[0.82] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171412]/95 via-[#171412]/75 to-[#171412]/30 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-[#141210]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,13,12,0.6)_100%)]" />
        </div>

        {/* Hero Content Grid Layer */}
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 md:px-12 pt-12 md:pt-24 pb-6 flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
            {/* Left Column — midground parallax */}
            <div id="hero-text-layer" className="lg:col-span-7 flex flex-col items-start gap-4">
              {/* Tidy, Honest Plumbing pill */}
              <div className="reveal-entry inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/15 text-[#ffdcbd] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb5a0] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffb5a0]" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase">Tidy, Honest Plumbing · Nigeria & Abroad</span>
              </div>

              <h1 className="reveal-entry font-['Newsreader',serif] text-[38px] md:text-[56px] leading-[1.08] tracking-tight text-[#f6f0ea] font-normal">
                Plumbing done right.
                <br />
                <span className="italic font-normal text-[#ffdcbd]">Clean, quiet,</span> and built to last.
              </h1>

              <p className="reveal-entry text-[15px] md:text-[18px] leading-7 text-[#e7e1dc] max-w-xl">
                From fixing stubborn leaks and low shower pressure to fitting complete bespoke bathrooms. Reliable, considerate plumbers across Lagos — without the headache or technical excuses.
              </p>

              <div className="reveal-entry pt-1 flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onOpenQuote}
                  className="shine-button inline-flex items-center justify-center px-8 py-4 bg-[#a43716] text-white text-[13px] font-semibold tracking-[0.02em] rounded-full shadow-[0_12px_24px_rgba(164,55,22,0.35)] hover:bg-[#c54f2c] hover:shadow-[0_16px_32px_rgba(197,79,44,0.5)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb5a0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#191513]"
                >
                  Book a Visit
                  <span className="material-symbols-outlined text-[18px] ml-2 group-hover:translate-x-1 transition-transform">calendar_today</span>
                </button>
                <a
                  href="https://wa.me/2349031386928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white/10 hover:bg-white/20 text-[#f6f0ea] text-[13px] font-medium rounded-full backdrop-blur-md border border-white/15 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] shadow-sm group"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2 text-[#ffdcbd] group-hover:scale-110 transition-transform">chat</span>
                  WhatsApp Us Directly
                </a>
              </div>

              {/* Micro Trust Chips */}
              <div className="reveal-entry pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-[#e7e1dc] text-[13px]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ffdcbd] text-[18px]">schedule</span> Arrive on agreed time
                </span>
                <span className="text-white/30">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ffdcbd] text-[18px]">receipt_long</span> Upfront clear quotes
                </span>
                <span className="text-white/30">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ffdcbd] text-[18px]">verified</span> 1-Year guarantee
                </span>
              </div>
            </div>

            {/* Right Column: foreground parallax + tilt */}
            <div id="hero-cards-layer" className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
              <div
                id="tilt-featured"
                className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-md group tilt-card"
              >
                <img
                  src={HERO_IMG}
                  alt="Editorial close up photograph of a minimalist luxury bathroom featuring brushed copper thermostatic tap fittings against soft microcement plaster wall with natural golden sunlight"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-[#141210]/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 flex items-center justify-between text-[#1d1b18]">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#8b716a]">Recent Fitting</p>
                    <p className="text-[16px] font-semibold tracking-tight text-[#1d1b18]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Ikoyi Private Residence
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#7b542b] bg-[#f3ede7] px-3 py-1 rounded-full">Completed in 4 Days</span>
                </div>
              </div>

              {/* Floating Story Card 1 — lifted to avoid header overlap */}
              <div
                id="tilt-badge-1"
                className="absolute -top-4 -right-2 sm:-right-4 animate-float-1 hidden sm:flex items-center gap-3 p-4 bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl text-[#1d1b18] max-w-[260px] tilt-card"
              >
                <div className="w-11 h-11 rounded-xl bg-[#d4e7d8] flex items-center justify-center shrink-0 text-[#516257]">
                  <span className="material-symbols-outlined text-[22px]">cleaning_services</span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1d1b18]">Clean floor promise</p>
                  <p className="text-[13px] leading-tight text-[#58423c]">Shoe covers & dust sheets down before work.</p>
                </div>
              </div>

              {/* Floating Story Card 2 — repositioned to avoid bottom trust bar */}
              <div
                id="tilt-badge-2"
                className="absolute -bottom-4 -left-2 sm:-left-4 animate-float-2 flex items-center gap-3 p-4 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl text-[#1d1b18] max-w-[270px] tilt-card"
              >
                <div className="w-11 h-11 rounded-xl bg-[#ffdbd1] flex items-center justify-center shrink-0 text-[#a43716]">
                  <span className="material-symbols-outlined text-[22px]">water_drop</span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1d1b18]">Calibrated Pressure</p>
                  <p className="text-[13px] leading-tight text-[#58423c]">Quiet pumps, no airlock, zero dripping taps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Transition: Integrated Live Trust Milestones Bar */}
        <div className="relative z-10 w-full bg-white/10 backdrop-blur-lg border-t border-white/10 py-4 px-5 md:px-12">
          <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4 text-[#e7e1dc] text-[13px]">
            <div className="flex items-center mx-auto gap-2 text-[#f6f0ea]">
              <span className="material-symbols-outlined text-[#ffdcbd] text-[18px]">verified_user</span>
              <span className="font-semibold text-[#f6f0ea]">Verifiable Results</span>
              <span className="text-white/40">|</span>
              <span>Every installation is state-of-the-art & reliable.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metric / Confidence Ribbon — verified real metrics per user */}
      <section className="w-full bg-[#f9f2ed] py-10 border-b border-[#dfc0b7]/20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          {/* compat anchor for previous App handler that scrolled to recent-projects-section */}
          <div id="recent-projects-section" className="sr-only" aria-hidden="true" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left" id="metrics-grid">
            <div className="flex flex-col gap-1 p-2 reveal-entry">
              <span
                className="counter-value text-[#a43716] tracking-tight leading-none"
                data-target="9"
                data-suffix="+"
                style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '48px', lineHeight: '52px', letterSpacing: '-0.02em', fontWeight: 500 }}
              >
                0+
              </span>
              <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">Years Experience</span>
              <span className="text-[13px] leading-5 text-[#58423c]">Serving homes & commercial offices</span>
            </div>
            <div className="flex flex-col gap-1 p-2 reveal-entry">
              <span
                className="counter-value text-[#a43716] tracking-tight leading-none"
                data-target="1399"
                data-suffix="+"
                style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '48px', lineHeight: '52px', letterSpacing: '-0.02em', fontWeight: 500 }}
              >
                0+
              </span>
              <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">Jobs Completed</span>
              <span className="text-[13px] leading-5 text-[#58423c]">Bathrooms, boilers & water lines</span>
            </div>
            <div className="flex flex-col gap-1 p-2 reveal-entry">
              <span
                className="counter-value text-[#a43716] tracking-tight leading-none"
                data-target="89"
                data-prefix="< "
                data-suffix="m"
                style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '48px', lineHeight: '52px', letterSpacing: '-0.02em', fontWeight: 500 }}
              >
                &lt; 0m
              </span>
              <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">Emergency Callout</span>
              <span className="text-[13px] leading-5 text-[#58423c]">Typical response for urgent jobs</span>
            </div>
            <div className="flex flex-col gap-1 p-2 reveal-entry">
              <span
                className="counter-value text-[#a43716] tracking-tight leading-none"
                data-target="11"
                data-suffix=" Mos"
                style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '48px', lineHeight: '52px', letterSpacing: '-0.02em', fontWeight: 500 }}
              >
                0 Mos
              </span>
              <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#1d1b18]">Full Guarantee</span>
              <span className="text-[13px] leading-5 text-[#58423c]">If it drips, we return free of charge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Everyday Services */}
      <section className="w-full bg-[#fff8f3] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 reveal-entry">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">Everyday Craft</span>
                <span className="w-8 h-px bg-[#dfc0b7]" />
              </div>
              <h2 className="font-['Newsreader',serif] text-[32px] md:text-[40px] leading-none tracking-tight text-[#1d1b18]">What we sort out for you</h2>
            </div>
            <p className="text-[15px] leading-6 text-[#58423c] max-w-md">
              From new builds and first-fix pipework to repairs in lived-in homes — complex installations don't intimidate us. We arrive with the right parts ready in the van.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/services"
              className="reveal-entry bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f3ede7] flex items-center justify-center text-[#a43716] mb-4 group-hover:bg-[#ffdbd1] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">water_drop</span>
                </div>
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#8b716a]">Service 01 � New & Existing</span>
                <h3 className="text-[18px] font-semibold tracking-tight text-[#1d1b18] mt-1 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Leaks & Burst Pipes
                </h3>
                <p className="text-[14px] leading-6 text-[#58423c]">
                  New pipework for new builds and quick fixes for running toilets, dripping taps, hidden leaks and burst mains — before they damage walls or woodwork.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#f3ede7] flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">New builds & repairs</span>
                <span className="material-symbols-outlined text-[#8b716a] text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </div>
            </Link>

            <Link
              to="/services"
              className="reveal-entry bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f3ede7] flex items-center justify-center text-[#a43716] mb-4 group-hover:bg-[#ffdbd1] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">shower</span>
                </div>
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#8b716a]">Service 02 � New & Existing</span>
                <h3 className="text-[18px] font-semibold tracking-tight text-[#1d1b18] mt-1 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Bathroom & Kitchen Fitting
                </h3>
                <p className="text-[14px] leading-6 text-[#58423c]">
                  New fits and refits: from first-fix in new builds to fitting modern showers, basin taps, sinks, tubs and toilets with watertight seals.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#f3ede7] flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Full fitout or replacements</span>
                <span className="material-symbols-outlined text-[#8b716a] text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </div>
            </Link>

            <Link
              to="/services"
              className="reveal-entry bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f3ede7] flex items-center justify-center text-[#a43716] mb-4 group-hover:bg-[#ffdbd1] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">speed</span>
                </div>
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#8b716a]">Service 03 � New & Existing</span>
                <h3 className="text-[18px] font-semibold tracking-tight text-[#1d1b18] mt-1 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Pressure & Water Pumps
                </h3>
                <p className="text-[14px] leading-6 text-[#58423c]">
                  From new pump sets in new sites to servicing weak showers — we install, clear sediment lines and balance pressure across every floor.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#f3ede7] flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Pressure calibration</span>
                <span className="material-symbols-outlined text-[#8b716a] text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </div>
            </Link>

            <Link
              to="/services"
              className="reveal-entry bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f3ede7] flex items-center justify-center text-[#a43716] mb-4 group-hover:bg-[#ffdbd1] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">local_fire_department</span>
                </div>
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#8b716a]">Service 04 � New & Existing</span>
                <h3 className="text-[18px] font-semibold tracking-tight text-[#1d1b18] mt-1 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Water Heaters & Tanks
                </h3>
                <p className="text-[14px] leading-6 text-[#58423c]">
                  New installs and servicing: safe fitting and descaling of heaters, overhead tanks, ball valves and filtration — hygienic on new and existing sites.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#f3ede7] flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Safe electrical isolation</span>
                <span className="material-symbols-outlined text-[#8b716a] text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent jobs around Lagos — stitch visuals with lh3 placeholders, wired to onSelectProject */}
      <section id="recent-jobs" className="w-full bg-[#f9f2ed] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3 reveal-entry">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Evidence of Care</span>
              <h2 className="font-['Newsreader',serif] text-[32px] md:text-[40px] leading-none tracking-tight text-[#1d1b18] mt-1">Recent jobs</h2>
              <p className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#8b716a] mt-1">Recent jobs — Abeokuta, Lagos & nationwide</p>
            </div>
            <p className="text-[14px] leading-6 text-[#58423c] max-w-sm">We take a photo after cleaning up, never before. Every job tested thoroughly under pressure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Master Ensuite Refit — Ikoyi */}
            <button
              onClick={() => onSelectProject(PROJECTS[2] ?? PROJECTS[0])}
              className="reveal-entry bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#f3ede7] relative">
                <img
                  src={RECENT_IMAGES.ensuite}
                  alt="Modern master bathroom installation in Ikoyi with warm neutral stone tiles, matte black shower set, freestanding tub and flawlessly neat silicone joins with natural window light"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-[#1d1b18]">Ikoyi</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold tracking-tight text-[#1d1b18] mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Master Ensuite Refit
                  </h3>
                  <p className="text-[14px] leading-6 text-[#58423c]">
                    Replaced aging galvanised lines with silent multi-layer copper, fitted a concealed dual mixer, and created a seamless wet-room drain.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center justify-between text-[#7b542b] text-[13px]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> Tested at 4.5 bar
                  </span>
                  <span className="text-[#8b716a]">4 days on site</span>
                </div>
              </div>
            </button>

            {/* Silent Water Pump & Manifold — VI */}
            <button
              onClick={() => onSelectProject(PROJECTS[1] ?? PROJECTS[0])}
              className="reveal-entry bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#f3ede7] relative">
                <img
                  src={RECENT_IMAGES.pump}
                  alt="Meticulously organized utility and plumbing manifold room with gleaming copper pipes, brass non-return valves and silent booster water pump in a luxury Victoria Island apartment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-[#1d1b18]">Victoria Island</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold tracking-tight text-[#1d1b18] mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Silent Water Pump & Manifold
                  </h3>
                  <p className="text-[14px] leading-6 text-[#58423c]">
                    Stripped out a vibrating 1.5HP pump that rattled bedroom walls. Installed rubber anti-vibration mountings and tidy, labeled shutoff valves.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center justify-between text-[#7b542b] text-[13px]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">volume_off</span> Whisper quiet
                  </span>
                  <span className="text-[#8b716a]">1 day turnaround</span>
                </div>
              </div>
            </button>

            {/* Kitchen & Laundry Supply Re-Route — Lekki */}
            <button
              onClick={() => onSelectProject(PROJECTS[0] ?? PROJECTS[2])}
              className="reveal-entry bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#f3ede7] relative">
                <img
                  src={RECENT_IMAGES.kitchen}
                  alt="Clean renovated kitchen island with newly installed designer brass tap and undermount sink in a home in Abeokuta, spotless and water tested"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-[#1d1b18]">Abeokuta</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold tracking-tight text-[#1d1b18] mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Kitchen & Laundry Supply Re-Route
                  </h3>
                  <p className="text-[14px] leading-6 text-[#58423c]">
                    Resolved chronic low pressure affecting washing machines and kitchen sinks. Re-routed supply without damaging existing cabinetry or tiles.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center justify-between text-[#7b542b] text-[13px]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">sentiment_satisfied</span> Zero tile breakage
                  </span>
                  <span className="text-[#8b716a]">2 days on site</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* How We Work — Four simple rules */}
      <section className="w-full bg-[#fff8f3] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="max-w-2xl mb-10 reveal-entry">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7b542b]">The Standard</span>
            <h2 className="font-['Newsreader',serif] text-[32px] md:text-[40px] leading-tight tracking-tight text-[#1d1b18] mt-1">Four simple rules we never compromise on.</h2>
            <p className="text-[14px] leading-6 text-[#58423c] mt-2">Plumbing is about peace of mind. We don&apos;t cut corners on pipes hidden behind tiles where you can&apos;t see them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="reveal-entry bg-[#f3ede7] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-['Newsreader',serif] text-[28px] leading-none italic text-[#7b542b]">01</span>
                <h3 className="text-[18px] font-semibold text-[#1d1b18] mt-3 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Clear pricing first
                </h3>
                <p className="text-[14px] leading-6 text-[#58423c]">
                  We look at the problem and state the cost before picking up a spanner. No sudden inflated bills once work is dismantled.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[#58423c] text-[11px] font-semibold tracking-[0.08em] uppercase">
                <span className="material-symbols-outlined text-[#a43716] text-[18px]">verified</span> Written quote upfront
              </div>
            </div>

            <div className="reveal-entry bg-[#f3ede7] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-['Newsreader',serif] text-[28px] leading-none italic text-[#7b542b]">02</span>
                <h3 className="text-[18px] font-semibold text-[#1d1b18] mt-3 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  We respect your home
                </h3>
                <p className="text-[14px] leading-6 text-[#58423c]">
                  Protective covers on our boots, heavy dust cloths across your floorboards, and everything vacuumed or mopped before we say goodbye.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[#58423c] text-[11px] font-semibold tracking-[0.08em] uppercase">
                <span className="material-symbols-outlined text-[#a43716] text-[18px]">sanitizer</span> Tidy workspaces
              </div>
            </div>

            <div className="reveal-entry bg-[#f3ede7] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-['Newsreader',serif] text-[28px] leading-none italic text-[#7b542b]">03</span>
                <h3 className="text-[18px] font-semibold text-[#1d1b18] mt-3 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Proper materials only
                </h3>
                <p className="text-[14px] leading-6 text-[#58423c]">
                  Heavy gauge brass valves, quality solvent welds, and durable fittings. We refuse cheap brittle plastics that crack in six months.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[#58423c] text-[11px] font-semibold tracking-[0.08em] uppercase">
                <span className="material-symbols-outlined text-[#a43716] text-[18px]">handyman</span> Genuine components
              </div>
            </div>

            <div className="reveal-entry bg-[#f3ede7] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-['Newsreader',serif] text-[28px] leading-none italic text-[#7b542b]">04</span>
                <h3 className="text-[18px] font-semibold text-[#1d1b18] mt-3 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  1-Year Guarantee
                </h3>
                <p className="text-[14px] leading-6 text-[#58423c]">
                  If anything drips, weeps, or comes loose from our installation during the next 12 months, we return and put it right at zero expense to you.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[#58423c] text-[11px] font-semibold tracking-[0.08em] uppercase">
                <span className="material-symbols-outlined text-[#a43716] text-[18px]">shield</span> No-quibble warranty
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Direct Booking / Contact Section — Dark Contrast Band */}
      <section id="booking-form" className="w-full bg-[#32302d] text-[#f6f0ea] py-14 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4 reveal-entry">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#ffb5a0]">Immediate Assistance</span>
              <h2 className="font-['Newsreader',serif] text-[36px] md:text-[48px] leading-[1.05] tracking-tight text-[#f6f0ea]">Got a leak, or planning something new?</h2>
              <p className="text-[16px] md:text-[18px] leading-7 text-[#e7e1dc]">
                Send us a quick message with what you&apos;re dealing with. A qualified plumber will reply with straightforward advice and a transparent quote within the hour.
              </p>
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#a43716] flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#e7e1dc]">Call directly</p>
                    <a href="tel:+2349031386928" className="text-[18px] font-semibold text-[#f6f0ea] hover:text-[#ffb5a0] transition-colors">
                      +234 903 138 6928
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#516257] flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#e7e1dc]">Fastest reply on WhatsApp</p>
                    <a href="https://wa.me/2349031386928" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#f6f0ea] underline hover:text-[#ffb5a0]">
                      Chat directly with our team
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl text-[#1d1b18] shadow-2xl reveal-entry">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1b18]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Request a Plumber Visit
                  </h3>
                  <p className="text-[13px] leading-5 text-[#58423c]">We never spam, and we provide clear estimates before visit.</p>
                </div>
                <span className="material-symbols-outlined text-[#a43716] text-[28px]">plumbing</span>
              </div>

              <form className="space-y-4" onSubmit={handleBookingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1d1b18] mb-1">Your Name</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full h-12 px-4 rounded-xl bg-[#f3ede7] border-0 text-[#1d1b18] placeholder:text-[#8b716a] focus:outline-none focus:ring-2 focus:ring-[#a43716] text-[14px]"
                      placeholder="e.g. Tunde Adeyemi"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1d1b18] mb-1">Phone or WhatsApp</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full h-12 px-4 rounded-xl bg-[#f3ede7] border-0 text-[#1d1b18] placeholder:text-[#8b716a] focus:outline-none focus:ring-2 focus:ring-[#a43716] text-[14px]"
                      placeholder="e.g. 0802 123 4567"
                      required
                      type="tel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1d1b18] mb-1">What seems to be the issue?</label>
                    <select
                      value={form.issue}
                      onChange={(e) => setForm((p) => ({ ...p, issue: e.target.value }))}
                      className="w-full h-12 px-4 rounded-xl bg-[#f3ede7] border-0 text-[#1d1b18] focus:outline-none focus:ring-2 focus:ring-[#a43716] text-[14px]"
                    >
                      <option>Urgent Leak or Burst Pipe</option>
                      <option>New Bathroom / Kitchen Fitting</option>
                      <option>Low Water Pressure or Pump Repair</option>
                      <option>Water Heater Replacement / Repair</option>
                      <option>General Plumbing Inspection</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1d1b18] mb-1">Area in Lagos</label>
                    <select
                      value={form.area}
                      onChange={(e) => setForm((p) => ({ ...p, area: e.target.value }))}
                      className="w-full h-12 px-4 rounded-xl bg-[#f3ede7] border-0 text-[#1d1b18] focus:outline-none focus:ring-2 focus:ring-[#a43716] text-[14px]"
                    >
                      <option>Ikoyi</option>
                      <option>Victoria Island</option>
                      <option>Lekki Phase 1 & Chevron</option>
                      <option>Ajah / Sangotedo</option>
                      <option>Ikeja / GRA / Maryland</option>
                      <option>Surulere / Yaba</option>
                      <option>Other Lagos location</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#1d1b18] mb-1">Brief note (optional)</label>
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm((p) => ({ ...p, note: e.target.value }))}
                    className="w-full p-4 rounded-xl bg-[#f3ede7] border-0 text-[#1d1b18] placeholder:text-[#8b716a] focus:outline-none focus:ring-2 focus:ring-[#a43716] text-[14px] resize-none"
                    placeholder="Describe what's dripping or what you want installed..."
                    rows={3}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#a43716] text-white text-[13px] font-semibold tracking-[0.04em] uppercase rounded-xl shadow-md hover:bg-[#c54f2c] transition-all active:scale-[0.99] flex items-center justify-center gap-2 shine-button cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2"
                >
                  Send Request & Get Clear Quote
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 3 cols */}
      <section className="w-full bg-[#fff8f3] py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="max-w-xl mx-auto text-center mb-8 reveal-entry">
            <h3 className="text-[18px] font-semibold text-[#1d1b18]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Common everyday questions
            </h3>
            <p className="text-[13px] leading-5 text-[#58423c] mt-1">Honest answers before you pick up the phone.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="reveal-entry bg-[#f3ede7] p-5 rounded-2xl">
              <h4 className="text-[13px] font-semibold text-[#1d1b18] mb-1">Do you charge for quotations?</h4>
              <p className="text-[13px] leading-5 text-[#58423c]">No. For standard jobs described over phone or WhatsApp, we give transparent quotations and estimates free of charge.</p>
            </div>
            <div className="reveal-entry bg-[#f3ede7] p-5 rounded-2xl">
              <h4 className="text-[13px] font-semibold text-[#1d1b18] mb-1">How fast do you reach us?</h4>
              <p className="text-[13px] leading-5 text-[#58423c]">From our base on Abiola Way, Abeokuta and field teams in Lagos, we typically arrive within 30–90 minutes in priority areas.</p>
            </div>
            <div className="reveal-entry bg-[#f3ede7] p-5 rounded-2xl">
              <h4 className="text-[13px] font-semibold text-[#1d1b18] mb-1">What if the leak returns?</h4>
              <p className="text-[13px] leading-5 text-[#58423c]">Every repair is covered by our written 1-year guarantee. We come straight back and resolve it free of charge.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};