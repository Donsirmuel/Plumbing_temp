import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'plumbing-hydronics',
    number: '01',
    title: 'Plumbing & Mechanical Systems',
    subtitle: 'Water Infrastructure, Pipework & Pressure Systems',
    shortDesc:
      'Engineered water supply networks, brazed copper and PPR pipework, constant-pressure booster pumps, multi-stage water filtration, and silent drainage systems',
    detailedDesc:
      'Water systems in Nigeria require specialized engineering to handle aggressive borehole chemistry, pressure fluctuations, and sediment. We design and install durable distribution networks using hard-drawn copper, multi-layer piping, and calibrated booster arrays to guarantee clean, steady water throughout your property — whether it is a new site or an occupied home.',
    image: '/pressure-pump-installs.jfif',
    highlights: [
      'Hard-Drawn Brazed Copper & Multilayer PPR/PEX Supply Lines',
      'Whole-Building Water Treatment, Softening & UV Purification',
      'Constant-Pressure Variable Speed Booster Pump Systems',
      'Silent Acoustic Soil, Waste & Stormwater Drainage Stacks',
    ],
    technicalSpecs: [
      { label: 'Tested', value: 'Before walls close' },
      { label: 'Water Quality', value: 'Clean, treated delivery' },
      { label: 'Delivery', value: 'Steady pressure' },
    ],
  },
  {
    id: 'architectural-finishing',
    number: '02',
    title: 'Sanitaryware & Luxury Wet Areas',
    subtitle: 'Bathrooms, Concealed Mixers & Waterproofing',
    shortDesc:
      'Precision installation of concealed thermostatic valves, walk-in wet rooms, flush floor drains, freestanding tubs, and premium bathroom sanitaryware — new fits and watertight refits alike.',
    detailedDesc:
      'We bring meticulous craftsmanship to bathrooms and wet rooms. By handling both the in-wall plumbing rough-in and the waterproofing membrane, we prevent leaks, ensure precise drainage slope, and guarantee flawless alignment with tiles, niches, and luxury brassware — for new builds and refurbishments nationwide from Abeokuta.',
    image: '/bathroom-installation.jfif',
    highlights: [
      'In-Wall Concealed Thermostatic Shower & Basin Rough-Ins',
      'Multi-Layer Waterproofing Membrane & Tanking Systems',
      'Zero-Threshold Walk-in Showers & Linear Trench Drains',
      'Precision Ceramic, Travertine & Sanitaryware Fitting',
    ],
    technicalSpecs: [
      { label: 'Drainage Slope', value: 'Calibrated Laser Grade' },
      { label: 'Waterproofing', value: 'Dual-Layer Sealed Tanking' },
      { label: 'Acoustic Sound', value: 'Low-Decibel Silent Flow' },
    ],
  },
  {
    id: 'maintenance-renovation',
    number: '03',
    title: 'Plant Rooms, Diagnostics & Servicing',
    subtitle: 'Booster Stations, Filtration & Preventative Care',
    shortDesc:
      'Central plant room installations, water pump servicing, leak diagnostics, pipework retrofitting, and ongoing facility support — new installs and servicing of existing systems.',
    detailedDesc:
      'We design, overhaul, and maintain central mechanical plant rooms for residential compounds and commercial properties. From variable-speed pumps and filtration tanks to non-destructive leak diagnostics, our technical teams keep building systems running smoothly',
    image: '/leak-tester.jpg',
    highlights: [
      'Central Water Booster Pump & Filtration Plant Overhauls',
      'Non-Destructive Thermal & Acoustic Leak Detection',
      'Water Storage Tank Cleaning, Chlorination & Balancing',
      'Scheduled Preventative Maintenance Agreements',
    ],
    technicalSpecs: [
      { label: 'Testing Method', value: 'Non-Destructive Diagnostic' },
      { label: 'Response Team', value: 'Rapid Response' },
      { label: 'Workmanship', value: 'Full Guarantee on Work' },
    ],
  },
  {
    id: 'structural-construction',
    number: '04',
    title: 'Construction Support',
    subtitle: 'When the project needs a coordinated building team',
    shortDesc:
      'Construction support when a plumbing project needs it — structural work, foundations, concrete framing and masonry planned together with the plumbing so pipe penetrations and services are built in, not chased in later. New builds and coordinated repairs.',
    detailedDesc:
      'For projects that need more than plumbing alone, our building team works with our plumbers from the drawings. That means sleeves, risers and drainage are coordinated early — no destructive chasing and cleaner finishes — for both new structures and existing property upgrades, nationwide.',
    image: '/plumbing-installation.jfif',
    highlights: [
      'Foundations, concrete framing & masonry when required',
      'Pipe penetrations and sleeves coordinated in the structure',
      'One team for plumbing and building — fewer handoffs',
      'Supervised workmanship and clear handover',
    ],
    technicalSpecs: [
      { label: 'Role', value: 'Support when needed' },
      { label: 'Coordination', value: 'Plumbing + building together' },
      { label: 'Finish', value: 'Clean, coordinated handover' },
    ],
  },
];
