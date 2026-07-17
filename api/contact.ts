import { BrevoClient } from "@getbrevo/brevo";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const CONTACT_SENDER = process.env.CONTACT_SENDER!;
const CONTACT_RECEIVER = process.env.CONTACT_RECEIVER!;

if (!BREVO_API_KEY) throw new Error("BREVO_API_KEY is missing");
if (!CONTACT_SENDER) throw new Error("CONTACT_SENDER is missing");
if (!CONTACT_RECEIVER) throw new Error("CONTACT_RECEIVER is missing");

const brevo = new BrevoClient({ apiKey: BREVO_API_KEY });

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const allowedOrigin = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:5173";
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const body = contactSchema.parse(req.body);

    await brevo.transactionalEmails.sendTransacEmail({
      to: [{ email: CONTACT_RECEIVER }],
      sender: { email: CONTACT_SENDER },
      replyTo: { email: body.email, name: body.name },
      subject: `[Contact] ${body.subject}`,
      textContent: `From: ${body.name} <${body.email}>\n\n${body.message}`,
      headers: {
        "X-Mailer": "Vercel Brevo Function",
      },
    });
    return res.status(200).json({ status: "success" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.issues });
    }

    console.error("Brevo error:", err);
    return res.status(500).json({ status: "error" });
  }
}
