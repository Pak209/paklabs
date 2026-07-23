import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChartLineUp, Cloud, Code, Database, Devices, EnvelopeSimple,
  GameController, GitBranch, MapPin, MusicNotes, Network, ShieldCheck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import SiteShell from "@/components/SiteShell";
import ProductStatus from "@/components/ProductStatus";
import PrintButton from "@/components/PrintButton";
import SystemsOrbit from "@/components/SystemsOrbit";
import { LogoMark } from "@/components/Icons";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Company Overview", description: "A reviewer-friendly overview of Pak Labs, its product portfolio, operating model, AI use cases, and technical needs.", alternates: { canonical: "/company" } };

const useCases = [[ShieldCheck, "Private capture and recall", "Securely capture, organize, and recall personal context."], [Database, "Hybrid retrieval", "Combine structured data, unstructured content, and vector search."], [GameController, "Game systems and fitness sync", "Connect progression, strategic play, and activity."], [ChartLineUp, "Market research and paper trading", "Analyze markets, track signals, and simulate decisions."], [MusicNotes, "Music workflow assistance", "Support musical analysis, MIDI, and iteration."], [Network, "Agent and workflow orchestration", "Coordinate actions, approvals, agents, and infrastructure."]] as const;
const tools = ["OpenAI", "Anthropic", "Codex", "Firebase / Google Cloud", "Cloudflare", "GitHub", "RevenueCat", "Supabase", "Vercel", "Unity", "React Native", "Swift / SwiftUI", "TypeScript", "Python"];

export default function CompanyPage() {
  return <SiteShell><article className="company-page shell">
    <header className="company-header"><div><h1>Pak Labs, at a glance.</h1><p>Pak Labs is a founder-led, AI-native product studio building interconnected software across personal intelligence, gaming, financial research, creative tools, and autonomous operations.</p></div><PrintButton /></header>
    <section className="company-summary"><h2>Company summary</h2><div><article><UsersThree /><strong>Founder-led<br />AI-native<br />product company</strong></article><article><MapPin /><strong>California,<br />United States</strong></article><article><Devices /><strong>iOS, Web,<br />macOS, Unity</strong></article><article><Cloud /><strong>Early-stage<br />product<br />portfolio</strong></article><article><ShieldCheck /><strong>Conservative,<br />verified claims</strong></article></div></section>
    <section className="company-products-section"><h2>Our products</h2><div className="company-products-table"><div className="table-head"><span>Product</span><span>Focus</span><span>Status</span><span>Link</span></div>{products.map((product) => <Link href={`/products/${product.slug}`} key={product.slug} className="company-product-row"><span className="company-product-name"><Image src={product.artwork} alt="" width={44} height={44} /><strong>{product.name}</strong></span><span>{product.category.split(" · ")[0]}</span><ProductStatus status={product.status} /><span className="company-product-link">View product <ArrowRight /></span></Link>)}</div></section>
    <section className="company-use-cases"><h2>AI use cases</h2><div>{useCases.map(([Icon,title,body]) => <article key={title}><Icon /><strong>{title}</strong><p>{body}</p></article>)}</div></section>
    <section className="company-tools"><h2>Built with</h2><div>{tools.map((tool,index) => <span key={tool}>{index % 3 === 0 ? <Code /> : index % 3 === 1 ? <GitBranch /> : <Cloud />}<strong>{tool}</strong></span>)}</div></section>
    <section className="company-founder"><h2>Founder-led. AI-accelerated. Built to ship.</h2><div className="company-founder-art"><div className="founder-outline"><LogoMark /></div><div className="founder-blueprint"><SystemsOrbit /></div></div><div><p>Pak Labs is led by its founder and uses AI deeply across research, engineering, design, and operations—to move faster and focus on meaningful problems.</p><ul><li>Lean, focused, and vertically integrated</li><li>AI as a force multiplier, not a shortcut</li><li>Ship small, iterate quickly, raise the bar</li><li>Build durable systems and long-term value</li></ul></div></section>
    <section className="company-stage"><div><h2>Current stage</h2><ul><li>Building and iterating across five interconnected products</li><li>Early-stage portfolio with active development</li><li>Exploring markets and validating product direction</li><li>Establishing systems for scale, quality, and trust</li></ul></div><div><h2>Technical needs</h2><ul><li>Product hardening and reliability</li><li>Observability and monitoring at scale</li><li>Responsible AI infrastructure and safety</li><li>Cross-platform delivery and performance</li><li>Cloud and API efficiency</li></ul></div></section>
    <section className="company-contact"><div><h2>Contact</h2><EnvelopeSimple /><p>For product inquiries, collaboration, or partnerships, reach out via email.<br /><a href={`mailto:${site.email}`}>{site.email}</a></p></div><div><h2>Public links</h2><a href={site.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ArrowRight /></a><a href={site.url}>pak-labs.com <ArrowRight /></a></div></section>
  </article></SiteShell>;
}
