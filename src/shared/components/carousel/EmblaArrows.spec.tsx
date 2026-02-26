import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import EmblaArrows from "./EmblaArrows";

describe("EmblaArrows", () => {
  it("calls onPrev when clicking previous", async () => {
    const user = userEvent.setup();
    const onPrev = vi.fn();
    const onNext = vi.fn();

    render(
      <EmblaArrows
        canScrollPrev
        canScrollNext
        onPrev={onPrev}
        onNext={onNext}
      />,
    );

    const prevButton = screen.getByRole("button", { name: /previous slide/i });
    await user.click(prevButton);

    expect(onPrev).toHaveBeenCalledTimes(1);
  });

  it("disables button when cannot scroll", () => {
    render(
      <EmblaArrows
        canScrollPrev={false}
        canScrollNext={false}
        onPrev={() => {}}
        onNext={() => {}}
      />,
    );

    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });
});
