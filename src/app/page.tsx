import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCarousel from "@/components/ProjectCarousel";
import LaunchpadLinks from "@/components/LaunchpadLinks";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getFeaturedProjects } from "@/lib/github";

/**
 * Landing page composition. Section content lives in:
 *   - src/lib/projects.ts  → featured project cards
 *   - src/lib/site.ts      → brand copy, launchpad links, services, contact
 */
export default async function Home() {
  // Manual project list from src/lib/projects.ts, optionally enriched with
  // GitHub metadata (falls back gracefully if the API is unavailable).
  const projects = await getFeaturedProjects();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <ProjectCarousel projects={projects} />
        </Reveal>
        <Reveal>
          <LaunchpadLinks />
        </Reveal>
        <Reveal>
          <InquiryForm />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
