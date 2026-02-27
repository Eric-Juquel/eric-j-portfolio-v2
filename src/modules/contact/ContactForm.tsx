import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { toastError, toastSuccess } from "@/shared/utils/toast.utils";
import { type ContactFormData, contactSchema } from "./contact.schema";

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    console.log("Form submitted:", data);

    try {
      // Appel à l'API serverless
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.text();
      const json = JSON.parse(result);

      if (!res.ok || json.status === "error") {
        throw new Error(json.error || "Error sending message");
      }
      toastSuccess(t("sent"));
      reset();
    } catch (err) {
      console.error("Error:", err);
      toastError(t("errorSent"));
    } finally {
      setStatus("idle"); // Reset status
    }
  };

  const ErrorMessage = ({ message }: { message?: string }) => (
    <p className="text-warning text-sm mt-1 min-h-5">{message || "\u00A0"}</p>
  );

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              {...register("name")}
              placeholder={t("name")}
              className="w-full bg-paper border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-secondary"
            />
            <ErrorMessage message={errors.name?.message} />
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              placeholder={"Email"}
              className="w-full bg-paper border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-secondary"
            />
            <ErrorMessage message={errors.email?.message} />
          </div>
        </div>

        {/* Subject */}
        <div>
          <input
            {...register("subject")}
            maxLength={100}
            placeholder={t("subject")}
            className="w-full bg-paper border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-secondary"
          />
          <ErrorMessage message={errors.subject?.message} />
        </div>

        {/* Message */}
        <div>
          <textarea
            {...register("message")}
            rows={5}
            maxLength={500}
            placeholder={t("message")}
            className="w-full bg-paper border border-white/10 rounded px-4 py-3 text-light resize-none focus:outline-none focus:border-secondary"
          />
          <ErrorMessage message={errors.message?.message} />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || status === "sending"}
          className="button-secondary disabled:opacity-50"
        >
          {status === "sending" ? t("sending") : t("submit")}
        </button>
      </form>
    </div>
  );
}
