import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecentProjects } from './components/RecentProjects';
import { WhyOohJay } from './components/WhyOohJay';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { RequestQuoteModal } from './components/RequestQuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Project } from './types';

// Register ScrollTrigger globally for the application
gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState<string>('');

  useEffect(() => {
    // Refresh ScrollTrigger calculations after initial render and fonts/images load
    ScrollTrigger.refresh();
  }, []);

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setQuoteDefaultService(serviceTitle);
    } else {
      setQuoteDefaultService('');
    }
    setQuoteModalOpen(true);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('recent-projects-section');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1D1F] font-sans antialiased selection:bg-[#1C1D1F] selection:text-white">
      {/* Sticky Main Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main>
        {/* Hero Section matching the exact visual styling in the attached image with Parallax & GSAP */}
        <Hero onExploreClick={handleExploreClick} onOpenQuote={() => handleOpenQuote()} />

        {/* Recent Projects Row matching the exact 4-card row in the attached image */}
        <RecentProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Why Ooh Jay: Engineering Standard & Nigerian Trust Metrics */}
        <WhyOohJay />

        {/* Capabilities Section: Interactive tabbed exploration inspired by Glide's simplicity */}
        <CapabilitiesSection onOpenQuote={(svc) => handleOpenQuote(svc)} />

        {/* The Transformation: Interactive Before/After Tactile Slider */}
        <BeforeAfterSlider />

        {/* Process Section: Structured 5-stage delivery methodology */}
        <ProcessSection onOpenQuote={() => handleOpenQuote()} />

        {/* Testimonials: Nigerian Architects & Developers Endorsements */}
        <TestimonialsSection />

        {/* Call to Action Banner */}
        <CtaSection onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Main Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Floating WhatsApp Contact Hotline */}
      <FloatingWhatsApp />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => handleOpenQuote(selectedProject?.title)}
      />

      {/* Request a Quote Modal */}
      <RequestQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={quoteDefaultService}
      />
    </div>
  );
}

export default App;
