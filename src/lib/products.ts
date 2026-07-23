export const productStatuses = {
  liveDevelopment: { label: "Live ecosystem · Active development", tone: "cyan" },
  development: { label: "In Development", tone: "violet" },
  research: { label: "Research", tone: "slate" },
  internal: { label: "Internal System", tone: "cyan" },
} as const;

export type ProductStatus = keyof typeof productStatuses;

export type Product = {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  status: ProductStatus;
  platforms: string[];
  technologies: string[];
  capabilities: string[];
  privacy: string;
  accent: "violet" | "cyan" | "blue" | "magenta" | "indigo";
  artwork: string;
  publicUrl?: string;
  githubRepo?: string;
  featured: boolean;
  displayOrder: number;
};

export const products = [
  {
    name: "Nomi",
    slug: "nomi",
    category: "Personal intelligence · AI memory",
    shortDescription: "A private capture-and-recall system for ideas, knowledge, and important context.",
    longDescription: "Nomi helps people save ideas, connect knowledge, revisit important context, and use personal information through an AI-assisted memory system.",
    status: "development",
    platforms: ["iOS"],
    technologies: ["Swift", "SwiftUI", "AI retrieval"],
    capabilities: ["Personal memory capture", "Hybrid retrieval", "Ask Nomi", "Connected ideas", "Projects", "Daily briefs"],
    privacy: "Designed around private knowledge organization and deliberate control of personal context.",
    accent: "cyan",
    artwork: "/images/products/nomi.png",
    featured: true,
    displayOrder: 1,
  },
  {
    name: "Holobots",
    slug: "holobots",
    category: "AI-native game universe · Fitness RPG",
    shortDescription: "A connected universe of collectible Holobots, arena battles, progression, and fitness-linked play.",
    longDescription: "Holobots combines collectible characters, strategic battles, progression systems, fitness synchronization, HoloCity, and explorable HoloZones in one evolving game universe.",
    status: "liveDevelopment",
    platforms: ["Web", "Mobile", "Unity"],
    technologies: ["Unity", "TypeScript", "Game systems"],
    capabilities: ["Sync Circuit web demo", "Arena and progression systems", "Fitness synchronization", "HoloCity", "HoloZones", "AI-assisted game production"],
    privacy: "Public experiences are separated from private development and operational systems.",
    accent: "violet",
    artwork: "/images/products/holobots.png",
    publicUrl: "https://www.holobots.fun/",
    githubRepo: "holobots-fun",
    featured: true,
    displayOrder: 2,
  },
  {
    name: "AlphaLabs",
    slug: "alphalabs",
    category: "AI market intelligence",
    shortDescription: "Agentic market research and paper-trading infrastructure for structured decision support.",
    longDescription: "AlphaLabs collects market data, analyzes catalysts and signals, evaluates strategies, and produces structured research outputs for paper-trading workflows.",
    status: "research",
    platforms: ["Web", "Python services"],
    technologies: ["Python", "AI agents", "Market data"],
    capabilities: ["Market data collection", "Catalyst and signal analysis", "Strategy evaluation", "Paper trading", "Structured decision support"],
    privacy: "AlphaLabs is presented as research and paper-trading infrastructure, not production investment advice or live autonomous trading.",
    accent: "blue",
    artwork: "/images/products/alphalabs.png",
    githubRepo: "AlphaLabs",
    featured: true,
    displayOrder: 3,
  },
  {
    name: "Cadence",
    slug: "cadence",
    category: "AI music-production assistant",
    shortDescription: "An AI-assisted system for musical analysis, MIDI creation, and creative iteration.",
    longDescription: "Cadence supports music-production workflows through musical analysis, bass creation, MIDI generation, and fast creative iteration.",
    status: "development",
    platforms: ["macOS"],
    technologies: ["Audio workflows", "MIDI", "AI"],
    capabilities: ["Musical analysis", "Bass creation", "MIDI generation", "Creative iteration", "DAW workflow support"],
    privacy: "Creative material remains under the user’s direction; product availability and DAW integrations are not claimed until verified.",
    accent: "magenta",
    artwork: "/images/products/cadence.png",
    githubRepo: "Cadence",
    featured: true,
    displayOrder: 4,
  },
  {
    name: "PakOS",
    slug: "pakos",
    category: "Personal AI operations system",
    shortDescription: "A command center for projects, actions, agents, approvals, workflows, and development infrastructure.",
    longDescription: "PakOS coordinates the Pak Labs portfolio by tracking projects, actions, agents, approvals, workflows, and development infrastructure from one operating layer.",
    status: "internal",
    platforms: ["Web", "Local systems"],
    technologies: ["TypeScript", "Agent workflows", "Automation"],
    capabilities: ["Project and action tracking", "Agent coordination", "Human approvals", "Workflow orchestration", "Development infrastructure"],
    privacy: "PakOS is an internal system. Private dashboards, credentials, and infrastructure details are not published.",
    accent: "indigo",
    artwork: "/images/products/pakos.png",
    featured: true,
    displayOrder: 5,
  },
] as const satisfies readonly Product[];

export type ProductSlug = (typeof products)[number]["slug"];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductHref(product: Pick<Product, "slug">) {
  return `/products/${product.slug}`;
}
