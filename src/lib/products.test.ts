import assert from "node:assert/strict";
import test from "node:test";
import { getProduct, products, productStatuses } from "./products.ts";

test("the portfolio has exactly five unique, ordered flagship products", () => {
  assert.equal(products.length, 5);
  assert.deepEqual(products.map((product) => product.name), ["Nomi", "Holobots", "AlphaLabs", "Cadence", "PakOS"]);
  assert.equal(new Set(products.map((product) => product.slug)).size, products.length);
  assert.deepEqual(products.map((product) => product.displayOrder), [1, 2, 3, 4, 5]);
});

test("all product statuses resolve to conservative public labels", () => {
  for (const product of products) assert.ok(productStatuses[product.status]);
  assert.equal(getProduct("alphalabs")?.status, "research");
  assert.equal(getProduct("pakos")?.status, "internal");
  assert.equal(getProduct("missing"), undefined);
});

test("only verified public destinations are exposed", () => {
  const publicProducts = products.filter((product) => "publicUrl" in product);
  assert.deepEqual(publicProducts.map((product) => product.slug), ["holobots"]);
});
