import { Testimonial, ProcessStep } from '../types';
import copperRoughInImg from '../assets/images/hero_copper_plumbing_1788680078325.jpg';
import pressureTestingImg from '../assets/images/plumbing_pressure_testing_1788680092524.jpg';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'We had continuous water pressure drops and pipe hammer issues with our previous contractors. Ooh Jay redesigned our entire estate booster pump manifold and water treatment plant. Water pressure has been steady and clean across all four villas ever since.',
    author: 'Chief Olumide Adeleke',
    role: 'Estate Trustee',
    organization: 'Admiralty Crest Residences',
    location: 'Lekki Phase 1, Lagos',
  },
  {
    id: 'test-2',
    quote:
      'As an architectural firm, we demand that plumbing and drainage conduits never compromise clean interior lines. Ooh Jay’s plumbing team works with precision—every in-wall mixer, linear drain, and copper riser aligns perfectly with the drawings.',
    author: 'Arc. Chioma Nwosu',
    role: 'Lead Architect',
    organization: 'Studio Form & Space',
    location: 'Victoria Island, Lagos',
  },
  {
    id: 'test-3',
    quote:
      'Having one competent team coordinate the deep structural concrete work and the concealed plumbing prevented the typical headaches on site. Ooh Jay delivered our residence with solid construction and zero post-handover leaks.',
    author: 'Engr. Babatunde Alabi',
    role: 'Property Owner',
    organization: 'Apex Urban Developments',
    location: 'Ikoyi, Lagos',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    duration: 'Stage 01',
    description:
      'We discuss your project in detail, understand your objectives, review your requirements, and determine the exact scope needed for your plumbing or building project.',
    deliverables: [
      'Direct consultation on plumbing & building needs',
      'Site parameters & project objective review',
      'Preliminary timeline & feasibility guidance',
    ],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85',
    imageCaption: 'On-site technical inspection of water supply, borehole lines & routing',
  },
  {
    number: '02',
    title: 'Plan',
    duration: 'Stage 02',
    description:
      'We assess the site, soil conditions, water sources, and technical requirements. Our engineers draft coordinated piping layouts, structural plans, and transparent cost estimates.',
    deliverables: [
      'Site assessment & water source analysis',
      'Coordinated pipework & construction drawings',
      'Transparent, itemized Bill of Quantities (BOQ)',
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    imageCaption: 'Hydraulic flow calculations, pipe sizing & manifold schematic layout',
  },
  {
    number: '03',
    title: 'Build & Install',
    duration: 'Stage 03',
    description:
      'Our dedicated team carries out the construction and plumbing work under experienced on-site supervision, installing certified pipes, fittings, and structural elements.',
    deliverables: [
      'Precision installation of water supply & drainage lines',
      'Supervised concrete, masonry & structural framing',
      'Regular photo and video progress updates',
    ],
    image: copperRoughInImg,
    imageCaption: 'Hard-drawn copper manifold assembly, brazed joints & rough-in pipework',
  },
  {
    number: '04',
    title: 'Test & Finish',
    duration: 'Stage 04',
    description:
      'We pressure-test the water lines, verify all pumps and fixtures, complete finishing works, and prepare the property for seamless handover with full workmanship backing.',
    deliverables: [
      'Rigorous hydrostatic pressure hold testing',
      'Sanitaryware & pump commissioning',
      'Laminated pipe conduit diagrams & handover documentation',
    ],
    image: pressureTestingImg,
    imageCaption: '16-bar hydrostatic pressure testing with calibrated diagnostic gauges',
  },
];
