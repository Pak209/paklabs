"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { GitHubIcon, LogoMark } from "./Icons";

const links = [
  ["Home", "/"],
  ["Products", "/products"],
  ["How We Build", "/how-we-build"],
  ["Company", "/company"],
  ["Updates", "/updates"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="shell nav-shell" aria-label="Primary navigation">
        <Link href="/" className="brand" aria-label="Pak Labs home" onClick={() => setOpen(false)}>
          <LogoMark className="brand-mark" />
          <span>{site.name}</span>
        </Link>
        <div className="nav-links" data-open={open}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="nav-contact" href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
          <a className="nav-github" href={site.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Pak Labs on GitHub">
            <GitHubIcon className="icon" />
          </a>
        </div>
        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
