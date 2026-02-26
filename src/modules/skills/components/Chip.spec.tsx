import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Chip from "./Chip";

describe("Chip", () => {
  const label = "JavaScript";
  const color = "rgb(255, 183, 77)";

  it("renders the label text", () => {
    render(<Chip label={label} color={color} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("applies the correct border color", () => {
    render(<Chip label={label} color={color} />);
    const chip = screen.getByText(label);
    expect(chip).toHaveStyle(`border-color: ${color}`);
  });

  it("has the correct classes", () => {
    render(<Chip label={label} color={color} />);
    const chip = screen.getByText(label);
    expect(chip.className).toContain("test-light");
    expect(chip.className).toContain("border");
    expect(chip.className).toContain("rounded-4xl");
    expect(chip.className).toContain("px-2");
    expect(chip.className).toContain("py-1.5");
  });
});
