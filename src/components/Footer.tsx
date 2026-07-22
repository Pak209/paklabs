import Link from "next/link";
import { site } from "@/lib/site";
import { GitHubIcon, LogoMark, XIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link href="/" className="brand"><LogoMark className="brand-mark" /><span>Pak Labs</span></Link>
          <p>AI-native products designed as useful, connected systems.</p>
        </div>
        <div className="footer-links">
          <Link href="/products">Products</Link><Link href="/company">Company</Link><Link href="/how-we-build">How We Build</Link><Link href="/updates">Updates</Link><Link href="/#contact">Contact</Link>
        </div>
        <div className="footer-links">
          <a href={site.githubUrl} target="_blank" rel="noopener noreferrer"><GitHubIcon className="icon" />GitHub</a>
          <a href={site.twitterUrl} target="_blank" rel="noopener noreferrer"><XIcon className="icon" />X</a>
          <Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Pak Labs</span><span>California, United States</span></div>
    </footer>
  );
}
