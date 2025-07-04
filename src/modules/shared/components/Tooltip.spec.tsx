import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "./Tooltip";
import { describe, it, expect } from "vitest";

describe("Tooltip", () => {
  it("displays the tooltip text", () => {
    render(
      <Tooltip text="Tooltip text" place="top">
        <button>Hover me</button>
      </Tooltip>
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveTextContent("Tooltip text");
  });

  it("positions the tooltip above when place='top'", () => {
    render(
      <Tooltip text="Tooltip above" place="top">
        <span>Hover</span>
      </Tooltip>
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip.className).toContain("bottom-full");
    expect(tooltip.className).toContain("mb-2");
  });

  it("positions the tooltip below when place='bottom'", () => {
    render(
      <Tooltip text="Tooltip below" place="bottom">
        <span>Hover</span>
      </Tooltip>
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip.className).toContain("top-full");
    expect(tooltip.className).toContain("mt-2");
  });

  it("shows the tooltip on hover", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip text="Visible on hover" place="top">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByRole("button", { name: /hover me/i });
    const tooltip = screen.getByRole("tooltip");

    // Initially hidden (opacity-0)
    expect(tooltip.className).toContain("opacity-0");

    // Simulate hover
    await user.hover(button);

    // Should become visible (opacity-100)
    expect(tooltip.className).toContain("opacity-100");
  });
});
