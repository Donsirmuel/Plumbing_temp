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
    <div className="min-h-screen bg-[#F6F5F2] text-[#0F1E2D] font-sans antialiased selection:bg-[#0F1E2D] selection:text-white">
      <ScrollToTop />
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage onExploreClick={handleExploreClick} onOpenQuote={() => handleOpenQuote()} onSelectProject={setSelectedProject} />} />
          <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/work" element={<WorkPage onSelectProject={setSelectedProject} />} />
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
