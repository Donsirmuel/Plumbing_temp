import React, { useEffect, useRef, useState } from 'react';

export interface ContactPageProps {
  onOpenQuote?: (serviceTitle?: string) => void;
}

const MAP_PLACEHOLDER = '/overhead-water-tank.jfif';

const AVATAR_IMG = '/plumber-laying-pipes.jfif';

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuote }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [propertyCategory, setPropertyCategory] = useState<'Private Home' | 'Commercial' | 'Diaspora Managed'>(
    'Private Home'
  );
  const [form, setForm] = useState({
    name: '',
    phone: '',
    location: 'Abeokuta — Abiola Way & Environs (Priority base)',
    scope: 'Leaking, burst pipe or urgent shut-off',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = root.querySelectorAll<HTMLElement>('.reveal-entry');

    if (false) { // reduced-motion disabled
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      els.forEach((el) => {
        if (!el.classList.contains('is-visible')) observer.observe(el);
      });
      return () => observer.disconnect();
    } else {
      els.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onOpenQuote) onOpenQuote(form.scope || undefined);
    }, 650);
  };

  const waForScope = `https://wa.me/2349031386928?text=${encodeURIComponent(
    `Hello OOH JAY — I'd like a clear quotation.\n\nName: ${form.name || '(to confirm)'}\nPhone/WhatsApp: ${form.phone || '(to confirm)'}\nProperty: ${propertyCategory}\nLocation: ${form.location}\nNeeds: ${form.scope}\nNote: ${form.note || 'Happy to share photos'}\n\nBase: Abiola Way, Abeokuta · serving nationwide`
  )}`;

  return (
    <div ref={rootRef} className="w-full bg-[#fff8f3] text-[#1d1b18]">
      {/* ambient warm glows */}
      <div className="relative w-full max-w-full overflow-hidden min-w-0">
        <div className="absolute -top-32 right-1/4 w-72 sm:w-96 h-72 sm:h-96 max-w-[80vw] bg-[#ffdbd1]/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-80 -left-20 w-64 sm:w-80 h-64 sm:h-80 max-w-[80vw] bg-[#d4e7d8]/40 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Editorial Header — simplified: no pill eyebrow, tighter hierarchy */}
        <div id="contact-hero" className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 pt-10 pb-8 md:pb-12 reveal-entry">
          <div className="max-w-3xl flex flex-col gap-3">
            <h1
              className="text-[#1d1b18] tracking-[-0.03em] leading-[1.05] font-semibold"
              style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.08' }}
            >
              Got a leak, or planning something new?{' '}
              <span className="font-semibold text-[#a43716]">Talk straight to a plumber.</span>
            </h1>

            <p className="text-[15px] md:text-[16px] leading-7 text-[#58423c] max-w-2xl">
              No queue, no jargon. Send a photo or brief note and a senior plumber replies plainly — with practical next steps and a clear quotation before any work begins for new builds or repairs.
            </p>
            <p className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#7b542b]">Abiola Way, Abeokuta · Lagos field teams · Nationwide</p>
          </div>
        </div>
      </div>

      {/* Main Dual Column Workspace */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 reveal-entry">
            {/* Emergency Desk — singular visual anchor, bigger, more direct */}
            <div className="bg-[#a43716] text-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
              <div className="p-8 md:p-10 flex-1 flex flex-col gap-4 justify-center">
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-[#ffdbd1]">
                  <span className="w-6 h-px bg-white/35" aria-hidden="true"></span>Active Emergency Desk · Abiola Way
                </span>
                <h2 className="font-['Fraunces',serif] text-[26px] md:text-[32px] leading-[1.1] font-semibold tracking-[-0.03em] text-white">
                  Need to stop water fast?
                </h2>
                <p className="text-[15px] md:text-[16px] leading-7 text-white/90 max-w-lg">
                  We will talk you through a safe shut-off on the phone while we dispatch from Abiola Way. For new builds and urgent repairs — nationwide follow-ups.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="tel:+2349031386928"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#a43716] text-[16px] font-bold tracking-[-0.01em] rounded-full shadow-md hover:bg-[#fff8f3] transition-all whitespace-nowrap active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a43716]"
                  >
                    <span className="material-symbols-outlined text-[20px]">call</span>
                    Call Direct — 0903 138 6928
                  </a>
                  <span className="text-[13px] text-white/75">Average pickup &lt; 60 seconds · 7am–7pm, emergency after hours</span>
                </div>
              </div>
              <div className="lg:w-[40%] relative min-h-[240px] lg:min-h-[360px] bg-[#7a1f0a] overflow-hidden">
                <img
                  src={MAP_PLACEHOLDER}
                  alt="Overhead water tank as installed — example of tidy tank work we respond to urgently"
                  className="w-full h-full object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#a43716]/60 via-transparent to-transparent lg:bg-gradient-to-r" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 shadow-md">
                  <span className="w-9 h-9 rounded-full bg-[#d4e7d8] flex items-center justify-center text-[#516257] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#1d1b18] leading-none">Abiola Way, Abeokuta</span>
                    <span className="text-[12px] text-[#58423c]">Ogun State · serving nationwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Channels — simplified two-item list without card chrome */}
            <div className="bg-white rounded-2xl border border-[#dfc0b7]/15 divide-y divide-[#f3ede7]">
              <div className="p-6 flex gap-4 items-start">
                <span className="shrink-0 w-9 h-9 rounded-full bg-[#f3ede7] flex items-center justify-center text-[#516257] border border-[#dfc0b7]/15" aria-hidden="true">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold tracking-[-0.03em] text-[#1d1b18]">
                    WhatsApp Priority Line
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-1">
                    Send a photo or short video: leaking joint, weak pressure, heater noise. A senior plumber replies with honest analysis and free quotation guidance — no photo-review fee.
                  </p>
                  <a
                    href="https://wa.me/2349031386928?text=Hello%20OOH%20JAY%2C%20I%20have%20a%20plumbing%20issue%20I%20need%20help%20with"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[#a43716] text-[13px] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] rounded-sm"
                  >
                    Start WhatsApp Chat
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                  <p className="text-[12px] text-[#8b716a] mt-1">Fastest reply — usually within the hour</p>
                </div>
              </div>
              <div className="p-6 flex gap-4 items-start">
                <span className="shrink-0 w-9 h-9 rounded-full bg-[#f3ede7] flex items-center justify-center text-[#2c1600] border border-[#dfc0b7]/15" aria-hidden="true">
                  <span className="material-symbols-outlined text-[18px]">public</span>
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold tracking-[-0.03em] text-[#1d1b18]">
                    Diaspora Property Desk
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-6 text-[#58423c] mt-1">
                    Managing a home from the UK, US, Canada or Europe. We do video checks, clear parts lists and tidy photo handovers for new and existing work — WhatsApp updates on your hours.
                  </p>
                  <a
                    href="https://wa.me/2349031386928?text=Hello%2C%20I%20am%20calling%20from%20abroad%20regarding%20my%20property%20in%20Nigeria"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[#a43716] text-[13px] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] rounded-sm"
                  >
                    Diaspora Consultation
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Physical Location */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#dfc0b7]/20 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f3ede7] flex items-center justify-center text-[#a43716]">
                    <span className="material-symbols-outlined text-[20px]">home_pin</span>
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-bold tracking-[-0.04em] text-[#1d1b18]">
                      Physical Location
                    </h3>
                    <p className="text-[15px] leading-6 text-[#58423c]">Abiola Way, Abeokuta, Ogun State with nationwide reach</p>
                  </div>
                </div>
                <a
                  href="tel:+2349031386928"
                  className="px-3 py-1 bg-[#d4e7d8] text-[#57685d] rounded-full text-[13px] font-semibold tracking-[0.04em] w-fit hover:bg-[#b8cbbd] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#516257]"
                >
                  Direct call
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#f9f2ed] rounded-lg flex flex-col gap-1">
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#58423c]">Scheduled Field Hours</span>
                  <span className="text-[15px] font-semibold text-[#1d1b18]">Monday – Saturday</span>
                  <span className="text-[14px] text-[#8b716a]">7:00 AM – 7:00 PM West Africa Time</span>
                </div>
                <div className="p-4 bg-[#f9f2ed] rounded-lg flex flex-col gap-1">
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Emergency Occasions</span>
                  <span className="text-[15px] font-semibold text-[#1d1b18]">Sunday & After-Hours</span>
                  <span className="text-[14px] text-[#8b716a]">Rapid dispatch with nationwide coverage</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f3ede7] flex items-start gap-4">
                <img
                  src={AVATAR_IMG}
                  alt="Plumber laying pipes — neat supply manifold as fitted, Abiola Way Abeokuta base nationwide"
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0 shadow-sm bg-white"
                  loading="lazy"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold text-[#1d1b18] leading-5">“You will never deal with an unverified middleman.”</p>
                  <p className="text-[15px] leading-6 text-[#58423c]">
                    Every call and site check is handled or directly supervised by a qualified plumber; honest about costs, tidy on site, clear on warranty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Intake Form — lighter design language, underline inputs */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#dfc0b7]/15 flex flex-col gap-6 reveal-entry">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a43716]">Direct Intake</span>
              <h2 className="font-['Fraunces',serif] text-[22px] font-semibold tracking-[-0.03em] text-[#1d1b18]">
                Request a Clear Quote
              </h2>
              <p className="text-[15px] leading-6 text-[#58423c]">
                Fill this in 45 seconds. We reply by WhatsApp or phone — plain quotation, no obligation. New builds and repairs welcome.
              </p>
            </div>

            {!submitted ? (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-2">
                  <label htmlFor="full-name" className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#58423c]">
                    Your Full Name
                  </label>
                  <input
                    id="full-name"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Tunde Adeyemi"
                    required
                    type="text"
                    autoComplete="name"
                    className="w-full px-0 py-3 bg-transparent text-[#1d1b18] border-0 border-b border-[#dfc0b7]/60 rounded-none text-[15px] outline-none focus:border-[#a43716] focus:ring-0 transition-colors placeholder:text-[#8b716a]/70"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone-number" className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#58423c]">
                    Phone or WhatsApp Number
                  </label>
                  <input
                    id="phone-number"
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="+234 800 000 0000"
                    required
                    type="tel"
                    autoComplete="tel"
                    className="w-full px-0 py-3 bg-transparent text-[#1d1b18] border-0 border-b border-[#dfc0b7]/60 rounded-none text-[15px] outline-none focus:border-[#a43716] focus:ring-0 transition-colors placeholder:text-[#8b716a]/70"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#58423c]">Property Category</span>
                  <div className="grid grid-cols-3 gap-2" role="group" aria-label="Property Category">
                    {(
                      [
                        ['Private Home', 'Private'],
                        ['Commercial', 'Commercial'],
                        ['Diaspora Managed', 'Diaspora'],
                      ] as const
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setPropertyCategory(value)}
                        aria-pressed={propertyCategory === value}
                        className={`min-h-11 py-3 px-2 text-center rounded-full text-[12px] font-semibold tracking-[0.03em] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] border ${
                          propertyCategory === value
                            ? 'bg-[#1d1b18] text-white border-[#1d1b18] shadow-sm'
                            : 'bg-white text-[#58423c] border-[#dfc0b7]/30 hover:border-[#dfc0b7]/50 hover:bg-[#fffaf7]'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service-location" className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#58423c]">
                    Neighbourhood / City
                  </label>
                  <select
                    id="service-location"
                    value={form.location}
                    onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
                    className="w-full px-0 py-3 bg-transparent text-[#1d1b18] border-0 border-b border-[#dfc0b7]/60 rounded-none text-[14px] outline-none focus:border-[#a43716] focus:ring-0 transition-colors cursor-pointer"
                  >
                    <option>Abeokuta — Abiola Way & Environs (Priority base)</option>
                    <option>Abeokuta — Adigbe / Obantoko / Laderin</option>
                    <option>Abeokuta — Kemta / Idi-Aba / Oke-Ilewo</option>
                    <option>Lagos — Ikoyi & Victoria Island (Daily field team)</option>
                    <option>Lagos — Lekki Phase 1 / Oniru / Chevron / Ajah</option>
                    <option>Lagos — Ikeja GRA / Mainland / Ikeja corridor</option>
                    <option>Lagos — Surulere / Yaba / Maryland</option>
                    <option>Ibadan / Sagamu / Ogun Corridor</option>
                    <option>Abuja — Maitama / Central (Scheduled)</option>
                    <option>Other location — Nigeria & beyond (Scheduled)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service-scope" className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#58423c]">
                    What Needs Sorting?
                  </label>
                  <select
                    id="service-scope"
                    value={form.scope}
                    onChange={(e) => setForm((p) => ({ ...p, scope: e.target.value }))}
                    className="w-full px-0 py-3 bg-transparent text-[#1d1b18] border-0 border-b border-[#dfc0b7]/60 rounded-none text-[14px] outline-none focus:border-[#a43716] focus:ring-0 transition-colors cursor-pointer"
                  >
                    <option>Leaking, burst pipe or urgent shut-off</option>
                    <option>Low water pressure or booster pump concern</option>
                    <option>Bathroom / kitchen fitting (new or refit)</option>
                    <option>Water heater or overhead storage tank</option>
                    <option>Repiping, renovation or new-build plumbing</option>
                    <option>Full plumbing check / maintenance visit</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="issue-notes" className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#58423c]">
                    Brief Note on What&apos;s Happening
                  </label>
                  <textarea
                    id="issue-notes"
                    value={form.note}
                    onChange={(e) => setForm((p) => ({ ...p, note: e.target.value }))}
                    placeholder="e.g. Damp patch behind master bath, pump reading zero, new house needs full first-fix..."
                    rows={3}
                    className="w-full px-3 py-3 bg-[#fffaf7] text-[#1d1b18] rounded-xl text-[14px] outline-none border border-[#dfc0b7]/25 focus:border-[#a43716]/30 focus:bg-white focus:ring-0 transition-all placeholder:text-[#8b716a]/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 py-4 px-6 bg-[#a43716] text-white text-[14px] font-semibold tracking-[0.03em] rounded-full shadow-sm hover:bg-[#c54f2c] transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a43716] focus-visible:ring-offset-2 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" aria-hidden="true" />
                      <span>Connecting dispatch…</span>
                    </>
                  ) : (
                    <>
                      <span>Send Request & Get Clear Quote</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </>
                  )}
                </button>

                <p className="text-[14px] leading-5 text-[#8b716a] text-center">
                  No obligation. We review and share a clear quotation before any work starts.
                </p>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center p-6 bg-[#d4e7d8] text-[#1d1b18] rounded-xl gap-3">
                <span className="material-symbols-outlined text-[36px] text-[#516257]">check_circle</span>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-bold tracking-[-0.04em] text-[#1d1b18]">
                  Request received — we&apos;re on it
                </h3>
                <p className="text-[15px] leading-6 text-[#58423c]">
                  Thank you{form.name ? `, ${form.name}` : ''}. Your note has reached our desk at Abiola Way. We will reply shortly on WhatsApp or phone with a clear quotation.
                </p>
                <div className="mt-1 flex flex-col sm:flex-row gap-2 w-full justify-center">
                  <a
                    href={waForScope}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-[#1d1b18] rounded-full text-[14px] font-semibold shadow-sm hover:bg-[#fff8f3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#516257]"
                  >
                    Continue on WhatsApp
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                  </a>
                  <a
                    href="tel:+2349031386928"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-[#516257] text-white rounded-full text-[14px] font-semibold hover:bg-[#3a4b40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#516257]"
                  >
                    Call now if urgent
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', phone: '', location: 'Abeokuta — Abiola Way & Environs (Priority base)', scope: 'Leaking, burst pipe or urgent shut-off', note: '' });
                    setPropertyCategory('Private Home');
                  }}
                  className="text-[14px] text-[#516257] underline underline-offset-2 hover:text-[#1d1b18] mt-1 cursor-pointer"
                >
                  Send another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* House Standard — Message via WhatsApp */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-12 py-8 md:py-12 w-full reveal-entry">
        <div className="p-6 md:p-8 bg-[#f3ede7] rounded-xl border border-[#dfc0b7]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#a43716] shadow-sm flex-shrink-0 border border-[#dfc0b7]/20">
              <span className="material-symbols-outlined text-[24px]">verified_user</span>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-bold tracking-[-0.04em] text-[#1d1b18]">
                The OOH JAY House Standard
              </h4>
              <p className="text-[15px] leading-6 text-[#58423c]">Tidy workspaces, Satisfactory job, clear quotation first with workmanship backing and warranty doc on request.</p>
            </div>
          </div>
          <a
            href="https://wa.me/2349031386928?text=Hello%20OOH%20JAY%20%E2%80%94%20I%27d%20like%20to%20confirm%20your%20House%20Standard%20and%20book%20a%20visit"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-[#516257] text-white text-[14px] font-semibold tracking-[0.02em] rounded-full hover:bg-[#3a4b40] transition-colors shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#516257] focus-visible:ring-offset-2 cursor-pointer inline-flex items-center gap-2"
          >
            Message via WhatsApp
            <span className="material-symbols-outlined text-[18px]">chat</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
