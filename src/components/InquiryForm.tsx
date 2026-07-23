"use client";

import { useState, type FormEvent } from "react";
import { inquiryTopics, site } from "@/lib/site";

type SubmitState = "idle" | "sending" | "success" | "error";

export default function InquiryForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("sending");
    try {
      const response = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form).entries())) });
      if (!response.ok) throw new Error("Delivery unavailable");
      form.reset(); setState("success");
    } catch { setState("error"); }
  }

  return (
    <section className="section shell contact-section" id="contact">
      <div className="contact-copy"><p className="section-label">Contact</p><h2>Build what comes next.</h2><p>Pak Labs is open to platform partnerships, startup programs, technical collaborations, product opportunities, press, and aligned conversations.</p><div className="contact-topics"><span>Startup + cloud programs</span><span>Technology partnerships</span><span>Product collaboration</span><span>Press</span><span>General inquiries</span><span className="secondary-topic">Select consulting</span></div></div>
      <div className="contact-form-wrap">
        {state === "success" ? <div className="form-message"><h3>Inquiry sent.</h3><p>Thanks for reaching out. Pak Labs will follow up at the email you provided.</p><button className="button secondary" type="button" onClick={() => setState("idle")}>Send another</button></div> :
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="field-grid"><label>Name<input name="name" autoComplete="name" required /></label><label>Email<input type="email" name="email" autoComplete="email" required /></label></div>
          <div className="field-grid"><label>Company <span>(optional)</span><input name="company" autoComplete="organization" /></label><label>Inquiry type<select name="topic" defaultValue="" required><option value="" disabled>Select a topic</option>{inquiryTopics.map((topic) => <option key={topic}>{topic}</option>)}</select></label></div>
          <label>Message<textarea name="message" rows={5} required placeholder="Tell us what you’re working on or what you need." /></label>
          <input className="honeypot" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          {state === "error" && <p className="error-message">Delivery is not available right now. Please email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>}
          <div className="form-footer"><p>Your information is used only to respond to this inquiry.</p><button className="button primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send Inquiry"} <span>→</span></button></div>
        </form>}
      </div>
    </section>
  );
}
