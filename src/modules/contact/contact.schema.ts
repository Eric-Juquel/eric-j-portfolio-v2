import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  subject: z
    .string()
    .nonempty({ message: "Subject is required" })
    .max(100, { message: "Subject must be at most 100 characters" }),
  message: z
    .string()
    .nonempty({ message: "Message is required" })
    .max(500, { message: "Message must be at most 500 characters" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
