import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

type UseEmblaDotsReturn = {
  selectedIndex: number;
  scrollSnaps: number[];
  scrollTo: (index: number) => void;
};

export function useEmblaDots(
  emblaApi: EmblaCarouselType | undefined,
): UseEmblaDotsReturn {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("init", onInit);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("init", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, scrollTo };
}
