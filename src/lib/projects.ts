/**
 * ---------------------------------------------------------------------------
 * FEATURED PROJECTS — this array is the source of truth for the carousel.
 *
 * To add / remove / reorder projects, edit the list below. Fields:
 *   name        display name
 *   repo        GitHub repo name under github.com/Pak209 (omit for private builds)
 *   description honest one-liner — "experiment", "prototype", "build" are fine
 *   status      "live" | "in-dev" | "prototype" | "experiment"
 *               (only mark "live" when the `live` URL is a real, working demo)
 *   tech        short list of stack chips shown on the card
 *   live        optional live/demo URL
 *   icon        an emoji, or a single letter for a lettermark tile
 *   tint        Tailwind classes for the icon tile background
 *
 * GitHub enrichment: src/lib/github.ts fetches public repo metadata
 * (last-pushed date) at build time and merges it in by `repo` name.
 * If the API is unreachable, the cards render fine from this data alone.
 * ---------------------------------------------------------------------------
 */

export type ProjectStatus = "live" | "in-dev" | "prototype" | "experiment";

export type Project = {
  name: string;
  repo?: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  live?: string;
  icon: string;
  tint: string;
  /** Filled in from the GitHub API at build time — leave undefined here. */
  lastPushed?: string;
};

export const GITHUB_USER = "Pak209";

export const featuredProjects: Project[] = [
  {
    name: "Holobots",
    repo: "holobots-fun",
    description:
      "AI-powered digital companions — a game universe spanning collectibles, battles, and fitness sync.",
    status: "live",
    tech: ["TypeScript", "Next.js", "Web3"],
    live: "https://holobots.fun",
    icon: "🤖",
    tint: "bg-violet-500/15 text-violet-300",
  },
  {
    name: "Hermes Dashboard",
    // Private build — no public repo, so no GitHub link is rendered.
    description:
      "Control center for automation agents, workflows, and AI operations. In active development.",
    status: "in-dev",
    tech: ["Next.js", "TypeScript", "Supabase"],
    live: "https://hermes.pak-labs.com",
    icon: "H",
    tint: "bg-cyan-500/15 text-cyan-300",
  },
  {
    name: "Cadence",
    repo: "Cadence",
    description:
      "AI assist for DAW workflows — an early experiment in AI-guided music production.",
    status: "experiment",
    tech: ["AI", "Music Tools"],
    icon: "🎛️",
    tint: "bg-fuchsia-500/15 text-fuchsia-300",
  },
  {
    name: "AlphaLabs",
    repo: "AlphaLabs",
    description:
      "AI trading analyst — market research and signal-generation experiments.",
    status: "prototype",
    tech: ["Python"],
    icon: "📈",
    tint: "bg-emerald-500/15 text-emerald-300",
  },
  {
    name: "Trading Agents",
    repo: "Trading-agents",
    description:
      "Multi-agent trading experiments — autonomous agents that research markets and test strategies.",
    status: "experiment",
    tech: ["Python", "AI Agents"],
    icon: "🧠",
    tint: "bg-sky-500/15 text-sky-300",
  },
  {
    name: "HoloSync",
    repo: "HoloSync",
    description:
      "Companion fitness app for Holobots.fun — gamified step tracking that powers up your Holobot.",
    status: "prototype",
    tech: ["JavaScript", "Mobile"],
    icon: "👟",
    tint: "bg-orange-500/15 text-orange-300",
  },
  {
    name: "EZReports Extension",
    repo: "ezreports-attendance-extension",
    description:
      "Browser extension that automates attendance reporting — a custom internal-tool build.",
    status: "prototype",
    tech: ["JavaScript", "Chrome Extension"],
    icon: "🧩",
    tint: "bg-amber-500/15 text-amber-300",
  },
];

/** Badge label + color per status. Rendered on each project card. */
export const statusMeta: Record<ProjectStatus, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  },
  "in-dev": {
    label: "In Development",
    className: "bg-amber-500/15 text-amber-300 border-amber-400/30",
  },
  prototype: {
    label: "Prototype",
    className: "bg-violet-500/15 text-violet-300 border-violet-400/30",
  },
  experiment: {
    label: "Experiment",
    className: "bg-sky-500/15 text-sky-300 border-sky-400/30",
  },
};
