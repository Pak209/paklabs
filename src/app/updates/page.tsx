import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = { title: "Updates", description: "Verified build notes and product updates from Pak Labs.", alternates: { canonical: "/updates" } };
export default function UpdatesPage() { return <SiteShell><section className="page-hero shell"><p className="section-label">Updates / Build log</p><h1>Notes from building Pak Labs.</h1><p>This space is prepared for truthful product updates, technical decisions, launch lessons, and founder notes. No posts or dates are published until there is verified work to document.</p></section><section className="section shell"><div className="empty-log"><span>Build log ready</span><h2>The structure is live. The stories will be real.</h2><p>Future entries may cover Nomi, HoloCity, PakOS, Cadence, and lessons from operating an AI-native product portfolio.</p></div></section></SiteShell>; }
