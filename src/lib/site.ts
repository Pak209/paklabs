/**
 * ---------------------------------------------------------------------------
 * SITE CONFIG — edit this file to update brand copy, links, and contact info.
 * Everything here is plain data; no component changes needed.
 * ---------------------------------------------------------------------------
 */

export const site = {
  name: "Pak Labs",
  url: "https://pak-labs.com",
  tagline: "Building the future, one system at a time.",
  description:
    "AI-native apps. Automation systems. Creative tools. Web3 & game experiments. We build, test, learn, and ship.",

  // Social / external profiles
  githubUser: "Pak209",
  githubUrl: "https://github.com/Pak209",
  // Shown in the footer; set to "" to hide the link.
  twitterUrl: "https://x.com/pak209eth",

  // Contact email shown in the footer and used as the mailto fallback.
  // Swap for a branded address (e.g. hello@pak-labs.com) when you have one.
  email: "dankimoto8@gmail.com",
} as const;

/**
 * LAUNCHPAD — the quick-link cards under the project carousel.
 * `href` starting with "#" scrolls to a section on this page.
 */
export type LaunchpadLink = {
  title: string;
  subtitle: string;
  href: string;
  icon: "holobot" | "hermes" | "github" | "mail";
  /** Tailwind classes for the card tint — keep the pattern below. */
  tint: string;
};

export const launchpadLinks: LaunchpadLink[] = [
  {
    title: "Holobots",
    subtitle: "holobots.fun",
    href: "https://holobots.fun",
    icon: "holobot",
    tint: "from-violet-500/20 to-violet-500/5 hover:border-violet-400/40",
  },
  {
    title: "Hermes Dashboard",
    subtitle: "hermes.pak-labs.com",
    href: "https://hermes.pak-labs.com",
    icon: "hermes",
    tint: "from-cyan-500/20 to-cyan-500/5 hover:border-cyan-400/40",
  },
  {
    title: "GitHub",
    subtitle: "@Pak209",
    href: "https://github.com/Pak209",
    icon: "github",
    tint: "from-emerald-500/20 to-emerald-500/5 hover:border-emerald-400/40",
  },
  {
    title: "Business Inquiries",
    subtitle: "Let's work together",
    href: "#contact",
    icon: "mail",
    tint: "from-amber-500/20 to-amber-500/5 hover:border-amber-400/40",
  },
];

/**
 * SERVICES — the bullet list next to the inquiry form.
 */
export const services = [
  "AI Automation & Integrations",
  "App Prototypes & MVPs",
  "Custom Tools & Dashboards",
  "Partnerships & Consulting",
  "Other Ideas? Let's Talk.",
];

/**
 * INQUIRY TOPICS — options in the form's "What are you looking for?" select.
 */
export const inquiryTopics = [
  "Freelance / contract work",
  "AI automation project",
  "App prototype / MVP",
  "Custom tool or dashboard",
  "Partnership / collaboration",
  "Question about a project",
  "Something else",
];
