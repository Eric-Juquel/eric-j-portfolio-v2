import { useTranslation } from "react-i18next";
import Tooltip from "@/shared/components/Tooltip";

interface LineshopCardProps {
  iframeUrl: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  visitUrl: string;
}

export default function LineshopCard({
  iframeUrl,
  imageUrl,
  title,
  subtitle,
  visitUrl,
}: LineshopCardProps) {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl w-full mb-10">
      {/* iframe pour grand écran */}
      <iframe
        src={iframeUrl}
        title={title}
        className="hidden lg:block w-full xl:h-150 lg:h-100 md:h-80 sm:h-40 border-none"
        sandbox="allow-scripts allow-same-origin"
        loading="lazy"
      />

      {/* image pour petit écran */}
      <img
        src={imageUrl}
        alt={title}
        className="block lg:hidden w-full h-auto object-cover md:px-1"
        loading="lazy"
      />

      <div className="flex flex-col items-start gap-2 mt-4">
        <h5 className="text-2xl font-normal">{title}</h5>
        <p className="text-gray-400">{subtitle}</p>
      </div>

      <div className="mt-4">
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
