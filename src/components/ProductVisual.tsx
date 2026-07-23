import type { Product } from "@/lib/products";

export default function ProductVisual({ product, compact = false }: { product: Pick<Product, "name" | "slug" | "accent">; compact?: boolean }) {
  return (
    <div className={`product-visual accent-${product.accent} ${compact ? "compact" : ""}`} aria-hidden="true">
      <span className="visual-grid" />
      <span className="visual-orbit orbit-one" />
      <span className="visual-orbit orbit-two" />
      <span className="visual-core">{product.name.slice(0, 1)}</span>
      <span className="visual-label">{product.slug}</span>
    </div>
  );
}
