import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface WorkGalleryProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['All', 'Plumbing', 'Construction', 'Design-Build'];

export const WorkGallery: React.FC<WorkGalleryProps> = ({ onSelectProject }) => {
  const [active, setActive] = useState<string>('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category.toLowerCase().includes(active.toLowerCase()));

  useEffect(() => {
    if (!gridRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // reduced-motion commented out — always animate
    // if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current!.children,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [active]);

  // Quick filter transition — no layout jump, just quick fade
  useEffect(() => {
    if (!gridRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // reduced-motion commented out — always animate
    // if (prefersReduced) return;
    gsap.fromTo(gridRef.current, { opacity: 0.94 }, { opacity: 1, duration: 0.2, ease: 'power2.out' });
  }, [active]);

  return (
    <section className="bg-[#F6F5F2] py-12 sm:py-16 px-6 sm:px-10 md:px-16 max-w-360 mx-auto">
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {CATEGORIES.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors duration-150 cursor-pointer ${
                isActive
                  ? 'bg-[#0F1E2D] text-white border-[#0F1E2D]'
                  : 'bg-white text-[#2D3A4A] border-[#0F1E2D]/10 hover:border-[#0F1E2D]/20'
              }`}
            >
              {cat}
            </button>
          );
        })}
        <span className="ml-2 text-xs text-[#5B6B7A]">{filtered.length} projects</span>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group text-left bg-white rounded-2xl overflow-hidden border border-[#0F1E2D]/8 hover:border-[#0F1E2D]/15 hover:shadow-[0_8px_28px_rgba(15,30,45,0.08)] transition-all duration-200 card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5CFF]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#E8ECEE]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-[#0F1E2D] shadow">
                {project.category}
              </span>
            </div>
            <div className="p-5">
              <div className="text-xs text-[#5B6B7A]">{project.location} · {project.year} · {project.number}</div>
              <h3 className="mt-1 font-sans text-[15px] font-bold tracking-[-0.02em] text-[#0F1E2D] leading-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#5B6B7A] line-clamp-2">{project.description}</p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-[#5B6B7A]">No projects in this category yet.</p>
      )}
    </section>
  );
};
