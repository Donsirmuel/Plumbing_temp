import { Project } from '../types';
import copperManifoldImg from '../assets/images/hero_copper_plumbing_1788680078325.jpg';
import centralPlantImg from '../assets/images/central_water_plant_1788680129797.jpg';
import pressureTestingImg from '../assets/images/plumbing_pressure_testing_1788680092524.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'copper-manifold-installation',
    number: '01',
    title: 'COPPER SUPPLY MANIFOLD',
    location: 'LAGOS',
    year: '2024',
    category: 'Plumbing & Hydronics',
    image: copperManifoldImg,
    description:
      'Precision hard-drawn copper water distribution manifold featuring brazed joints, individual isolation valving, and continuous thermostatic pressure balancing loops.',
    client: 'Residential Estate, Lekki Phase 1',
    scope: [
      'Heavy-Gauge Hard-Drawn Brazed Copper Pipework',
      'Individual Branch Isolation & Test Ports',
      'Dual-Loop Hot Water Recirculation Lines',
      '24-Hour 16-Bar Hydrostatic Hold Test',
    ],
    metrics: [
      { label: 'Manifold Ports', value: '18 Independent Lines' },
      { label: 'Pressure Test', value: '16 Bar 24-Hour Hold' },
      { label: 'Pipe Material', value: 'Hard-Drawn Copper' },
    ],
  },
  {
    id: 'mechanical-plant-room',
    number: '02',
    title: 'CENTRAL WATER PLANT & PUMPS',
    location: 'LAGOS',
    year: '2024',
    category: 'Plumbing & Hydronics',
    image: centralPlantImg,
    description:
      'Centralized mechanical plant room equipped with constant-pressure variable speed booster pump arrays, multi-stage filtration, and automated water softening.',
    client: 'Commercial Estate, Eko Atlantic Axis',
    scope: [
      'Constant-Pressure Variable Speed Inverter Pumps',
      'Multi-Stage Reverse Osmosis & UV Purification',
      'Vibration-Isolated Foundation Mounts',
      'Emergency High-Flow Fire Standpipes',
    ],
    metrics: [
      { label: 'Pumping Capacity', value: '450 L/min Constant' },
      { label: 'Delivery Pressure', value: '6.5 Bar Regulated' },
      { label: 'Filtration Standard', value: 'WHO Potable Clean' },
    ],
  },
  {
    id: 'victoria-island-master-bath',
    number: '03',
    title: 'WET ROOM & SANITARYWARE',
    location: 'LAGOS',
    year: '2024',
    category: 'Plumbing & Hydronics',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
    description:
      'Luxury master bathroom and wet area featuring in-wall thermostatic rough-ins, acoustic soil stacks, zero-threshold floor drains, and precision sanitaryware.',
    client: 'Victoria Island Compound',
    scope: [
      'In-Wall Concealed Thermostatic Shower Bodies',
      'Acoustic Soil & Waste Stack Drainage (<18 dB)',
      'Dual-Coat Capillary Waterproofing Membrane',
      'Precision Laser-Graded Slope Draining',
    ],
    metrics: [
      { label: 'Bathrooms Executed', value: '6 En-Suites' },
      { label: 'Acoustic Sound', value: '< 18 dB Silent Flow' },
      { label: 'Water Proofing', value: 'Dual Tanking System' },
    ],
  },
  {
    id: 'pressure-testing-valving',
    number: '04',
    title: 'PRESSURE TESTING & VALVING',
    location: 'LAGOS',
    year: '2024',
    category: 'Plumbing & Hydronics',
    image: pressureTestingImg,
    description:
      'Rigorous 16-bar hydrostatic pressure testing station, in-line brass isolation valving, and multi-zone hydraulic circuit balancing for a multi-unit compound.',
    client: 'Ikoyi Waterfront Compound',
    scope: [
      'Multi-Branch Concealed Isolation Valving',
      '24-Hour 16-Bar Hydrostatic Hold Diagnostics',
      'Independent Loop Thermostatic Balancing Circuits',
      'Certified De-zincification Resistant Brassware',
    ],
    metrics: [
      { label: 'Testing Pressure', value: '16 Bar Hold' },
      { label: 'Hold Duration', value: '24 Hours Verified' },
      { label: 'Concealed Integrity', value: 'Zero Drop Confirmed' },
    ],
  },
  {
    id: 'subterranean-drainage-build',
    number: '05',
    title: 'SUBTERRANEAN DRAINAGE & INTEGRATED BUILD',
    location: 'LAGOS',
    year: '2024',
    category: 'Complete Design-Build',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    description:
      'Waterfront estate foundation execution featuring cast-in-place subterranean drainage channels, cast-in pipe sleeves, and automated greywater sump filtration.',
    client: 'Banana Island Waterfront Zone',
    scope: [
      'Cast-in-Place Subterranean Stormwater Channels',
      'Cast-in Penetration Sleeves in Raft Foundation',
      'Heavy-Duty Sump Pump & Lift Stations',
      'Multi-Zone Foundation Waterproofing Envelope',
    ],
    metrics: [
      { label: 'Conduit Diameters', value: '160mm - 315mm' },
      { label: 'Foundation Depth', value: '28m Piled Raft' },
      { label: 'Sump Capacity', value: '800 L/min' },
    ],
  },
  {
    id: 'commercial-hydronic-risers',
    number: '06',
    title: 'COMMERCIAL HYDRONIC RISERS & PLANT',
    location: 'ABUJA',
    year: '2023',
    category: 'Plumbing & Hydronics',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    description:
      'Multi-story commercial office building MEP execution including central chiller water circulation, overhead risers, pressure reduction, and automated ejector stations.',
    client: 'Commercial Holdings, Abuja FCT',
    scope: [
      'Multi-Storey Hydronic Risers & Pressure Reducing Stations',
      'Commercial Sewage Ejector Basin & Grinder Pumps',
      'Central Chilled Water Loop & Balancing Manifolds',
      'Coordinated Mechanical Piping Layout',
    ],
    metrics: [
      { label: 'Storeys Serviced', value: '7 Floors' },
      { label: 'Working Pressure', value: '10 Bar Balanced' },
      { label: 'Occupant Capacity', value: '1,200 Persons' },
    ],
  },
];
