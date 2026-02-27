import { useRef, useState } from "react";
import type { Slide } from "@/shared/components/carousel/EmblaCarousel";
import CarouselModal from "@/shared/components/modals/CarouselModal";
import { getSites } from "./tarining-sites-data";

const SITES = getSites();

export default function TrainingSites() {
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
            <img
              src={site.image}
              alt={site.title}
              className="w-full h-auto object-cover rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(site.carousel as Slide[], site.title)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                openModal(site.carousel as Slide[], site.title)
              }
            />
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
