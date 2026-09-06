import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'plumbing-hydronics',
    number: '01',
    title: 'Plumbing & Mechanical Systems',
    subtitle: 'Water Infrastructure, Pipework & Pressure Systems',
    shortDesc:
      'Engineered water supply networks, brazed copper and PPR pipework, constant-pressure booster pumps, multi-stage water filtration, and silent drainage systems.',
    detailedDesc:
      'Water systems in Nigeria require specialized engineering to handle aggressive borehole chemistry, pressure fluctuations, and sediment. We design and install durable distribution networks using hard-drawn copper, multi-layer piping, and calibrated booster arrays to guarantee clean, steady water throughout your property.',
    image:
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=85',
    highlights: [
      'Hard-Drawn Brazed Copper & Multilayer PPR/PEX Supply Lines',
      'Whole-Building Water Treatment, Softening & UV Purification',
      'Constant-Pressure Variable Speed Booster Pump Systems',
      'Silent Acoustic Soil, Waste & Stormwater Drainage Stacks',
    ],
    technicalSpecs: [
      { label: 'Pressure Test', value: '16 Bar 24-Hour Hold' },
      { label: 'Water Quality', value: 'WHO Potable Standard' },
      { label: 'Delivery', value: 'Steady Constant Pressure' },
    ],
  },
  {
    id: 'architectural-finishing',
    number: '02',
    title: 'Sanitaryware & Luxury Wet Areas',
    subtitle: 'Bathrooms, Concealed Mixers & Waterproofing',
    shortDesc:
      'Precision installation of concealed thermostatic valves, walk-in wet rooms, flush floor drains, freestanding tubs, and premium bathroom sanitaryware.',
    detailedDesc:
      'We bring meticulous craftsmanship to bathrooms and wet rooms. By handling both the in-wall plumbing rough-in and the waterproofing membrane, we prevent leaks, ensure precise drainage slope, and guarantee flawless alignment with tiles, niches, and luxury brassware.',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
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
    id: 'structural-construction',
    number: '03',
    title: 'Building & Structural Construction',
    subtitle: 'Turnkey Civil Engineering & Reinforced Concrete',
    shortDesc:
      'Solid structural construction, engineered foundations, reinforced concrete framing, masonry, and full building envelopes handled by our construction team.',
    detailedDesc:
      'Our construction team handles residential estates and commercial buildings from the ground up. Because our builders and plumbers work as one unified team, pipe penetrations and conduits are planned directly into the structural drawings—eliminating destructive wall chiseling and ensuring structural integrity.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
    highlights: [
      'Engineered Piling, Raft Foundations & Retaining Structures',
      'High-Strength Reinforced Concrete Slabs, Beams & Columns',
      'Unified Coordination with Concealed MEP Conduits',
      'Rigorous Material Testing & Structural Supervision',
    ],
    technicalSpecs: [
      { label: 'Foundation Work', value: 'Engineered Soil Compliance' },
      { label: 'Structural Concrete', value: 'Supervised Grade Mixes' },
      { label: 'Coordination', value: 'Direct In-House Integration' },
    ],
  },
  {
    id: 'maintenance-renovation',
    number: '04',
    title: 'Plant Rooms, Diagnostics & Servicing',
    subtitle: 'Booster Stations, Filtration & Preventative Care',
    shortDesc:
      'Central plant room installations, water pump servicing, leak diagnostics, pipework retrofitting, and ongoing facility support.',
    detailedDesc:
      'We design, overhaul, and maintain central mechanical plant rooms for residential compounds and commercial properties. From variable-speed pumps and filtration tanks to non-destructive leak diagnostics, our technical teams keep building systems running smoothly.',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=85',
    highlights: [
      'Central Water Booster Pump & Filtration Plant Overhauls',
      'Non-Destructive Thermal & Acoustic Leak Detection',
      'Water Storage Tank Cleaning, Chlorination & Balancing',
      'Scheduled Preventative Maintenance Agreements',
    ],
    technicalSpecs: [
      { label: 'Testing Method', value: 'Non-Destructive Diagnostic' },
      { label: 'Response Team', value: 'Rapid Direct Dispatch' },
      { label: 'Workmanship', value: 'Full Guarantee on Work' },
    ],
  },
];
