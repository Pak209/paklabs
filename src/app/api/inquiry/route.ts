import { NextResponse } from "next/server";

/**
 * ---------------------------------------------------------------------------
 * INQUIRY ROUTING — wire your email/backend provider here.
 *
 * Works out of the box with zero config: submissions are validated and
 * logged server-side (visible in Vercel function logs), and the form UI
 * reports success. To actually deliver inquiries, set env vars for ONE of:
 *
 *   1. Resend (recommended — https://resend.com)
 *      RESEND_API_KEY   = re_...            (from the Resend dashboard)
 *      INQUIRY_TO_EMAIL = you@example.com   (where inquiries land)
 *      INQUIRY_FROM_EMAIL = inquiries@pak-labs.com
 *        (must be on a domain you've verified in Resend; until then you can
 *         use onboarding@resend.dev for testing)
 *
 *   2. Formspree (https://formspree.io — no code, no domain setup)
 *      FORMSPREE_ENDPOINT = https://formspree.io/f/yourFormId
 *
 *   3. Supabase / custom DB — replace the body of `deliver()` with an
 *      insert into your table, e.g.:
 *        await supabase.from("inquiries").insert(inquiry);
 * ---------------------------------------------------------------------------
 */

type Inquiry = {
  name: string;
  email: string;
  company?: string;
  topic?: string;
  message: string;
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  // Honeypot: the hidden "company_website" field is only filled by bots.
  // Pretend success so the bot moves on.
  if (body?.company_website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, company, topic, message } = body ?? {};
  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !email.includes("@") ||
    typeof message !== "string" || !message.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  const inquiry: Inquiry = {
    name: name.trim().slice(0, 200),
    email: email.trim().slice(0, 200),
    company: typeof company === "string" ? company.trim().slice(0, 200) : undefined,
    topic: typeof topic === "string" ? topic.trim().slice(0, 200) : undefined,
    message: message.trim().slice(0, 5000),
  };

  try {
    await deliver(inquiry);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[inquiry] delivery failed:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to deliver inquiry." },
      { status: 502 },
    );
  }
}

async function deliver(inquiry: Inquiry): Promise<void> {
  // --- Option 1: Resend ----------------------------------------------------
  if (process.env.RESEND_API_KEY && process.env.INQUIRY_TO_EMAIL) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.INQUIRY_FROM_EMAIL ?? "onboarding@resend.dev",
        to: process.env.INQUIRY_TO_EMAIL,
        reply_to: inquiry.email,
        subject: `[Pak Labs] ${inquiry.topic ?? "Inquiry"} — ${inquiry.name}`,
        text: [
          `Name: ${inquiry.name}`,
          `Email: ${inquiry.email}`,
          inquiry.company && `Company: ${inquiry.company}`,
          inquiry.topic && `Topic: ${inquiry.topic}`,
          "",
          inquiry.message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });
    if (!res.ok) throw new Error(`Resend error ${res.status}: ${await res.text()}`);
    return;
  }

  // --- Option 2: Formspree -------------------------------------------------
  if (process.env.FORMSPREE_ENDPOINT) {
    const res = await fetch(process.env.FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(inquiry),
    });
    if (!res.ok) throw new Error(`Formspree error ${res.status}`);
    return;
  }

  // --- Option 3: Supabase / custom backend ---------------------------------
  // Replace this fallback with your own persistence, e.g.:
  //   const supabase = createClient(url, serviceRoleKey);
  //   const { error } = await supabase.from("inquiries").insert(inquiry);
  //   if (error) throw error;

  // --- Fallback: log only (no provider configured yet) ---------------------
  console.log("[inquiry] no delivery provider configured — logging only:", inquiry);
}
