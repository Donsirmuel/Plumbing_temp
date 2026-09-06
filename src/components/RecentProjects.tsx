import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';

interface RecentProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAllModal, setShowAllModal] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const primaryFour = PROJECTS.slice(0, 4);

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header subtle fade-in and upward slide
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Projects card row staggered upward slide
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="recent-projects-section"
      ref={sectionRef}
      className="bg-[#F9F8F6] text-[#1C1D1F] py-20 sm:py-24 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto"
    >
      {/* Top Header Row matching the attached screenshot */}
      <div
        ref={headerRef}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[rgba(28,29,31,0.1)] gap-4"
      >
        <div>
          <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono-meta tracking-[0.25em] text-[#706B65] uppercase">
            <span>SELECTED WORK</span>
            <span className="w-6 h-[1px] bg-[#706B65]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1D1F] font-normal tracking-[-0.01em] mt-1">
            Recent Projects
          </h2>
        </div>

        <button
          onClick={() => setShowAllModal(true)}
          className="group inline-flex items-center space-x-2 font-mono-meta text-[11px] sm:text-[12px] tracking-[0.2em] text-[#1C1D1F] hover:text-[#A38B6C] transition-colors cursor-pointer py-1"
        >
          <span>VIEW ALL PROJECTS</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* The 4-Card Row */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7"
      >
        {primaryFour.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group flex flex-col cursor-pointer transition-all duration-300"
          >
            {/* Image Container with subtle framing */}
            <div className="relative overflow-hidden bg-[#EAE7E1] aspect-[4/3] w-full border border-[rgba(28,29,31,0.08)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.98] group-hover:brightness-100"
                loading="lazy"
              />
              
              {/* Category pill on image */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-[#1C1D1F]/80 backdrop-blur-xs text-white/90 font-mono-meta text-[8.5px] tracking-[0.18em] px-2.5 py-1 uppercase">
                  {project.category}
                </span>
              </div>

              {/* Subtle hover overlay with indicator */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[#1C1D1F] text-white font-mono-meta text-[9px] tracking-[0.2em] px-3.5 py-2 flex items-center space-x-1.5 shadow-md">
                  <span>VIEW PROJECT</span>
                  <Plus className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Project Metadata below image */}
            <div className="mt-4 flex flex-col space-y-1.5 text-left">
              <div className="flex items-center justify-between text-[10px] font-mono-meta text-[#706B65] tracking-[0.2em]">
                <span>{project.number}</span>
                <span>{project.location}</span>
              </div>
              <h3 className="font-mono-meta text-xs sm:text-[13px] tracking-[0.14em] text-[#1C1D1F] font-semibold group-hover:text-[#A38B6C] transition-colors uppercase leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-[#706B65] font-light line-clamp-2 leading-relaxed pt-0.5">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Extended All Projects Modal / Drawer */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#F9F8F6] w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-[rgba(28,29,31,0.15)] flex flex-col">
            <div className="flex items-center justify-between pb-6 border-b border-[rgba(28,29,31,0.1)]">
              <div>
                <span className="font-mono-meta text-[10px] tracking-[0.25em] text-[#706B65]">
                  OOH JAY PORTFOLIO
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1D1F] mt-1">
                  Commissioned Architecture & MEP Archive
                </h3>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="font-mono-meta text-xs tracking-[0.2em] text-[#1C1D1F] hover:text-[#A38B6C] p-2 cursor-pointer"
              >
                CLOSE [×]
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center space-x-4 sm:space-x-8 py-4 border-b border-[rgba(28,29,31,0.08)] overflow-x-auto text-xs font-mono-meta tracking-[0.18em]">
              {['All', 'Construction', 'Plumbing', 'Design-Build'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeCategory === cat
                      ? 'text-[#1C1D1F] border-b-2 border-[#1C1D1F] font-semibold'
                      : 'text-[#706B65] hover:text-[#1C1D1F]'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Full grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => {
                    setShowAllModal(false);
                    onSelectProject(proj);
                  }}
                  className="group cursor-pointer flex flex-col space-y-2 border border-[rgba(28,29,31,0.08)] p-3 bg-white hover:border-[#1C1D1F] transition-all"
                >
                  <div className="aspect-[16/11] overflow-hidden bg-[#EAE7E1]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-2 flex justify-between items-baseline text-[9px] font-mono-meta text-[#706B65]">
                    <span>{proj.number}</span>
                    <span>{proj.category}</span>
                  </div>
                  <h4 className="font-mono-meta text-xs tracking-[0.14em] font-semibold text-[#1C1D1F]">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-[#706B65] font-light line-clamp-2">{proj.description}</p>
                  <div className="flex justify-between items-center text-[10px] font-mono-meta text-[#1C1D1F] pt-2 border-t border-[rgba(28,29,31,0.06)]">
                    <span>{proj.location}</span>
                    <span>{proj.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
