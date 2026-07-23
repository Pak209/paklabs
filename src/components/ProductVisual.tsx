import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductVisual({ product, compact = false }: { product: Pick<Product, "name" | "artwork">; compact?: boolean }) {
  return (
    <div className={`product-visual ${compact ? "compact" : ""}`}>
      <Image src={product.artwork} alt={`${product.name} product artwork`} fill sizes={compact ? "180px" : "(max-width: 700px) 100vw, 520px"} className="product-artwork" />
    </div>
  );
}
