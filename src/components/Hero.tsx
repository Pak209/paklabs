import { site } from "@/lib/site";
import { ArrowRightIcon, MailIcon } from "./Icons";

/**
 * Hero — brand statement + primary CTAs, with an animated wireframe cube.
 * Edit headline/tagline copy in src/lib/site.ts; layout lives here.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Ambient glow behind the cube */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-accent-bright uppercase">
            {site.name}
          </p>
          <h1 className="font-display mt-4 text-4xl leading-[1.05] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            Building the future,{" "}
            <span className="bg-gradient-to-r from-accent-bright to-accent-cyan bg-clip-text text-transparent">
              one system
            </span>{" "}
            at a time.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-bright hover:shadow-[0_0_28px_rgba(124,107,246,0.45)]"
            >
              View Projects
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-edge bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent-bright"
            >
              Business Inquiries
              <MailIcon className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-12 flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-muted uppercase">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-accent-bright" aria-hidden="true">
              <path d="M2 14 14 2M2 8v6h6" />
            </svg>
            Labs. Experiments. Systems. Impact.
          </p>
        </div>

        {/* Animated wireframe cube */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <HeroCube />
        </div>
      </div>
    </section>
  );
}

function HeroCube() {
  return (
    <svg viewBox="0 0 400 420" className="w-full" role="img" aria-label="Glowing wireframe cube illustration">
      <defs>
        <linearGradient id="cube-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a08dff" />
          <stop offset="1" stopColor="#4cc9f0" />
        </linearGradient>
        <linearGradient id="cube-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7c6bf6" stopOpacity="0.28" />
          <stop offset="1" stopColor="#7c6bf6" stopOpacity="0.04" />
        </linearGradient>
        <radialGradient id="base-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#7c6bf6" stopOpacity="0.5" />
          <stop offset="1" stopColor="#7c6bf6" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base platform */}
      <ellipse cx="200" cy="360" rx="150" ry="34" fill="url(#base-glow)" />
      <ellipse cx="200" cy="360" rx="110" ry="24" fill="none" stroke="#7c6bf6" strokeOpacity="0.5" className="animate-pulse-ring" />
      <ellipse cx="200" cy="360" rx="70" ry="15" fill="none" stroke="#4cc9f0" strokeOpacity="0.35" className="animate-pulse-ring" style={{ animationDelay: "2s" }} />

      {/* Floating cube */}
      <g filter="url(#glow)" className="animate-float">
        {/* faces */}
        <path d="M200 60 300 118v116l-100 58-100-58V118Z" fill="url(#cube-face)" />
        {/* outer edges */}
        <path d="M200 60 300 118v116l-100 58-100-58V118Z" fill="none" stroke="url(#cube-edge)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M100 118l100 58 100-58M200 176v116" fill="none" stroke="url(#cube-edge)" strokeWidth="2" strokeLinejoin="round" />
        {/* inner wireframe */}
        <path d="M200 100 265 138v78l-65 38-65-38v-78Z" fill="none" stroke="#a08dff" strokeOpacity="0.45" strokeWidth="1" />
        <path d="M135 138l65 38 65-38M200 176v78" fill="none" stroke="#a08dff" strokeOpacity="0.45" strokeWidth="1" />
        {/* corner nodes */}
        {[
          [200, 60], [300, 118], [300, 234], [200, 292], [100, 234], [100, 118], [200, 176],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#a08dff" />
        ))}
      </g>

      {/* Ambient particles */}
      {[
        [70, 90, 2], [340, 80, 1.5], [355, 200, 2], [50, 210, 1.5], [320, 300, 2], [85, 310, 1.5],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#4cc9f0" opacity="0.6" className="animate-pulse-ring" style={{ animationDelay: `${i * 0.7}s` }} />
      ))}
    </svg>
  );
}
