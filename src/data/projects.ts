import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'copper-manifold-installation',
    number: '01',
    title: 'Copper Supply Manifold',
    location: 'ABEOKUTA',
    year: '2024',
    category: 'Plumbing & Hydronics',
    image: '/plumber-laying-pipes.jfif',
    description:
      'Plumber laying copper pipes for a new supply manifold — neat runs set out for access and tested before walls close. For new builds and repairs on existing homes,',
    client: 'Residential build, Abeokuta — new manifold & supply rework',
    scope: [
      'Copper supply pipework set out for clear access',
      'Isolation points positioned for servicing',
      'Hot water recirculation where needed',
      'Tested before walls are closed',
    ],
    metrics: [
      { label: 'Focus', value: 'Access & reliability' },
      { label: 'Installed', value: 'Serviceable layout' },
      { label: 'Material', value: 'Copper pipework' },
    ],
  },
  {
    id: 'mechanical-plant-room',
    number: '02',
    title: 'Central Water Plant & Pumps',
    location: 'LAGOS',
    year: '2024',
    category: 'Plumbing & Hydronics',
    image: '/pressure-pump-installs.jfif',
    description:
      'Pressure pump and filter array in a plant room — silent install set for steady pressure and clean delivery. New plant builds and servicing of existing pump sets',
    client: 'Residential compound, Lagos — plant room & filtration',
    scope: [
      'Booster pumps set for steady pressure',
      'Filtration and water treatment where required',
      'Mounted to reduce vibration and noise',
      'Laid out for ongoing servicing',
    ],
    metrics: [
      { label: 'Focus', value: 'Steady pressure' },
      { label: 'Delivery', value: 'Clean & consistent' },
      { label: 'Access', value: 'Serviceable plant' },
    ],
  },
  {
    id: 'victoria-island-master-bath',
    number: '03',
    title: 'Wet Room & Sanitaryware',
    location: 'ABEOKUTA',
    year: '2024',
    category: 'Plumbing & Hydronics',
    image: '/master-bathroom-ensuite.jfif',
    description:
      'Master bathroom ensuite — basin, shower and watertight finish as installed. Concealed pipework and waterproofing for daily use, for new bathrooms and refits on existing homes.',
    client: 'Residential ensuite, Abeokuta',
    scope: [
      'Concealed mixers and shower bodies',
      'Drainage set for quiet, reliable flow',
      'Waterproofing behind tiles and floors',
      'Falls graded for clean draining',
    ],
    metrics: [
      { label: 'Focus', value: 'Long-term use' },
      { label: 'Finish', value: 'Tidy & serviceable' },
      { label: 'Detail', value: 'Concealed services' },
    ],
  },
  {
    id: 'pressure-testing-valving',
    number: '04',
    title: 'Pressure Testing & Valving',
    location: 'ABEOKUTA',
    year: '2024',
    category: 'Plumbing & Hydronics',
    image: '/leak-tester.jpg',
    description:
      'Leak detection tester and pressure gauge on site — pipework tested and valved to confirm integrity before close-up. For new runs and repairs on existing lines',
    client: 'Site testing, Abeokuta — new & existing pipework',
    scope: [
      'Isolation valving positioned for access',
      'Pressure hold before concealment',
      'Balancing for even flow',
      'Fittings selected for durability',
    ],
    metrics: [
      { label: 'Check', value: 'Tested before close' },
      { label: 'Flow', value: 'Even distribution' },
      { label: 'Fittings', value: 'Durable brassware' },
    ],
  },
  {
    id: 'subterranean-drainage-build',
    number: '05',
    title: 'Drainage & Integrated Build',
    location: 'OGUN STATE',
    year: '2024',
    category: 'Complete Design-Build',
    image: '/soakaways.jfif',
    description:
      'Soakaway and drainage chamber as built — drainage and building work coordinated so services run cleanly. New soakaway builds and fixes for blocked or smelly existing drains,',
    client: 'Residential site, Ogun State — soakaway & drainage',
    scope: [
      'Storm drainage set within the structure',
      'Sleeves coordinated with foundations',
      'Pumps and lift stations where needed',
      'Waterproofing at key junctions',
    ],
    metrics: [
      { label: 'Coordination', value: 'Services + structure' },
      { label: 'Drainage', value: 'Integrated routing' },
      { label: 'Finish', value: 'Clean handover' },
    ],
  },
  {
    id: 'commercial-hydronic-risers',
    number: '06',
    title: 'Commercial Risers & Plant',
    location: 'ABUJA',
    year: '2023',
    category: 'Plumbing & Hydronics',
    image: '/industrial-plumbing.jfif',
    description:
      'Industrial overhead pipework in a commercial plant — risers, plant and drainage coordinated for ongoing operation. New commercial installs and remedial work on existing systems, serving nationwide.',
    client: 'Commercial building, Abuja FCT — risers & plant',
    scope: [
      'Risers and pressure control where needed',
      'Drainage and ejector arrangements',
      'Plant connections coordinated',
      'Laid out for maintenance access',
    ],
    metrics: [
      { label: 'Scope', value: 'Multi-storey' },
      { label: 'Coordination', value: 'MEP together' },
      { label: 'Access', value: 'Serviceable' },
    ],
  },
];
