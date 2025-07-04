import { render, screen } from "@testing-library/react";
import ButtonWave from "./ButtonWave";
import { describe, it, expect } from "vitest";
import { withRouter } from "../../../../tests/testing"; // adapte le chemin selon ton projet

describe("ButtonWave component", () => {
  it("renders the button with correct text and link", () => {
    const Wrapper = withRouter();

    render(
      <Wrapper>
        <ButtonWave text="Contactez-nous" />
      </Wrapper>
    );

    const link = screen.getByRole("link", { name: /contactez-nous/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/contact");
  });
});
