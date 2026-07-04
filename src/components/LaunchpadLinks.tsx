import { launchpadLinks, type LaunchpadLink } from "@/lib/site";
import { ArrowRightIcon, GitHubIcon, MailIcon } from "./Icons";

/**
 * LaunchpadLinks — prominent quick-link cards to key destinations.
 * Edit the cards in src/lib/site.ts (launchpadLinks array).
 */
export default function LaunchpadLinks() {
  return (
    <section id="launchpad" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,300px)_1fr]">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.3em] text-accent-bright uppercase">
              Launchpad
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
              Jump to What Matters
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Quick access to key projects, dashboards, and platforms.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {launchpadLinks.map((link) => (
              <LaunchpadCard key={link.title} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LaunchpadCard({ link }: { link: LaunchpadLink }) {
  const external = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group flex flex-col rounded-2xl border border-edge bg-gradient-to-b p-5 transition-all hover:-translate-y-1 ${link.tint}`}
    >
      <LaunchpadIcon icon={link.icon} />
      <span className="font-display mt-4 font-bold">{link.title}</span>
      <span className="mt-1 flex items-center justify-between text-sm text-muted">
        {link.subtitle}
        <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}

function LaunchpadIcon({ icon }: { icon: LaunchpadLink["icon"] }) {
  const base = "flex h-12 w-12 items-center justify-center rounded-xl bg-background/60";
  switch (icon) {
    case "holobot":
      return <div className={`${base} text-2xl`}>🤖</div>;
    case "hermes":
      return (
        <div className={`${base} font-display text-xl font-bold text-cyan-300`}>H</div>
      );
    case "github":
      return (
        <div className={base}>
          <GitHubIcon className="h-6 w-6 text-emerald-300" />
        </div>
      );
    case "mail":
      return (
        <div className={base}>
          <MailIcon className="h-6 w-6 text-amber-300" />
        </div>
      );
  }
}
