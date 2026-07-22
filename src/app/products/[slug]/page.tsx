import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import ProductStatus from "@/components/ProductStatus";
import ProductVisual from "@/components/ProductVisual";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return { title: product.name, description: product.shortDescription, alternates: { canonical: `/products/${product.slug}` }, openGraph: { title: `${product.name} — Pak Labs`, description: product.shortDescription, url: `/products/${product.slug}` } };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug); if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: product.name, applicationCategory: product.category, operatingSystem: product.platforms.join(", "), description: product.longDescription, url: `https://pak-labs.com/products/${product.slug}` };
  return <SiteShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><section className="product-hero shell"><div><Link className="back-link" href="/products">← All products</Link><p className="product-category">{product.category}</p><h1>{product.name}</h1><ProductStatus status={product.status} /><p>{product.longDescription}</p><div className="button-row">{product.publicUrl && <a className="button primary" href={product.publicUrl} target="_blank" rel="noopener noreferrer">Visit public experience <span>↗</span></a>}<Link className="button secondary" href="/#contact">Contact Pak Labs <span>→</span></Link></div></div><ProductVisual product={product} /></section><section className="section band"><div className="shell detail-grid"><div><p className="section-label">Capabilities</p><h2>What {product.name} is being built to do.</h2><ul className="capability-list">{product.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></div><aside><h3>Platform</h3><p>{product.platforms.join(" · ")}</p><h3>Technical direction</h3><p>{product.technologies.join(" · ")}</p><h3>Privacy and safety</h3><p>{product.privacy}</p></aside></div></section><section className="section shell"><div className="section-heading"><p className="section-label">Related systems</p><h2>Part of the Pak Labs portfolio.</h2></div><div className="related-grid">{related.map((item) => <Link key={item.slug} href={`/products/${item.slug}`}><strong>{item.name}</strong><span>{item.category}</span><b>→</b></Link>)}</div></section></SiteShell>;
}
