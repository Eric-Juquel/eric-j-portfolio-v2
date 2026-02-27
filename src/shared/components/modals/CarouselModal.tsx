import type { EmblaOptionsType } from "embla-carousel";
import type { RefObject } from "react";
import type { Slide } from "../carousel/EmblaCarousel";
import EmblaCarousel from "../carousel/EmblaCarousel";

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

interface CarouselModalProps {
  dialogRef: RefObject<HTMLDialogElement | null>;
  slides: Slide[];
  title?: string;
  overlay?: boolean;
}

export default function CarouselModal({
  dialogRef,
  slides,
  title,
  overlay = false,
}: CarouselModalProps) {
  return (
    <dialog
      ref={dialogRef}
      className="fixed bg-paper top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 
      rounded-md p-6 w-[95%] max-w-6xl 
      backdrop:bg-black/50 backdrop:backdrop-blur-sm z-50 outline-none"
    >
      {title && <h2 className="text-center mb-6">{title}</h2>}

      <div
        className={`relative ${overlay ? "bg-white/10 p-2 rounded-md" : ""}`}
      >
        <EmblaCarousel
          slides={slides}
          options={OPTIONS}
          key={slides.map((s) => s.id).join("-")}
        />
      </div>

      <div className="flex justify-center mt-6">
        <form method="dialog">
          <button type="submit" className="button-regular">
            Fermer
          </button>
        </form>
      </div>
    </dialog>
  );
}
