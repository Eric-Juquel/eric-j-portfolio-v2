import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SkillBar, { type SkillBarProps } from "./SkillBar";

describe("SkillBar", () => {
  const props: SkillBarProps = {
    label: "React",
    value: 80,
    color: "rgb(77, 182, 172)",
  };

  it("renders the label and initial value text", () => {
    render(<SkillBar {...props} />);
    expect(screen.getByText(props.label)).toBeInTheDocument();

    const valueEl = screen.getByText((content) => content.includes("0%"));
    expect(valueEl).toBeInTheDocument();
  });

  it("animates the width after timeout", () => {
    vi.useFakeTimers();
    render(<SkillBar {...props} />);
    const bar = screen.getByText(props.label).parentElement?.nextElementSibling
      ?.firstChild;
    expect(bar).toBeTruthy();

    expect(bar).toHaveStyle("width: 0%");

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(bar).toHaveStyle(`width: ${props.value}%`);
    expect(bar).toHaveStyle(`background: ${props.color}`);

    vi.useRealTimers();
  });
});
