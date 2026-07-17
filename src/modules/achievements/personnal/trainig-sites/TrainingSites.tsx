import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { Slide } from "@/shared/components/carousel/EmblaCarousel";
import CarouselModal from "@/shared/components/modals/CarouselModal";
import { getSites } from "./tarining-sites-data";

const SITES = getSites();

export default function TrainingSites() {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [currentSlides, setCurrentSlides] = useState<Slide[]>([]);
  const [currentTitle, setCurrentTitle] = useState("");

  const openModal = (slides: Slide[], title: string) => {
    setCurrentSlides(slides);
    setCurrentTitle(title);
    dialogRef.current?.showModal();
  };

  return (
    <div className="flex flex-wrap justify-evenly gap-5 mb-10 mt-10">
      {Array.isArray(SITES) &&
        SITES.length > 0 &&
        SITES.map((site) => (
          <div key={site.id} className="max-w-sm w-full ">
            <button
              type="button"
              className="block w-full p-0 border-0 bg-transparent cursor-pointer"
              aria-label={`${t("slider")} : ${site.title}`}
              onClick={() => openModal(site.carousel as Slide[], site.title)}
            >
              <img
                src={site.image}
                alt={site.title}
                className="w-full h-auto object-cover rounded-md pointer-fine:hover:scale-105 transition-transform duration-300"
              />
            </button>
            <h3 className="text-xl font-semibold mt-4">{site.title}</h3>
            <p className="text-gray-400">{site.subtitle}</p>
          </div>
        ))}

      <CarouselModal
        dialogRef={dialogRef}
        slides={currentSlides}
        title={currentTitle}
      />
    </div>
  );
}
