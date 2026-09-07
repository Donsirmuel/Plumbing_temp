import React from 'react';
import { Hero } from '../components/Hero';
import { RecentProjects } from '../components/RecentProjects';
import { CtaSection } from '../components/CtaSection';
import { Project } from '../types';

interface HomePageProps {
  onExploreClick: () => void;
  onOpenQuote: () => void;
  onSelectProject: (project: Project) => void;
}

const ProofBand: React.FC = () => (
  <section className="bg-white border-y border-[#0F1E2D]/10">
    <div className="max-w-360 mx-auto px-6 sm:px-10 md:px-16">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 py-6 text-sm">
        <div className="space-y-1">
          <div className="text-[#0F1E2D] font-semibold">Homes & businesses</div>
          <div className="text-[#5B6B7A] text-xs leading-5">Everyday repairs to complete systems</div>
        </div>
        <div className="space-y-1">
          <div className="text-[#0F1E2D] font-semibold">Nigeria & beyond</div>
          <div className="text-[#5B6B7A] text-xs leading-5">Project experience across regions</div>
        </div>
        <div className="space-y-1">
          <div className="text-[#0F1E2D] font-semibold">Pressure-tested</div>
          <div className="text-[#5B6B7A] text-xs leading-5">16-bar hold before walls are closed</div>
        </div>
        <div className="space-y-1">
          <div className="text-[#0F1E2D] font-semibold">Repairs & servicing</div>
          <div className="text-[#5B6B7A] text-xs leading-5">Diagnostics and ongoing care</div>
        </div>
        <div className="space-y-1 col-span-2 lg:col-span-1">
          <div className="text-[#0F1E2D] font-semibold">Construction support</div>
          <div className="text-[#5B6B7A] text-xs leading-5">When the job needs one coordinated team</div>
        </div>
      </div>
    </div>
  </section>
);

export const HomePage: React.FC<HomePageProps> = ({ onExploreClick, onOpenQuote, onSelectProject }) => (
  <>
    <Hero onExploreClick={onExploreClick} onOpenQuote={onOpenQuote} />
    <ProofBand />
    <RecentProjects onSelectProject={onSelectProject} />
    <CtaSection onOpenQuote={onOpenQuote} />
  </>
);
