import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { RequestQuoteModal } from './components/RequestQuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';
import { Project } from './types';

// Register ScrollTrigger globally for the application
gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}

function Site() {
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
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#fff8f3] text-[#1d1b18] font-sans antialiased selection:bg-[#ffdbd1] selection:text-[#3b0900]">
      <ScrollToTop />
      <Navbar onOpenQuote={() => handleOpenQuote()} />
      {/* Spacer for fixed header (main nav 80px) */}
      <div className="h-20" aria-hidden="true" />

      <main>
        <Routes>
          <Route path="/" element={<HomePage onExploreClick={handleExploreClick} onOpenQuote={() => handleOpenQuote()} onSelectProject={setSelectedProject} />} />
          <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/work" element={<WorkPage onSelectProject={setSelectedProject} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/process" element={<ProcessPage onOpenQuote={() => handleOpenQuote()} />} />
          <Route path="/contact" element={<ContactPage onOpenQuote={() => handleOpenQuote()} />} />
          <Route path="*" element={<HomePage onExploreClick={handleExploreClick} onOpenQuote={() => handleOpenQuote()} onSelectProject={setSelectedProject} />} />
        </Routes>
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

export function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}

export default App;
