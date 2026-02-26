import type { EmblaOptionsType } from "embla-carousel";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import EmblaArrows from "./EmblaArrows";
import EmblaDots from "./EmblaDots";
import { useEmblaNavigation } from "./useEmblaNavigation";

export interface Slide {
  id: number;
  url: string;
  title: string;
  subtitle?: string;
  alt?: string;
}

interface Props {
  slides: Slide[];
  options?: EmblaOptionsType;
}

export default function EmblaCarousel({ slides, options }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } =
    useEmblaNavigation(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const dialog = emblaApi.rootNode().closest("dialog");
    if (!dialog) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") emblaApi.scrollPrev();
      if (e.key === "ArrowRight") emblaApi.scrollNext();
    };

    dialog.addEventListener("keydown", handleKeyDown);

    return () => {
      dialog.removeEventListener("keydown", handleKeyDown);
    };
  }, [emblaApi]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full flex flex-col items-center px-4"
            >
              <img
                src={slide.url}
                alt={slide.alt ?? slide.title}
                className="max-h-[60vh] object-contain rounded-md"
              />
              <div className="mt-4 text-center">
                <h3 className="font-semibold">{slide.title}</h3>
                {slide.subtitle && (
                  <p className="text-sm text-medium">{slide.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <EmblaArrows
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
          onPrev={scrollPrev}
          onNext={scrollNext}
        />
        <EmblaDots emblaApi={emblaApi} />
      </div>
    </div>
  );
}
