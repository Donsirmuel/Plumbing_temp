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
  <section className="bg-white border-y border-[#0F1E2D]/8">
    <div className="max-w-360 mx-auto px-6 sm:px-10 md:px-16">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 py-5 text-sm">
        <div className="space-y-0.5">
          <div className="text-[#0F1E2D] font-semibold text-sm">Homes & businesses</div>
          <div className="text-[#5B6B7A] text-xs">Homes · Businesses</div>
        </div>
        <div className="space-y-0.5">
          <div className="text-[#0F1E2D] font-semibold text-sm">Nigeria & beyond</div>
          <div className="text-[#5B6B7A] text-xs">Across regions</div>
        </div>
        <div className="space-y-0.5">
          <div className="text-[#0F1E2D] font-semibold text-sm">Pressure-tested</div>
          <div className="text-[#5B6B7A] text-xs">Tested before close</div>
        </div>
        <div className="space-y-0.5">
          <div className="text-[#0F1E2D] font-semibold text-sm">Repairs & servicing</div>
          <div className="text-[#5B6B7A] text-xs">Diagnostics · Care</div>
        </div>
        <div className="space-y-0.5 col-span-2 lg:col-span-1">
          <div className="text-[#0F1E2D] font-semibold text-sm">Construction support</div>
          <div className="text-[#5B6B7A] text-xs">When needed, together</div>
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
