"use client";

import { useState, type FormEvent } from "react";
import { inquiryTopics, services, site } from "@/lib/site";
import { LockIcon, SendIcon } from "./Icons";

type SubmitState = "idle" | "sending" | "success" | "error";

/**
 * InquiryForm — the "Have a Project in Mind?" contact section.
 *
 * Submits JSON to /api/inquiry (src/app/api/inquiry/route.ts), which is
 * where email/backend routing is wired — see that file + the README for
 * Resend / Formspree / Supabase options. Until a provider is configured,
 * submissions are logged server-side and the form still succeeds, so the
 * UI is fully testable.
 */
export default function InquiryForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setState("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 rounded-3xl border border-edge bg-panel p-6 sm:p-10 lg:grid-cols-[minmax(0,340px)_1fr]">
          {/* Left: pitch + services */}
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.3em] text-accent-bright uppercase">
              Let&apos;s Build
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I&apos;m open to freelance work, collaborations, and building
              custom solutions.
            </p>
            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3 text-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-accent-bright" aria-hidden="true">
                      <path d="m3 8.5 3.5 3.5L13 4.5" />
                    </svg>
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          {state === "success" ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/5 p-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-2xl">
                ✅
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">
                Inquiry sent!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-muted">
                Thanks for reaching out — I&apos;ll get back to you soon. You
                can also email{" "}
                <a href={`mailto:${site.email}`} className="text-accent-bright hover:underline">
                  {site.email}
                </a>{" "}
                directly.
              </p>
              <button
                type="button"
                onClick={() => setState("idle")}
                className="mt-6 rounded-lg border border-edge px-5 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  autoComplete="name"
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  autoComplete="email"
                  className={inputClass}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="company"
                  placeholder="Company (optional)"
                  autoComplete="organization"
                  className={inputClass}
                />
                <select name="topic" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    What are you looking for?
                  </option>
                  {inquiryTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or inquiry..."
                className={`${inputClass} resize-y`}
              />

              {/* Honeypot — hidden from humans, bots fill it in. */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {state === "error" && (
                <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  Something went wrong sending your inquiry. Please try again,
                  or email{" "}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>{" "}
                  directly.
                </p>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-xs text-muted">
                  <LockIcon className="h-3.5 w-3.5" />
                  Your information is kept private and secure.
                </p>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-bright hover:shadow-[0_0_28px_rgba(124,107,246,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state === "sending" ? "Sending..." : "Send Inquiry"}
                  <SendIcon className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-edge bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20";
