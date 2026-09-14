import { Testimonial, ProcessStep } from '../types';

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
    image: '/plumber-working-in-kitchen.jfif',
    imageCaption: 'On-site technical inspection — plumber at work in kitchen, checking supply lines & routing (Abiola Way, Abeokuta base, nationwide)',
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
    image: '/industrial-plumbing.jfif',
    imageCaption: 'Industrial overhead pipework and manifold layout — planning risers and pressure zones before install',
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
    image: '/plumber-laying-pipes.jfif',
    imageCaption: 'Plumber laying pipes for new supply manifold — neat, serviceable runs before close-up',
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
    image: '/leak-tester.jpg',
    imageCaption: 'Leak detection tester and pressure gauge on site — verifying integrity before handover',
  },
];
