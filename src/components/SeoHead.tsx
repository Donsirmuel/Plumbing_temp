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
      'Specialized plumbing engineering and building construction company based in Nigeria. Delivering high-pressure water systems, plant rooms, luxury wet areas, and turnkey construction across Lagos, Abuja, and nationwide.',
  },
  '/services': {
    title: 'Services & Capabilities — OOH JAY Plumbing & Construction',
    description:
      'Explore our core capabilities: water distribution networks, luxury bathrooms, plant room pumps and filtration, diagnostic leak tracing, and turnkey building support.',
  },
  '/work': {
    title: 'Completed Projects & Gallery — OOH JAY Plumbing & Construction',
    description:
      'Examine completed residential and commercial plumbing installations, plant room pump arrays, luxury master ensuites, and water treatment systems across Nigeria.',
  },
  '/about': {
    title: 'About Us — OOH JAY Plumbing & Construction',
    description:
      'Meet OOH JAY. Our engineering standards, in-house team of qualified plumbers and builders, 16-bar pressure testing guarantee, and calm workmanship on every site.',
  },
  '/pricing': {
    title: 'Pricing & Scope — OOH JAY Plumbing & Construction',
    description:
      'Transparent diagnostic fees, itemised material schedules at market cost, and clear workmanship backing for plumbing repairs, refits, and new installations.',
  },
  '/process': {
    title: 'Our Process — OOH JAY Plumbing & Construction',
    description:
      'From initial site audit and itemised quotation to 16-bar pressure testing and clean handover: how we deliver reliable water systems across Nigeria.',
  },
  '/contact': {
    title: 'Contact & Inquiries — OOH JAY Plumbing & Construction',
    description:
      'Call +234 903 138 6928 or send photos on WhatsApp for urgent leaks, project consultations, and site visits in Abeokuta, Lagos, and nationwide.',
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
