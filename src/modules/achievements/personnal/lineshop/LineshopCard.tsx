import { useState } from "react";
import { useTranslation } from "react-i18next";
import LineshopIntroMp4 from "@/assets/lineshop-intro.mp4";
import LineshopIntroWebm from "@/assets/lineshop-intro.webm";
import Tooltip from "@/shared/components/Tooltip";

interface LineshopCardProps {
	iframeUrl: string;
	imageUrl: string;
	title: string;
	subtitle: string;
	visitUrl: string;
	hideVisitOnMobile?: boolean;
}

export default function LineshopCard({
	iframeUrl,
	imageUrl,
	title,
	subtitle,
	visitUrl,
	hideVisitOnMobile = false,
}: LineshopCardProps) {
	const { t } = useTranslation();
	const [hasStarted, setHasStarted] = useState(false);

	return (
		<div className="max-w-6xl w-full mb-10">
			{/* iframe for large screens */}
			<iframe
				src={iframeUrl}
				title={title}
				className="hidden lg:block w-full xl:h-150 lg:h-100 border-none"
				sandbox="allow-scripts allow-same-origin"
				loading="lazy"
			/>

			{/* animated clip for small screens (the live iframe is too heavy on mobile) */}
			{hasStarted ? (
				<video
					className="block lg:hidden w-full h-auto object-cover md:px-1"
					autoPlay
					muted
					loop
					playsInline
					aria-label={title}
				>
					<source src={LineshopIntroWebm} type="video/webm" />
					<source src={LineshopIntroMp4} type="video/mp4" />
				</video>
			) : (
				<button
					type="button"
					onClick={() => setHasStarted(true)}
					className="relative block lg:hidden w-full cursor-pointer"
					aria-label={t("video")}
				>
					<img
						src={imageUrl}
						alt={title}
						className="w-full h-auto object-cover md:px-1"
						loading="lazy"
					/>
					<span className="absolute inset-0 flex items-center justify-center">
						<span className="flex items-center justify-center w-16 h-16 rounded-full bg-black/50">
							<span className="ml-1 border-y-12 border-y-transparent border-l-20 border-l-white" />
						</span>
					</span>
				</button>
			)}

			<div className="flex flex-col items-start gap-2 mt-4">
				<h5 className="text-2xl font-normal">{title}</h5>
				<p className="text-gray-400">
					{subtitle}
					<span className="hidden lg:inline"> {t("lineshopSandboxNote")}</span>
				</p>
			</div>

			<div className={hideVisitOnMobile ? "hidden lg:block mt-4" : "mt-4"}>
				<Tooltip
					text={`${t("linkTo")} ${visitUrl}`}
					place="top"
					aria-label={`${t("linkTo")} ${visitUrl}`}
				>
					<a
						href={visitUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="button-secondary"
					>
						{t("visit")}
					</a>
				</Tooltip>
			</div>
		</div>
	);
}
