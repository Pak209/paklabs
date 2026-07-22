import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import ProductStatus from "@/components/ProductStatus";
import ProductVisual from "@/components/ProductVisual";
import InquiryForm from "@/components/InquiryForm";
import { products } from "@/lib/products";

const buildPrinciples = [
  ["AI-first engineering", "Start with intelligence, then engineer the surrounding system."],
  ["Human direction", "People define the goals, guardrails, judgment, and final calls."],
  ["Prototype, then harden", "Move quickly to learn; test and observe before relying on it."],
  ["Privacy-conscious design", "Minimize data, preserve control, and separate public from private systems."],
  ["Local + cloud AI", "Use the right execution environment for privacy, latency, and scale."],
  ["Cross-platform delivery", "Ship across mobile, web, desktop, and game environments."],
] as const;

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pak Labs",
    url: "https://pak-labs.com",
    location: { "@type": "Place", name: "California, United States" },
    sameAs: ["https://github.com/Pak209", "https://x.com/pak209eth"],
    description: "Founder-led AI-native product company building connected software systems.",
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
      <section className="hero shell">
        <div className="hero-copy">
          <h1>Building AI-native products for memory, creativity, play, intelligence, and operations.</h1>
          <p>Pak Labs is a founder-led product company creating connected software systems that turn ambitious ideas into useful, shippable products.</p>
          <div className="button-row">
            <Link className="button primary" href="/products">Explore Products <span>→</span></Link>
            <Link className="button secondary" href="/how-we-build">How We Build <span>→</span></Link>
            <Link className="text-link" href="/company">Company Overview <span>→</span></Link>
          </div>
        </div>
        <div className="system-map" aria-label="Five Pak Labs products connected through one operating philosophy">
          <div className="map-rings" /><div className="map-core">P</div>
          {products.map((product, index) => <Link href={`/products/${product.slug}`} key={product.slug} className={`map-node node-${index + 1}`}><strong>{product.name}</strong><span>{product.category.split(" · ")[0]}</span></Link>)}
        </div>
      </section>

      <section className="proof-rail" aria-label="Company summary"><div className="shell proof-grid"><span>Founder-led</span><span>AI-native product portfolio</span><span>iOS + Web + macOS + Unity</span><span>California</span></div></section>

      <section className="section shell" id="products">
        <div className="section-heading"><p className="section-label">Flagship products</p><h2>Five products. One company.</h2><p>Different domains, connected by one approach to building useful software with AI.</p></div>
        <div className="product-list">
          {products.map((product) => (
            <article className="product-row" key={product.slug}>
              <ProductVisual product={product} compact />
              <div><p className="product-category">{product.category}</p><h3>{product.name}</h3><p>{product.shortDescription}</p></div>
              <div className="product-meta"><ProductStatus status={product.status} /><span>{product.platforms.join(" · ")}</span><Link href={`/products/${product.slug}`}>View product <span>→</span></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="shell split-section">
          <div><p className="section-label">Connected systems</p><h2>Five products. One operating philosophy.</h2><p>Pak Labs explores multiple domains through a shared foundation: personal AI and retrieval, agentic workflows, automation, cross-platform applications, game systems, responsible cloud and local AI, and human-directed execution.</p><Link className="text-link" href="/how-we-build">Explore the philosophy <span>→</span></Link></div>
          <div className="principle-network">{["Personal AI + retrieval", "Agentic workflows", "Automation", "Cross-platform apps", "Game systems", "Responsible AI", "Human-directed execution"].map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section shell mission"><div className="mission-mark">P</div><div><h2>AI should become useful systems.</h2><p>AI should not live only inside a chat window. Pak Labs builds products that help people remember, create, improve, explore, and act—while keeping human direction, privacy, and reliable engineering in the loop.</p></div></section>

      <section className="section shell" id="build"><div className="section-heading"><p className="section-label">How we build</p><h2>AI-first engineering. Human judgment.</h2></div><div className="principles-grid">{buildPrinciples.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div><div className="built-with"><span>Built with</span><p>OpenAI · Anthropic · Codex · Firebase / Google Cloud · Cloudflare · GitHub · RevenueCat · Supabase · Vercel · Unity · React Native · Swift / SwiftUI · TypeScript · Python</p></div></section>

      <section className="section band"><div className="shell founder"><div className="founder-monogram">P</div><div><p className="section-label">Operating model</p><h2>Founder-led. AI-accelerated. Built to ship.</h2><p>Pak Labs uses modern AI engineering systems to help one founder research, design, implement, test, and operate multiple products efficiently. AI provides leverage; product direction, standards, and accountability remain human.</p></div></div></section>

      <section className="section shell"><div className="section-heading"><p className="section-label">Now building</p><h2>Focused on shipping and hardening.</h2></div><div className="roadmap"><article><span>Shipped</span><h3>Holobots web experience</h3><p>A playable public expression of the broader game universe.</p></article><article><span>In testing</span><h3>Product workflows</h3><p>Quality, reliability, and end-to-end experience across active builds.</p></article><article><span>Building now</span><h3>Nomi, Cadence, AlphaLabs</h3><p>Core product capabilities and the infrastructure that supports them.</p></article><article><span>Exploring next</span><h3>HoloCity and HoloZones</h3><p>New places for the Holobots universe to grow.</p></article></div></section>

      <section className="section band"><div className="shell updates-preview"><div><p className="section-label">Updates / Build log</p><h2>Work in public, without inventing the story.</h2><p>The build log is ready for verified product notes, launch lessons, and technical decisions. Entries will appear as real work is documented.</p></div><Link className="button secondary" href="/updates">View Updates <span>→</span></Link></div></section>
      <InquiryForm />
    </SiteShell>
  );
}
