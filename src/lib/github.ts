import { featuredProjects, GITHUB_USER, type Project } from "./projects";

/**
 * Optional GitHub enrichment for the project carousel.
 *
 * Fetches public repo metadata for GITHUB_USER and merges the last-pushed
 * date into the manually curated `featuredProjects` list (matched by `repo`).
 * Runs server-side with ISR (revalidates hourly), so it costs nothing at
 * request time and never blocks rendering: if the API call fails or rate
 * limits, the cards simply render from the manual data in projects.ts.
 *
 * No token is required for public repos at this call volume. If you ever
 * hit rate limits, set GITHUB_TOKEN in your env and it will be used.
 */

type RepoMeta = { pushed_at: string; name: string };

export async function getFeaturedProjects(): Promise<Project[]> {
  let repoMap = new Map<string, RepoMeta>();

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        // ISR: re-fetch at most once per hour
        next: { revalidate: 3600 },
      },
    );
    if (res.ok) {
      const repos = (await res.json()) as RepoMeta[];
      repoMap = new Map(repos.map((r) => [r.name.toLowerCase(), r]));
    }
  } catch {
    // Offline / rate-limited — fall through to manual data.
  }

  return featuredProjects.map((project) => {
    const meta = project.repo ? repoMap.get(project.repo.toLowerCase()) : undefined;
    return meta ? { ...project, lastPushed: meta.pushed_at } : project;
  });
}

/** "2026-05-27T…" -> "May 2026" for the card footer. */
export function formatPushedDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
