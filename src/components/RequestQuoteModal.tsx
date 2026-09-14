import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const RequestQuoteModal: React.FC<RequestQuoteModalProps> = ({ isOpen, onClose, defaultService = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Lagos, Nigeria',
    service: 'Plumbing Installation & Water Systems',
    projectType: 'New Build (Residential)',
    details: '',
  });

  useEffect(() => {
    if (defaultService) setFormData((prev) => ({ ...prev, service: defaultService }));
  }, [defaultService]);

  useEffect(() => {
    if (!isOpen) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // reduced-motion commented out — always animate
    // if (prefersReduced) return;
    if (overlayRef.current && cardRef.current) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power2.out' });
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 10, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/2349031386928?text=${encodeURIComponent(
    `Hello Ooh Jay team, I would like to request a quote.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nService: ${formData.service}\nType: ${formData.projectType}\nDetails: ${formData.details || 'Ready to discuss on phone'}`
  )}`;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
      <div
        ref={cardRef}
        className="relative bg-white w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl border border-[#0F1E2D]/10 flex flex-col p-6 sm:p-8"
      >
        <div className="flex items-center justify-between pb-5 border-b border-[#0F1E2D]/10">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] text-[#a43716] uppercase">Direct inquiry</p>
            <h3 className="font-sans text-xl sm:text-2xl font-extrabold tracking-[-0.03em] text-[#0F1E2D] mt-1">Request a quote</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-[#F6F5F2] text-[#5B6B7A] hover:text-[#0F1E2D] transition-colors duration-150 cursor-pointer" aria-label="Close modal">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-6">
            <div className="w-14 h-14 bg-[#a43716] text-white rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h4 className="font-sans text-2xl font-bold text-[#0F1E2D]">Inquiry received</h4>
              <p className="text-sm text-[#5B6B7A] leading-6 max-w-md mx-auto">
                Thank you, {formData.name}. Our team will review your requirements and reach out via phone/WhatsApp within 24 hours.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[#a43716] text-white text-sm font-semibold hover:bg-[#a43716] transition-colors duration-150"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#0F1E2D]/15 text-[#0F1E2D] text-sm font-medium hover:bg-[#F6F5F2] transition-colors duration-150"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0F1E2D]">Full name / Company *</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Adeleke / Prime Estates"
                  className="w-full rounded-xl bg-white border border-[#0F1E2D]/12 focus:border-[#a43716] focus:ring-2 focus:ring-[#1A5CFF]/15 px-3.5 py-2.5 text-sm text-[#0F1E2D] outline-none transition-all duration-150"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0F1E2D]">WhatsApp / Phone *</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234 80..."
                  className="w-full rounded-xl bg-white border border-[#0F1E2D]/12 focus:border-[#a43716] focus:ring-2 focus:ring-[#1A5CFF]/15 px-3.5 py-2.5 text-sm text-[#0F1E2D] outline-none transition-all duration-150"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0F1E2D]">Location *</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full rounded-xl bg-white border border-[#0F1E2D]/12 focus:border-[#a43716] px-3.5 py-2.5 text-sm text-[#0F1E2D] outline-none cursor-pointer"
                >
                  <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                  <option value="Abuja, Nigeria">Abuja, Nigeria</option>
                  <option value="Port Harcourt">Port Harcourt</option>
                  <option value="Nigeria & Beyond">Nigeria & Beyond</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0F1E2D]">Service needed *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-xl bg-white border border-[#0F1E2D]/12 focus:border-[#a43716] px-3.5 py-2.5 text-sm text-[#0F1E2D] outline-none cursor-pointer"
                >
                  <option value="Plumbing Installation & Water Systems">Plumbing Installation & Water Systems</option>
                  <option value="Bathrooms & Wet Rooms">Bathrooms & Wet Rooms</option>
                  <option value="Plant Room, Pumps & Water Treatment">Plant Room, Pumps & Water Treatment</option>
                  <option value="Construction Support">Construction Support</option>
                  <option value="Maintenance, Diagnostics & Servicing">Maintenance, Diagnostics & Servicing</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#0F1E2D]">Project notes</label>
              <textarea
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Share dimensions, storeys/bathrooms, drawings availability, timeline..."
                className="w-full rounded-xl bg-white border border-[#0F1E2D]/12 focus:border-[#a43716] focus:ring-2 focus:ring-[#a43716]/15 px-3.5 py-2.5 text-sm text-[#0F1E2D] outline-none resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 rounded-full py-3.5 bg-[#a43716] text-white text-sm font-semibold hover:bg-[#a43716] transition-colors duration-150 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Submit for review <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 border border-[#0F1E2D]/15 text-[#0F1E2D] text-sm font-medium hover:bg-[#F6F5F2] transition-colors duration-150"
              >
                <MessageSquare className="w-4 h-4 text-[#a43716]" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>

            <div className="text-xs text-[#5B6B7A] text-center">OOH JAY · Nigeria & Abroad</div>
          </form>
        )}
      </div>
    </div>
  );
};
