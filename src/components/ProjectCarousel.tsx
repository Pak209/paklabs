"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { statusMeta, type Project } from "@/lib/projects";
import { formatPushedDate } from "@/lib/github";
import { site } from "@/lib/site";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from "./Icons";

/**
 * ProjectCarousel — horizontally scrollable, snap-aligned project cards.
 * Native CSS scroll-snap does the heavy lifting (smooth + performant, works
 * with touch/trackpad); the buttons and dots just drive/reflect scrollLeft.
 *
 * The cards themselves come from src/lib/projects.ts — edit there.
 */
export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const syncPagination = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const pages = Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth));
    setPageCount(pages);
    const maxScroll = track.scrollWidth - track.clientWidth;
    const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    setPage(Math.round(progress * (pages - 1)));
  }, []);

  useEffect(() => {
    syncPagination();
    window.addEventListener("resize", syncPagination);
    return () => window.removeEventListener("resize", syncPagination);
  }, [syncPagination]);

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  };

  const scrollToPage = (target: number) => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollTo({
      left: (maxScroll * target) / Math.max(1, pageCount - 1),
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-10">
          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.3em] text-accent-bright uppercase">
                Featured Projects
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
                Built in the Lab
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                A selection of experiments, tools, and systems we&apos;re
                building and iterating on.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollByPage(-1)}
                aria-label="Previous projects"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByPage(1)}
                aria-label="Next projects"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
              <a
                href={`${site.githubUrl}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 hidden items-center gap-2 rounded-lg border border-edge px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent-bright sm:inline-flex"
              >
                <GitHubIcon className="h-4 w-4" />
                View all on GitHub
              </a>
            </div>
          </div>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={syncPagination}
            className="scrollbar-hide -mx-1 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-2"
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          {/* Dots */}
          {pageCount > 1 && (
            <div className="mt-4 flex justify-center gap-2">
              {Array.from({ length: pageCount }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === page ? "w-6 bg-accent" : "w-2 bg-edge hover:bg-muted"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Mobile "view all" link */}
          <a
            href={`${site.githubUrl}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-edge px-4 py-2.5 text-sm font-medium sm:hidden"
          >
            <GitHubIcon className="h-4 w-4" />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const status = statusMeta[project.status];
  const repoUrl = project.repo ? `${site.githubUrl}/${project.repo}` : undefined;

  return (
    <article className="flex w-[280px] shrink-0 snap-start flex-col rounded-2xl border border-edge bg-card p-5 transition-colors hover:border-accent/40 hover:bg-card-hover sm:w-[300px]">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl font-bold ${project.tint}`}
        >
          {project.icon}
        </div>
        <span
          className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <h3 className="font-display mt-4 text-lg font-bold">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-edge bg-panel px-2 py-1 text-[11px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-edge pt-4 text-sm">
        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        ) : (
          <span className="text-xs text-muted/70">Private build</span>
        )}
        <div className="flex items-center gap-3">
          {project.lastPushed && (
            <span className="text-[11px] text-muted/70">
              {formatPushedDate(project.lastPushed)}
            </span>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-accent-bright transition-colors hover:text-foreground"
            >
              Live
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
