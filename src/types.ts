export interface Project {
  id: string;
  number: string;
  title: string;
  location: string;
  year: string;
  category: 'Construction' | 'Plumbing & Hydronics' | 'Complete Design-Build';
  image: string;
  description: string;
  client?: string;
  scope: string[];
  metrics?: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  detailedDesc: string;
  image: string;
  highlights: string[];
  technicalSpecs: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  location: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  image?: string;
  imageCaption?: string;
}
