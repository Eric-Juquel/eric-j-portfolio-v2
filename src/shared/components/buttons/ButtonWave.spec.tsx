import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { withRouter } from "@/tests/testing";
import ButtonWave from "./ButtonWave";

describe("ButtonWave component", () => {
  it("renders the button with correct text and link", () => {
    const Wrapper = withRouter();

    render(
      <Wrapper>
        <ButtonWave text="Contactez-nous" />
      </Wrapper>,
    );

    const link = screen.getByRole("link", { name: /contactez-nous/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/contact");
  });
});
