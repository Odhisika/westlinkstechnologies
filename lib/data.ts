export type ProductStatus = 'live' | 'dev' | 'soon';

export interface Product {
  slug: string;
  name: string;
  status: ProductStatus;
  statusLabel: string;
  tagline: string;
  description: string;
  tags: string[];
}

export const products: Product[] = [
  {
    slug: 'westlinks-exchange',
    name: 'WestLinks Exchange',
    status: 'dev',
    statusLabel: 'In Development',
    tagline: 'A P2P digital currency exchange built for Ghana.',
    description:
      'Buy and sell crypto with GHS through MTN MoMo, Telecel and bank transfers. Live P2P rates are aggregated from the Bybit and OKX ad books, quality-filtered, and priced with a real admin margin - and every withdrawal is verified on-chain before it settles.',
    tags: ['P2P rates', 'Mobile money', 'On-chain verification'],
  },
  {
    slug: 'blockos',
    name: 'BlockOS',
    status: 'dev',
    statusLabel: 'In Development',
    tagline: 'The operating system for a block manufacturing factory.',
    description:
      'A factory operations platform for block manufacturers - production pipeline tracking from moulded to cured to ready, point-of-sale with a credit book, inventory of products and raw materials, labour and vehicle fleet management, and profit & loss analytics.',
    tags: ['Production pipeline', 'POS & credit book', 'Factory analytics'],
  },
  {
    slug: 'livestockos',
    name: 'LivestockOS',
    status: 'live',
    statusLabel: 'Live',
    tagline: 'The operating system for African livestock farms.',
    description:
      'Live in production for African livestock farms - a web dashboard and Flutter mobile app that track herds, health, feeding and farm accounts, and keep recording work offline where connectivity is patchy, syncing the moment signal returns.',
    tags: ['Offline-first', 'Herd tracking', 'Live in production'],
  },
  {
    slug: 'price-monitor',
    name: 'Crypto Intelligence',
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Explainable market intelligence, embedded in WestLinks.',
    description:
      'Built into the WestLinks Exchange stack: scheduled ingestion from CoinGecko, CoinPaprika, DefiLlama, DexScreener, GitHub and Binance feeds scores assets across four explainable models - 10X potential, undervaluation, momentum and risk - with low-cap gem discovery, real-time alerts, and backtested track records.',
    tags: ['Explainable scoring', 'Gem discovery', 'Alerts & webhooks'],
  },
];

export const capabilities = [
  {
    title: 'Product Technologies',
    description:
      'Full-stack builds from architecture to shipped product - web, mobile, and the APIs that connect them. We favor boring, provable technology over trend-chasing.',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Infrastructure-as-code deployments, automated CI/CD, and monitoring built in from the first release, not bolted on after an outage.',
  },
  {
    title: 'Security & Compliance',
    description:
      'Access control, encryption, and audit trails designed in at the schema level - especially important for a FinTech and blockchain portfolio.',
  },
  {
    title: 'Data & AI',
    description:
      "Data pipelines and applied-AI features that support a product's core workflow, not sit beside it as a demo.",
  },
  {
    title: 'Design Systems',
    description:
      'A shared component library and visual language, so every WestLinks product feels like part of the same company.',
  },
  {
    title: 'QA & Testing',
    description:
      'Automated test coverage and manual review before anything reaches production - quietly, on every release, not just the big ones.',
  },
];

export const industries = [
  'Finance',
  'Agriculture',
  'Healthcare',
  'Education',
  'Government',
  'Retail',
  'Logistics',
];

export const values = [
  {
    title: 'Innovation',
    description:
      'We take on problems other teams route around, and we build the tooling to solve them properly.',
  },
  {
    title: 'Security',
    description:
      "Security isn't a phase we add later - it's part of the architecture from the first commit.",
  },
  {
    title: 'Scalability',
    description:
      "We design for the load you'll have in year three, not just the traffic you have on day one.",
  },
  {
    title: 'Reliability',
    description:
      "Infrastructure that's boring in the best way - it works, quietly, every single day.",
  },
];

export const timeline = [
  {
    year: '2026',
    title: 'WestLinks founded',
    description:
      'Started as an technologies group with one rule: build things to a global standard.',
  },
  {
    year: 'Phase 1',
    title: 'WestLinks Exchange',
    description:
      'Our first FinTech product - a P2P digital currency exchange for Ghana, in active development.',
  },
  {
    year: 'Phase 2',
    title: 'BlockOS',
    description:
      'The operating system for block-manufacturing factories - production, sales, credit and inventory.',
  },
  {
    year: 'Live',
    title: 'LivestockOS & Crypto Intelligence',
    description: 'Two products already shipped and in use - an offline-first farm platform and market intelligence embedded in WestLinks.',
  },
  {
    year: 'Next',
    title: 'WestLinks Exchange & global expansion',
    description:
      'Shipping the exchange to production and taking WestLinks beyond its first market.',
  },
];

export const techStack = [
  'PYTHON',
  'DJANGO',
  'REACT',
  'NEXT.JS',
  'FLUTTER',
  'DOCKER',
  'POSTGRESQL',
  'REDIS',
  'LINUX',
  'CLOUDFLARE',
  'AWS',
  'KUBERNETES',
];

export const insights = [
  {
    tag: 'Technologies',
    title: 'Why we build our own infrastructure instead of renting it',
    meta: '5 min read',
  },
  {
    tag: 'Product',
    title: 'Inside LivestockOS: designing for users with patchy connectivity',
    meta: '7 min read',
  },
  {
    tag: 'Company',
    title: 'Our technologies principles, and why we wrote them down',
    meta: '4 min read',
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
    photo?: string; // drop a file in /public/team/ and set e.g. 'jane-doe.jpg'
}

export const team: TeamMember[] = [
  {
    name: 'Founding Engineer',
    role: 'Architecture & FinTech',
    bio: 'Leads system architecture across the portfolio, with a focus on the Exchange matching engine and compliance-first design.',
  },
  {
    name: 'Product Engineer',
    role: 'Mobile & Field Systems',
    bio: 'Built LivestockOS offline-first sync and leads mobile technologies across products.',
  },
  {
    name: 'Platform Engineer',
    role: 'Infrastructure & DevOps',
    bio: 'Owns CI/CD, monitoring, and the infrastructure-as-code standard behind every WestLinks deployment.',
  },
  {
    name: 'Data Engineer',
    role: 'Pipelines & Applied AI',
    bio: 'Builds the data pipelines powering the Crypto Intelligence scoring engine inside WestLinks Exchange.',
  },
];

export interface Testimonial {
  quote: string;
  name: string; // real name when available; otherwise a descriptive placeholder
  role: string;
  photo?: string; // drop a file in /public/testimonials/ and set e.g. 'jane-doe.jpg'
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'WestLinks took a workflow our team had outgrown and rebuilt it properly. The offline sync just works - nobody thinks about connectivity anymore.',
    name: 'Operations Lead',
    role: 'LivestockOS client, Agriculture',
  },
  {
    quote:
      'They designed for the load we will have in year three, not the traffic we had on day one. That mindset is exactly why we keep coming back.',
    name: 'Product Director',
    role: 'Price Monitor client, Retail',
  },
  {
    quote:
      "Security wasn't a phase at the end - it was in the schema from the first commit. For a FinTech build, that made all the difference.",
    name: 'Co-Founder',
    role: 'Exchange early-access partner, FinTech',
  },
];

