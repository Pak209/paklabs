"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { GitHubIcon, LogoMark } from "./Icons";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Launchpad", href: "#launchpad" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <LogoMark className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-[0.2em] uppercase">
            {site.name}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-accent/50 px-4 py-2 text-sm font-medium text-accent-bright transition-colors hover:bg-accent/10"
          >
            Business Inquiries
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-edge bg-background/95 px-4 pt-2 pb-4 backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-card hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-3 border-t border-edge px-3 pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-lg border border-accent/50 px-4 py-2 text-center text-sm font-medium text-accent-bright"
            >
              Business Inquiries
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-muted"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
