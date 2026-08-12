// Ported verbatim from js/kel-agricultural.js — all 30 named agents across the 6
// operational zones, and the 8 live metrics.

export const ZONE_NAMES = {
  lab: 'Laboratory Zone',
  greenhouse: 'Greenhouse Zone',
  harvest: 'Harvest Station',
  processing: 'Processing House',
  factory: 'Factory Floor',
  storage: 'Storage & Logistics',
};

export const ZONE_ORDER = ['lab', 'greenhouse', 'harvest', 'processing', 'factory', 'storage'];

export const INITIAL_AGENTS = [
  { id: 'dr-nutrino', name: 'Dr. Nutrino', zone: 'lab', status: 'active', role: 'Nutritional Analysis' },
  { id: 'genevieve', name: 'Genevieve', zone: 'lab', status: 'active', role: 'Genetic Engineering' },
  { id: 'root-cause', name: 'Root Cause', zone: 'lab', status: 'idle', role: 'Disease Detection' },
  { id: 'bio-forge', name: 'BioForge', zone: 'lab', status: 'active', role: 'Bioengineering' },
  { id: 'pulse-check', name: 'Pulse Check', zone: 'lab', status: 'active', role: 'Health Monitoring' },

  { id: 'captain-climate', name: 'Captain Climate', zone: 'greenhouse', status: 'active', role: 'Climate Control' },
  { id: 'leaf-lens', name: 'Leaf Lens', zone: 'greenhouse', status: 'active', role: 'Plant Imaging' },
  { id: 'grow-flow', name: 'GrowFlow', zone: 'greenhouse', status: 'active', role: 'Growth Optimization' },
  { id: 'buzz-off', name: 'Buzz Off', zone: 'greenhouse', status: 'idle', role: 'Pest Control' },
  { id: 'bloom-bot', name: 'BloomBot', zone: 'greenhouse', status: 'active', role: 'Pollination Management' },

  { id: 'ripen-radar', name: 'RipenRadar', zone: 'harvest', status: 'active', role: 'Ripeness Detection' },
  { id: 'haul-mate', name: 'HaulMate', zone: 'harvest', status: 'active', role: 'Harvest Logistics' },
  { id: 'pre-clean', name: 'PreClean', zone: 'harvest', status: 'active', role: 'Initial Processing' },
  { id: 'yield-wise', name: 'YieldWise', zone: 'harvest', status: 'active', role: 'Yield Optimization' },
  { id: 'field-marshal', name: 'FieldMarshal', zone: 'harvest', status: 'active', role: 'Field Coordination' },

  { id: 'pure-grain', name: 'PureGrain', zone: 'processing', status: 'active', role: 'Grain Processing' },
  { id: 'sorta-bella', name: 'SortaBella', zone: 'processing', status: 'active', role: 'Quality Sorting' },
  { id: 'nutri-boost', name: 'NutriBoost', zone: 'processing', status: 'active', role: 'Nutritional Enhancement' },
  { id: 'scan-chef', name: 'ScanChef', zone: 'processing', status: 'active', role: 'Quality Scanning' },
  { id: 'batch-brain', name: 'BatchBrain', zone: 'processing', status: 'active', role: 'Batch Management' },

  { id: 'pack-rat', name: 'PackRat', zone: 'factory', status: 'active', role: 'Packaging' },
  { id: 'label-logic', name: 'LabelLogic', zone: 'factory', status: 'active', role: 'Labeling System' },
  { id: 'safe-stamp', name: 'SafeStamp', zone: 'factory', status: 'active', role: 'Safety Certification' },
  { id: 'trace-link', name: 'TraceLink', zone: 'factory', status: 'active', role: 'Traceability' },
  { id: 'factory-fox', name: 'FactoryFox', zone: 'factory', status: 'active', role: 'Factory Optimization' },

  { id: 'stock-stacker', name: 'StockStacker', zone: 'storage', status: 'active', role: 'Inventory Management' },
  { id: 'route-ranger', name: 'RouteRanger', zone: 'storage', status: 'active', role: 'Route Optimization' },
  { id: 'trade-whisper', name: 'TradeWhisper', zone: 'storage', status: 'active', role: 'Trade Analysis' },
  { id: 'demand-pulse', name: 'DemandPulse', zone: 'storage', status: 'active', role: 'Demand Forecasting' },
  { id: 'vault-guard', name: 'VaultGuard', zone: 'storage', status: 'active', role: 'Security Management' },
].map((a) => ({
  ...a,
  performance: 85 + Math.random() * 15,
  tasksCompleted: Math.floor(Math.random() * 1000),
  efficiency: 85 + Math.random() * 15,
}));

export const INITIAL_METRICS = [
  { key: 'crop-yield', value: 2847, unit: 'kg', label: 'Crop Yield (Today)', trend: '+12%' },
  { key: 'greenhouse-efficiency', value: 94.2, unit: '%', label: 'Greenhouse Efficiency', trend: '+2.1%' },
  { key: 'water-usage', value: 1250, unit: 'L', label: 'Water Usage (Daily)', trend: '-8%' },
  { key: 'energy-consumption', value: 847, unit: 'kWh', label: 'Energy Consumption', trend: '-5%' },
  { key: 'soil-health', value: 87.5, unit: '%', label: 'Soil Health Index', trend: '+1.3%' },
  { key: 'pest-detection', value: 23, unit: 'incidents', label: 'Pest Incidents', trend: '-15%' },
  { key: 'harvest-quality', value: 96.8, unit: '%', label: 'Harvest Quality', trend: '+0.8%' },
  { key: 'supply-chain', value: 99.1, unit: '%', label: 'Supply Chain Uptime', trend: '+0.2%' },
];
