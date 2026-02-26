import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EmblaCarousel from "./EmblaCarousel";

vi.mock("embla-carousel-react", () => {
  const mockApi = {
    scrollSnapList: () => [0, 1],
    selectedScrollSnap: () => 0,
    canScrollPrev: () => false,
    canScrollNext: () => true,
    scrollPrev: vi.fn(),
    scrollNext: vi.fn(),
    scrollTo: vi.fn(),
    on: vi.fn(),
    off: vi.fn(),
    rootNode: () => document.createElement("div"),
  };

  return {
    default: () => [vi.fn(), mockApi],
  };
});

describe("EmblaCarousel", () => {
  it("renders slides correctly", () => {
    const slides = [
      { id: 1, url: "img1.jpg", title: "Slide 1" },
      { id: 2, url: "img2.jpg", title: "Slide 2" },
    ];

    render(<EmblaCarousel slides={slides} />);

    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });
});
