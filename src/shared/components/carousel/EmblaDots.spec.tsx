import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EmblaDots from "./EmblaDots";

vi.mock("./useEmblaDots", () => ({
  useEmblaDots: () => ({
    selectedIndex: 1,
    scrollSnaps: [0, 1, 2],
    scrollTo: vi.fn(),
  }),
}));

describe("EmblaDots", () => {
  it("renders correct number of dots", () => {
    render(<EmblaDots emblaApi={undefined} />);

    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(3);
  });

  it("marks selected dot correctly", () => {
    render(<EmblaDots emblaApi={undefined} />);

    const selected = screen.getByRole("tab", { selected: true });
    expect(selected).toBeInTheDocument();
  });
});
