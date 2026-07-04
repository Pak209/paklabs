import { site } from "@/lib/site";
import { GitHubIcon, LogoMark, MailIcon, XIcon } from "./Icons";

const navigation = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Launchpad", href: "#launchpad" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        {/* Brand */}
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8" />
            <span className="font-display text-lg font-bold tracking-[0.2em] uppercase">
              {site.name}
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Building the future through code, creativity, and relentless
            curiosity.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-display text-xs font-semibold tracking-[0.25em] text-muted uppercase">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-display text-xs font-semibold tracking-[0.25em] text-muted uppercase">
            Connect
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </li>
            {site.twitterUrl && (
              <li>
                <a
                  href={site.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <XIcon className="h-4 w-4" />
                  X (Twitter)
                </a>
              </li>
            )}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <MailIcon className="h-4 w-4" />
                Email
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-sm text-muted md:text-right">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="mt-1">All rights reserved.</p>
          <p className="mt-4">Built with ⚡ and lots of coffee.</p>
        </div>
      </div>
    </footer>
  );
}
