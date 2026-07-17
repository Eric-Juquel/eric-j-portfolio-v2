import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import ButtonFill from "@/shared/components/buttons/ButtonFill";
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
			// Call to the serverless API
			const res = await fetch("/api/contact", {
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

	const ErrorMessage = ({ id, message }: { id: string; message?: string }) => (
		<p id={id} aria-live="polite" className="text-warning text-sm mt-1 min-h-5">
			{message || "\u00A0"}
		</p>
	);

	return (
		<div className="w-full max-w-2xl">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
				{/* Name + Email */}
				<div className="grid md:grid-cols-2 gap-4">
					<div>
						<label htmlFor="name" className="sr-only">
							{t("name")}
						</label>
						<input
							{...register("name")}
							id="name"
							required
							aria-required="true"
							aria-invalid={!!errors.name}
							aria-describedby={errors.name ? "name-error" : undefined}
							placeholder={t("name")}
							className="w-full bg-paper border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-secondary"
						/>
						<ErrorMessage id="name-error" message={errors.name?.message} />
					</div>

					<div>
						<label htmlFor="email" className="sr-only">
							{t("emailLabel")}
						</label>
						<input
							{...register("email")}
							id="email"
							type="email"
							required
							aria-required="true"
							aria-invalid={!!errors.email}
							aria-describedby={errors.email ? "email-error" : undefined}
							placeholder={t("emailLabel")}
							className="w-full bg-paper border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-secondary"
						/>
						<ErrorMessage id="email-error" message={errors.email?.message} />
					</div>
				</div>

				{/* Subject */}
				<div>
					<label htmlFor="subject" className="sr-only">
						{t("subject")}
					</label>
					<input
						{...register("subject")}
						id="subject"
						required
						aria-required="true"
						aria-invalid={!!errors.subject}
						aria-describedby={errors.subject ? "subject-error" : undefined}
						maxLength={100}
						placeholder={t("subject")}
						className="w-full bg-paper border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-secondary"
					/>
					<ErrorMessage id="subject-error" message={errors.subject?.message} />
				</div>

				{/* Message */}
				<div>
					<label htmlFor="message" className="sr-only">
						{t("message")}
					</label>
					<textarea
						{...register("message")}
						id="message"
						required
						aria-required="true"
						aria-invalid={!!errors.message}
						aria-describedby={errors.message ? "message-error" : undefined}
						rows={5}
						maxLength={500}
						placeholder={t("message")}
						className="w-full bg-paper border border-white/10 rounded px-4 py-3 text-light resize-none focus:outline-none focus:border-secondary"
					/>
					<ErrorMessage id="message-error" message={errors.message?.message} />
				</div>

				{/* Submit */}
				<ButtonFill
					type="submit"
					disabled={isSubmitting || status === "sending"}
					text={status === "sending" ? t("sending") : t("submit")}
				/>
			</form>
		</div>
	);
}
