import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const RequestQuoteModal: React.FC<RequestQuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Ikoyi / Victoria Island, Lagos',
    service: 'Plumbing Installation & Water Systems',
    projectType: 'New Build (Residential)',
    details: '',
  });

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/2349031386928?text=${encodeURIComponent(
    `Hello Ooh Jay team, I would like to request a quote.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nService: ${formData.service}\nType: ${formData.projectType}\nDetails: ${formData.details || 'Ready to discuss on phone'}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-[#F9F8F6] w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl border border-[rgba(28,29,31,0.15)] flex flex-col p-6 sm:p-10">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[rgba(28,29,31,0.1)]">
          <div>
            <div className="flex items-center space-x-2 text-[10px] font-mono-meta tracking-[0.25em] text-[#A38B6C] uppercase">
              <span>DIRECT INQUIRY</span>
              <span className="w-4 h-[1px] bg-[#A38B6C]" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1D1F] mt-1 font-normal">
              Request a Project Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#706B65] hover:text-[#1C1D1F] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#1C1D1F] text-[#C8B49E] rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-2xl sm:text-3xl text-[#1C1D1F]">
                Inquiry Received
              </h4>
              <p className="text-sm text-[#706B65] font-light max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our principal project engineer in Lagos will review your
                requirements and reach out via phone/WhatsApp within 24 hours.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#1C1D1F] hover:bg-[#A38B6C] text-white font-mono-meta text-[11px] tracking-[0.2em] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C8B49E]" />
                <span>EXPEDITE ON WHATSAPP (+234 903 138 6928)</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3.5 border border-[rgba(28,29,31,0.2)] text-[#1C1D1F] font-mono-meta text-[11px] tracking-[0.18em]"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="font-mono-meta text-[9px] tracking-[0.2em] text-[#706B65] block uppercase">
                  FULL NAME / COMPANY *
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Chief Adeleke / Prime Estates"
                  className="w-full bg-white border border-[rgba(28,29,31,0.15)] focus:border-[#1C1D1F] px-3.5 py-2.5 text-sm text-[#1C1D1F] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono-meta text-[9px] tracking-[0.2em] text-[#706B65] block uppercase">
                  WHATSAPP / PHONE NUMBER *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234 80..."
                  className="w-full bg-white border border-[rgba(28,29,31,0.15)] focus:border-[#1C1D1F] px-3.5 py-2.5 text-sm text-[#1C1D1F] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="font-mono-meta text-[9px] tracking-[0.2em] text-[#706B65] block uppercase">
                  PROJECT LOCATION *
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-white border border-[rgba(28,29,31,0.15)] focus:border-[#1C1D1F] px-3.5 py-2.5 text-sm text-[#1C1D1F] outline-none cursor-pointer"
                >
                  <option value="Ikoyi / Victoria Island, Lagos">Ikoyi / Victoria Island, Lagos</option>
                  <option value="Lekki Phase 1 / Chevron / Ajah">Lekki Phase 1 / Chevron / Ajah</option>
                  <option value="Banana Island / Parkview, Lagos">Banana Island / Parkview, Lagos</option>
                  <option value="Ikeja GRA / Mainland Lagos">Ikeja GRA / Mainland Lagos</option>
                  <option value="Eko Atlantic City, Lagos">Eko Atlantic City, Lagos</option>
                  <option value="Abuja FCT (Maitama, Asokoro, Guzape)">Abuja FCT (Maitama, Asokoro, Guzape)</option>
                  <option value="Port Harcourt / Other Location">Port Harcourt / Other Location</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-mono-meta text-[9px] tracking-[0.2em] text-[#706B65] block uppercase">
                  PRIMARY SERVICE REQUIRED *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-[rgba(28,29,31,0.15)] focus:border-[#1C1D1F] px-3.5 py-2.5 text-sm text-[#1C1D1F] outline-none cursor-pointer"
                >
                  <option value="Plumbing Installation & Water Systems">
                    Plumbing Installation &amp; Water Systems
                  </option>
                  <option value="Sanitaryware, Bathrooms & Wet Rooms">
                    Sanitaryware, Bathrooms &amp; Wet Rooms
                  </option>
                  <option value="Plant Room, Pumps & Water Treatment">
                    Plant Room, Pumps &amp; Water Treatment
                  </option>
                  <option value="Building Construction & Structural Works">
                    Building Construction &amp; Structural Works
                  </option>
                  <option value="Turnkey Plumbing & Construction Project">
                    Turnkey Plumbing &amp; Construction Project
                  </option>
                  <option value="Maintenance, Diagnostics & Servicing">
                    Maintenance, Diagnostics &amp; Servicing
                  </option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-mono-meta text-[9px] tracking-[0.2em] text-[#706B65] block uppercase">
                PROJECT NOTES / SPECIFICATIONS
              </label>
              <textarea
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Share project dimensions, number of storeys/bathrooms, drawings availability, or target timeline..."
                className="w-full bg-white border border-[rgba(28,29,31,0.15)] focus:border-[#1C1D1F] px-3.5 py-2.5 text-sm text-[#1C1D1F] outline-none resize-none font-light"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-4 bg-[#1C1D1F] hover:bg-[#A38B6C] text-white font-mono-meta text-[11px] tracking-[0.2em] font-semibold transition-colors cursor-pointer shadow-md"
              >
                SUBMIT FOR ENGINEER REVIEW
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 border border-[rgba(28,29,31,0.25)] hover:border-[#1C1D1F] text-[#1C1D1F] font-mono-meta text-[11px] tracking-[0.18em] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#A38B6C]" />
                <span>CHAT VIA WHATSAPP</span>
              </a>
            </div>

            <div className="text-[10px] text-[#706B65] font-mono-meta text-center tracking-[0.1em] pt-1">
              OOH JAY CONSTRUCTION & PLUMBING • LAGOS, NIGERIA
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
