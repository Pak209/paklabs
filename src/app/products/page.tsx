import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import ProductStatus from "@/components/ProductStatus";
import ProductVisual from "@/components/ProductVisual";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Products", description: "Explore Nomi, Holobots, AlphaLabs, Cadence, and PakOS.", alternates: { canonical: "/products" } };

export default function ProductsPage() {
  return <SiteShell><section className="page-hero shell"><p className="section-label">Products</p><h1>Connected products for how people remember, create, play, decide, and operate.</h1><p>Each product stands on its own. Together, they form a portfolio built around human-directed AI and practical systems engineering.</p></section><section className="section shell"><div className="product-grid">{products.map((product) => <article key={product.slug} className="product-card"><ProductVisual product={product} /><div><p className="product-category">{product.category}</p><h2>{product.name}</h2><ProductStatus status={product.status} /><p>{product.longDescription}</p><p className="platform-line">{product.platforms.join(" · ")}</p><Link className="text-link" href={`/products/${product.slug}`}>Explore {product.name} <span>→</span></Link></div></article>)}</div></section></SiteShell>;
}
