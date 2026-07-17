import { type RefObject, useEffect, useState } from "react";

const VIEWPORT_THRESHOLD = 0.6;
const ACTIVE_HOLD_MS = 2000;

/**
 * On touch/no-hover devices, plays the "hover" state once when the element
 * first scrolls into view, then reverts it — since :hover never fires there.
 * No-ops on devices that support real hover.
 */
export function useAutoHoverOnMobile(ref: RefObject<Element | null>) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      typeof window.matchMedia !== "function" ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    if (window.matchMedia("(hover: hover)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setActive(true);
        window.setTimeout(() => setActive(false), ACTIVE_HOLD_MS);
        observer.disconnect();
      },
      { threshold: VIEWPORT_THRESHOLD },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return active;
}
