# Pak Labs — pak-labs.com

Company website for Pak Labs, a founder-led AI-native product studio. Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. Production checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Content architecture

`src/lib/products.ts` is the typed source of truth for Nomi, Holobots, AlphaLabs, Cadence, and PakOS. It powers the homepage, product index, product detail pages, company overview, metadata, structured data, and sitemap.

Public routes:

- `/`
- `/products`
- `/products/[slug]`
- `/how-we-build`
- `/company` — reviewer-friendly, print-ready company overview
- `/updates`
- `/privacy`
- `/terms`

## Contact delivery

The form posts to `/api/inquiry`. It will return an error rather than falsely reporting delivery when no provider is configured. Configure one of these in `.env.local` and in Vercel:

### Resend

```text
RESEND_API_KEY=re_...
INQUIRY_TO_EMAIL=you@example.com
INQUIRY_FROM_EMAIL=inquiries@pak-labs.com
```

The sender domain must be verified in Resend.

### Formspree

```text
FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
```

The endpoint includes a honeypot, input limits, content-type checks, and production-origin validation. For higher-volume use, add provider-side rate limiting or an edge rate-limit service.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import it into Vercel as a Next.js project.
3. Add the production contact-delivery environment variables.
4. Attach `pak-labs.com` and confirm both apex and `www` behavior.
5. Verify `/sitemap.xml`, `/robots.txt`, social previews, and the contact flow after deployment.

## Founder confirmation checklist

Before publishing stronger claims, confirm:

- Legal company name, entity type, and incorporation date.
- A branded company email and any official LinkedIn profile.
- Exact current status of Nomi, Cadence, and mobile Holobots builds.
- Whether any TestFlight, App Store, or Google Play links are public.
- Which product screenshots may be published.
- Whether individual GitHub repositories should be linked publicly.

The site intentionally does not publish funding, revenue, users, downloads, formal partnerships, store approval, or launch dates without evidence.
