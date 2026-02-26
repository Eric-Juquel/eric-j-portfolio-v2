import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export default function EmblaArrows({
  canScrollPrev,
  canScrollNext,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="text-light" size={20} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!canScrollNext}
        aria-label="Next slide"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight className="text-light" size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}
