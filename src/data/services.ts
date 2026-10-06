import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'plumbing-hydronics',
    number: '01',
    title: 'Plumbing & Mechanical Systems',
    subtitle: 'Water Infrastructure, Pipework & Pressure Systems',
    shortDesc:
      'Copper and PPR pipe networks, steady-pressure booster pumps, multi-stage water filtration, and quiet drainage lines.',
    detailedDesc:
      'Plumbing in Nigeria has to withstand harsh borehole water, heavy sediment, and sudden pressure spikes. We install distribution manifolds, which are central hubs that feed each tap and shower through its own dedicated line. That keeps water pressure balanced so a flushing toilet downstairs never starves an upstairs shower. We use hard-drawn copper and heavy-wall PPR piping on new builds and occupied properties.',
    image: '/pressure-pump-installs.jfif',
    highlights: [
      'Hard-drawn brazed copper and multilayer PPR/PEX supply lines',
      'Whole-house water filtration, softening, and sediment removal',
      'Constant-pressure booster pumps calibrated to protect fittings',
      'Acoustic drainage stacks that run quietly inside walls',
    ],
    technicalSpecs: [
      { label: 'Testing', value: 'Pressurized before walls close' },
      { label: 'Water quality', value: 'Clean, filtered delivery' },
      { label: 'Flow', value: 'Steady, balanced pressure' },
    ],
  },
  {
    id: 'architectural-finishing',
    number: '02',
    title: 'Sanitaryware & Luxury Wet Areas',
    subtitle: 'Bathrooms, Concealed Mixers & Waterproofing',
    shortDesc:
      'In-wall mixer valves, walk-in wet rooms, flush floor drains, freestanding baths, and sanitary fittings for new builds and renovations.',
    detailedDesc:
      'A great bathroom starts with what sits behind the tiles. We install the concealed pipework and the waterproof membrane together, so water cannot seep into the subfloor or walls. We set floor drains with laser-guided falls to prevent pooling, and align all pipe outlets squarely with tile layouts before any wall is closed.',
    image: '/bathroom-installation.jfif',
    highlights: [
      'Concealed thermostatic shower valves and in-wall cistern frames',
      'Continuous waterproofing membranes on floors and wet walls',
      'Walk-in showers with linear trench drains set to proper fall',
      'Accurate sanitaryware alignment with wall and floor tiles',
    ],
    technicalSpecs: [
      { label: 'Drainage slope', value: 'Laser-checked gradient' },
      { label: 'Waterproofing', value: 'Continuous sealed membrane' },
      { label: 'Noise control', value: 'Cushioned pipe brackets' },
    ],
  },
  {
    id: 'maintenance-renovation',
    number: '03',
    title: 'Plant Rooms, Diagnostics & Servicing',
    subtitle: 'Booster Stations, Filtration & Preventative Care',
    shortDesc:
      'Central plant rooms, booster pump maintenance, acoustic leak tracing, and line retrofits for homes and commercial buildings.',
    detailedDesc:
      'We install and maintain central plant rooms that supply compounds, estates, and offices. When a pump hums loudly, short-cycles, or loses prime, we trace the pressure switches and check valves. For hidden leaks behind finished walls, we use acoustic listening equipment to locate the break accurately without knocking down tiles unnecessarily.',
    image: '/leak-tester.jpg',
    highlights: [
      'Booster pump maintenance and variable-speed drive setup',
      'Acoustic and thermal leak tracing without destructive demolition',
      'Storage tank descaling, disinfection, and float valve overhaul',
      'Routine maintenance visits with written check sheets',
    ],
    technicalSpecs: [
      { label: 'Diagnostic method', value: 'Acoustic tracing and pressure gauges' },
      { label: 'Response', value: 'Prompt dispatch from Abeokuta & Lagos' },
      { label: 'Workmanship', value: 'Backed by written testing records' },
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
