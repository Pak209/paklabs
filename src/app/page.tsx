import Link from "next/link";
import {
  ArrowRight, Brain, Briefcase, ChartLineUp, Cloud, Code, Devices,
  EnvelopeSimple, FileCode, GameController, GraduationCap, Handshake,
  MapPin, Microphone, Network, Package, PuzzlePiece, RocketLaunch,
  ShieldCheck, Sparkle, User, UsersThree, Wrench,
} from "@phosphor-icons/react/dist/ssr";
import SiteShell from "@/components/SiteShell";
import ProductStatus from "@/components/ProductStatus";
import ProductVisual from "@/components/ProductVisual";
import SystemsOrbit from "@/components/SystemsOrbit";
import { LogoMark } from "@/components/Icons";
import { products } from "@/lib/products";

const buildPrinciples = [
  [Brain, "AI-first engineering", "Start with intelligence and build reliable systems around it."],
  [User, "Human direction", "People define goals, guardrails, judgment, and final calls."],
  [RocketLaunch, "Prototype, then harden", "Move quickly to learn; engineer carefully before relying on it."],
  [ShieldCheck, "Privacy-conscious design", "Minimize data, preserve control, and separate private systems."],
  [ChartLineUp, "Testing and observability", "Measure behavior, quality, reliability, and performance."],
  [Cloud, "Local and cloud AI", "Use the right model and environment for each product need."],
] as const;

const tech = ["TypeScript", "Next.js", "React", "Tailwind CSS", "Python", "Swift / SwiftUI", "Unity", "Firebase", "OpenAI API", "Anthropic", "Vercel", "Cloudflare"];

export default function Home() {
  const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: "Pak Labs", url: "https://pak-labs.com", location: { "@type": "Place", name: "California, United States" }, sameAs: ["https://github.com/Pak209", "https://x.com/pak209eth"], description: "Founder-led AI-native product company building connected software systems." };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
      <section className="hero shell">
        <div className="hero-copy">
          <h1>Building AI-native products for memory, creativity, play, intelligence, and operations.</h1>
          <p>Pak Labs is a founder-led product company creating connected software systems that turn ambitious ideas into useful, shippable products.</p>
          <div className="button-row"><Link className="button primary" href="/products">Explore Products <ArrowRight weight="bold" /></Link><Link className="button secondary" href="/how-we-build">How We Build <ArrowRight weight="bold" /></Link><Link className="text-link" href="/company">Company Overview <ArrowRight /></Link></div>
        </div>
        <SystemsOrbit />
      </section>

      <section className="proof-rail" aria-label="Company summary"><div className="shell proof-grid"><span><UsersThree />Founder-led</span><span><Network />AI-native product portfolio</span><span><Devices />iOS + Web + macOS + Unity</span><span><MapPin />California</span></div></section>

      <section className="section shell flagship-section" id="products">
        <div className="section-kicker"><span>Our flagship products</span><i /></div>
        <div className="flagship-grid">
          {products.map((product) => <article key={product.slug} className="flagship-product"><ProductVisual product={product} /><h2>{product.name}</h2><p className="flagship-category">{product.category}</p><ProductStatus status={product.status} /><p>{product.shortDescription}</p><Link href={`/products/${product.slug}`} aria-label={`Explore ${product.name}`}>Explore <ArrowRight /></Link></article>)}
        </div>
      </section>

      <section className="section shell operating-section">
        <div className="operating-copy"><h2>Five products.<br />One operating<br />philosophy.</h2><p>Our products share an architecture and a set of principles that turn intelligence into reliable, useful systems.</p><Link className="text-link" href="/how-we-build">Explore the philosophy <ArrowRight /></Link></div>
        <div className="operating-map"><div className="operating-core"><LogoMark /></div><div className="operating-left"><span><User />Personal AI and retrieval</span><span><Network />Agentic workflows</span><span><Wrench />Automation</span></div><div className="operating-right"><span><Devices />Cross-platform applications</span><span><GameController />Game systems</span><span><ShieldCheck />Responsible cloud/local AI</span></div><div className="operating-bottom"><User />Human-directed execution</div></div>
      </section>

      <section className="section shell mission"><div className="mission-graphic"><Package /></div><div><h2>AI should become useful systems.</h2><p>We build connected products that remember, reason, create, and act—so people can focus on what matters. Intelligence should respect privacy, run where it makes sense, and earn trust through reliability.</p></div></section>

      <section className="section shell build-section"><div className="build-principles"><h2>How We Build</h2>{buildPrinciples.map(([Icon, title, body]) => <article key={title}><Icon /><strong>{title}</strong><p>{body}</p></article>)}</div><div className="build-stack"><h2>Built with</h2><div className="tech-grid">{tech.map((item) => <span key={item}><Code />{item}</span>)}</div></div></section>

      <section className="section shell founder-strip"><div className="founder-mark"><LogoMark /></div><div><h2>Founder-led. AI-accelerated. Built to ship.</h2><p>Pak Labs is founded and led by one builder. AI expands the operation’s research, engineering, design, and testing capacity—while product judgment and accountability remain human.</p></div><div className="founder-lines"><SystemsOrbit /></div></section>

      <section className="section shell now-building"><h2>Now Building</h2><div className="now-grid"><article><RocketLaunch /><div><strong>Shipped</strong><p>Core infrastructure<br />Public Holobots experience</p></div></article><article><ShieldCheck /><div><strong>In testing</strong><p>Product workflows<br />Quality and reliability</p></div></article><article><Wrench /><div><strong>Building now</strong><p>Product features<br />Agent capabilities</p></div></article><article><Sparkle /><div><strong>Exploring next</strong><p>New product ideas<br />Platform extensions</p></div></article></div></section>

      <section className="section shell updates-strip"><div><h2>Updates / Build Log</h2><p>Lightweight updates on what we’re building, learning, and shipping. No noise—just substance.</p><Link className="text-link" href="/updates">View all updates <ArrowRight /></Link></div><div className="update-placeholders"><span><FileCode /></span><span><Code /></span><span><Package /></span></div></section>

      <section className="section shell closing-strip" id="contact"><div><h2>Build what<br />comes next.</h2><p>Whether you’re exploring a partnership, a program, a collaboration, or just want to say hello—we’d love to hear from you.</p></div><div className="contact-options"><a href="mailto:dankimoto8@gmail.com?subject=Partnership"><Handshake /><span>Partnerships</span><ArrowRight /></a><a href="mailto:dankimoto8@gmail.com?subject=Program inquiry"><GraduationCap /><span>Program inquiries</span><ArrowRight /></a><a href="mailto:dankimoto8@gmail.com?subject=Collaboration"><PuzzlePiece /><span>Collaborations</span><ArrowRight /></a><a href="mailto:dankimoto8@gmail.com?subject=Press"><Microphone /><span>Press</span><ArrowRight /></a><a href="mailto:dankimoto8@gmail.com?subject=General inquiry"><EnvelopeSimple /><span>General inquiries</span><ArrowRight /></a><a className="consulting-option" href="mailto:dankimoto8@gmail.com?subject=Consulting"><Briefcase /><span>Consulting<small>Invitation access</small></span><ArrowRight /></a></div></section>
    </SiteShell>
  );
}
