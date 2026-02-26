import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SkillParagraph from "./SkillParagraph";

describe("SkillParagraph", () => {
  const label = "Skills";
  const list = ["HTML5", "CSS3", "JavaScript"];

  it("renders the label text", () => {
    render(<SkillParagraph label={label} list={list} />);
    expect(screen.getByText(/Skills:/)).toBeInTheDocument();
  });

  it("renders all skills individually with the correct class", () => {
    render(<SkillParagraph label={label} list={list} />);

    list.forEach((skill) => {
      const skillElement = screen.getByText(skill);
      expect(skillElement).toBeInTheDocument();
      expect(skillElement.className).toContain("text-secondary");
    });
  });

  it("renders commas between skills outside the green span", () => {
    render(<SkillParagraph label={label} list={list} />);

    const paragraph = screen.getByText(/Skills:/).parentElement;
    expect(paragraph).toBeTruthy();

    expect(paragraph?.textContent).toContain("HTML5, CSS3, JavaScript.");

    const spans = paragraph?.querySelectorAll("span.text-secondary");
    spans?.forEach((span) => {
      expect(span.textContent).not.toContain(",");
    });
  });
});
