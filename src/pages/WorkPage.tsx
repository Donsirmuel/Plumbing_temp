import React from 'react';
import { WorkGallery } from '../components/WorkGallery';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Project } from '../types';

interface WorkPageProps {
  onSelectProject: (project: Project) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectProject }) => (
  <>
    <section className="bg-[#0F1E2D] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#7AA8FF] uppercase">Gallery</p>
        <h1 className="max-w-3xl font-sans text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl">
          The work is the proof.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Water systems, wet areas, plant rooms and construction support we have delivered in Nigeria & beyond. Tap any project to see scope and details.
        </p>
      </div>
    </section>
    <WorkGallery onSelectProject={onSelectProject} />
    <BeforeAfterSlider />
    <TestimonialsSection />
  </>
);
