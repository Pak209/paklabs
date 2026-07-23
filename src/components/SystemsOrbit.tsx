import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function SystemsOrbit() {
  return (
    <div className="systems-orbit" aria-label="Five Pak Labs products connected around one shared operating system">
      <Image src="/images/brand/systems-orbit.png" alt="Orbital diagram connecting the five Pak Labs product systems" fill priority sizes="(max-width: 760px) 100vw, 560px" />
      <div className="orbit-labels">
        {products.map((product, index) => <Link key={product.slug} href={`/products/${product.slug}`} className={`orbit-label orbit-label-${index + 1}`}><strong>{product.name}</strong><span>{product.category.split(" · ")[0]}</span></Link>)}
      </div>
    </div>
  );
}
