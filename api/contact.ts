import sgMail, { type MailDataRequired } from "@sendgrid/mail";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const CONTACT_SENDER = process.env.CONTACT_SENDER!;
const CONTACT_RECEIVER = process.env.CONTACT_RECEIVER!;

if (!SENDGRID_API_KEY) throw new Error("SENDGRID_API_KEY is missing");
if (!CONTACT_SENDER) throw new Error("CONTACT_SENDER is missing");
if (!CONTACT_RECEIVER) throw new Error("CONTACT_RECEIVER is missing");

sgMail.setApiKey(SENDGRID_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const body = contactSchema.parse(req.body);

    const mail: MailDataRequired = {
      to: CONTACT_RECEIVER,
      from: CONTACT_SENDER,
      subject: `[Contact] ${body.subject}`,
      text: `From: ${body.name} <${body.email}>\n\n${body.message}`,
      headers: {
        "X-Priority": "3",
        "X-Mailer": "Vercel SendGrid Function",
      },
    };

    await sgMail.send(mail);
    return res.status(200).json({ status: "success" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.issues });
    }

    console.error("SendGrid error:", err);
    return res.status(500).json({ status: "error" });
  }
}
