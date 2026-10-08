import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteSeo {
  title: string;
  description: string;
}

const ROUTE_SEO_MAP: Record<string, RouteSeo> = {
  '/': {
    title: 'OOH JAY — Plumbing & Construction',
    description:
      'Specialized plumbing engineering and building construction in Nigeria. High-pressure water systems, plant rooms, and luxury wet areas in Lagos and Abuja.',
  },
  '/services': {
    title: 'Services & Capabilities — OOH JAY Plumbing & Construction',
    description:
      'Plumbing engineering capabilities: high-pressure water systems, luxury bathrooms, plant rooms, acoustic pipe insulation, and turnkey building support.',
  },
  '/work': {
    title: 'Completed Projects & Gallery — OOH JAY Plumbing & Construction',
    description:
      'Completed projects: commercial and residential plumbing installations, plant room overhauls, and luxury wet areas in Lagos, Abeokuta, and nationwide.',
  },
  '/about': {
    title: 'About Us — OOH JAY Plumbing & Construction',
    description:
      'Meet OOH JAY: our engineering standards, qualified in-house plumbers and builders, 16-bar pressure testing guarantee, and calm workmanship on every site.',
  },
  '/pricing': {
    title: 'Pricing & Scope — OOH JAY Plumbing & Construction',
    description:
      'Clear diagnostic fees, itemised material schedules at market cost, and workmanship backing for plumbing repairs, refits, and new installations.',
  },
  '/process': {
    title: 'Our Process — OOH JAY Plumbing & Construction',
    description:
      'From site audit and itemised quotation to 16-bar pressure testing and clean handover: how we build and repair water systems across Nigeria.',
  },
  '/contact': {
    title: 'Contact & Inquiries — OOH JAY Plumbing & Construction',
    description:
      'Direct line and WhatsApp hotline (+234 903 138 6928) for urgent leaks, project consultations, and site visits in Abeokuta, Lagos, and nationwide.',
  },
};

export const SeoHead: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = ROUTE_SEO_MAP[pathname] || ROUTE_SEO_MAP['/'];
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const fullUrl = typeof window !== 'undefined' ? window.location.href : '';

    // 1. Update Title
    document.title = seo.title;

    // 2. Helper to set or create meta
    const setMeta = (nameAttr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Update Standard Meta
    setMeta('name', 'description', seo.description);

    // 4. Update OpenGraph Tags
    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    if (fullUrl) {
      setMeta('property', 'og:url', fullUrl);
    }
    setMeta('property', 'og:site_name', 'OOH JAY');
    setMeta('property', 'og:type', 'website');
    if (origin) {
      setMeta('property', 'og:image', `${origin}/og-image.jpg`);
      setMeta('property', 'og:image:secure_url', `${origin}/og-image.jpg`);
    }

    // 5. Update Twitter Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:site', '@oohjayplumbing');
    setMeta('name', 'twitter:creator', '@oohjayplumbing');
    setMeta('name', 'twitter:title', seo.title);
    setMeta('name', 'twitter:description', seo.description);
    if (origin) {
      setMeta('name', 'twitter:image', `${origin}/og-image.jpg`);
    }

    // 6. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    if (fullUrl) {
      canonical.setAttribute('href', fullUrl);
    }
  }, [pathname]);

  return null;
};
