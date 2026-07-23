# Pak Labs company-site implementation plan

## Baseline

- Preserve the Next.js 16 App Router, TypeScript, Tailwind CSS v4, local font setup, server-rendered pages, and lightweight CSS motion.
- Retain the dark Pak Labs palette, geometric mark, and technical visual language while replacing portfolio/freelance framing with a product-company narrative.
- Keep public GitHub enrichment optional and non-blocking.

## Content and architecture

1. Replace the outdated project list with one typed product source for Nomi, Holobots, AlphaLabs, Cadence, and PakOS.
2. Use that source for the homepage, `/products`, `/products/[slug]`, `/company`, metadata, sitemap, and structured data.
3. Add dedicated How We Build, Company, Updates, Privacy, and Terms routes.
4. Publish only conservative product statuses. Record uncertain facts in a founder-confirmation checklist rather than on the public site.
5. Reframe contact around startup programs, partnerships, collaboration, press, and product opportunities; keep consulting secondary.

## Reliability and review

- Make the inquiry endpoint fail honestly when no delivery provider is configured, retain the honeypot, add origin/content-length checks, and avoid logging message contents.
- Add canonical metadata, Open Graph metadata, organization/software structured data, sitemap, robots, and a generated social image.
- Verify lint, TypeScript, production build, internal routes, external links, metadata output, reduced motion, keyboard focus, responsive layout, and contact validation.
- Preserve unrelated existing edits in `AGENTS.md` and `.pakos/`.

## Source constraints

- The uploaded startup-credit workbook supports the need for a credible company site and reusable application packet, but it does not verify incorporation, funding, user counts, revenue, launch dates, or store approval.
- The supplied brief is the content source of truth where repository evidence is absent. Uncertain facts remain conservative or unpublished.
