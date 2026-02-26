import type { EmblaCarouselType } from "embla-carousel";
import { useEmblaDots } from "./useEmblaDots";

interface Props {
  emblaApi: EmblaCarouselType | undefined;
}

export default function EmblaDots({ emblaApi }: Props) {
  const { selectedIndex, scrollSnaps, scrollTo } = useEmblaDots(emblaApi);

  return (
    <div
      className="flex items-center gap-3 mr-2"
      role="tablist"
      aria-label="Slide navigation"
    >
      {scrollSnaps.map((snap, index) => {
        const isSelected = index === selectedIndex;

        return (
          <button
            key={snap}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => scrollTo(index)}
            className="flex items-center justify-center w-6 h-6 transition-all duration-300 ease-out focus:outline-none"
          >
            <span
              className={`block transition-all duration-300 ease-out ${isSelected ? "w-6 h-1.5 bg-secondary rounded-full" : "w-1.5 h-1.5 bg-white/30 rounded-full"}`}
            />
          </button>
        );
      })}
    </div>
  );
}
