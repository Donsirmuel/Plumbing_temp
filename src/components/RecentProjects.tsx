import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';

interface RecentProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ onSelectProject }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const primaryFour = PROJECTS.slice(0, 4);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
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
      className="bg-[#F6F5F2] text-[#0F1E2D] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 max-w-360 mx-auto"
    >
      <div
        ref={headerRef}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-[#0F1E2D]/10 gap-4"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-[#1A5CFF] uppercase">Selected work</p>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] text-[#0F1E2D] mt-2">
            Recent work in Nigeria & beyond
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#5B6B7A]">
            Copper manifolds, plant rooms, wet areas and construction support — shown as they were built, not as renders.
          </p>
        </div>

        <Link
          to="/work"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0F1E2D] hover:text-[#1A5CFF] transition-colors duration-150"
        >
          <span>View gallery</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6"
      >
        {primaryFour.map((project, index) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(project)}
            className={`group text-left flex flex-col card-hover ${index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'} bg-white rounded-[1.25rem] overflow-hidden border border-[#0F1E2D]/8 hover:border-[#0F1E2D]/15 hover:shadow-[0_8px_28px_rgba(15,30,45,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5CFF]`}
          >
            <div className={`relative overflow-hidden bg-[#E8ECEE] w-full ${index === 0 ? 'aspect-[16/10]' : 'aspect-[16/11]'}`}>
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-[#0F1E2D] shadow">
                {project.location} · {project.year}
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-2">
              <div className="text-xs font-medium text-[#5B6B7A]">
                {project.category}
              </div>
              <h3 className={`font-sans font-bold leading-tight tracking-[-0.03em] text-[#0F1E2D] ${index === 0 ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
                {project.title}
              </h3>
              <p className="text-sm leading-6 text-[#5B6B7A] line-clamp-2">
                {project.description}
              </p>
              <span className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-[#1A5CFF] group-hover:gap-2 transition-all duration-150">
                View details <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
