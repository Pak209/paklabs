import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/products", "/how-we-build", "/company", "/updates", "/privacy", "/terms", ...products.map((product) => `/products/${product.slug}`)];
  return routes.map((route) => ({ url: `${site.url}${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route.startsWith("/products/") ? 0.7 : 0.8 }));
}
