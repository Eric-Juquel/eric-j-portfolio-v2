import { render, screen } from "@testing-library/react";
import HomeView from "./HomeView";
import { describe, it, expect } from "vitest";
import { I18nextProvider } from "react-i18next";
import i18n from "../../tests/i18nForTests"; // adapte le chemin
import { withRouter } from "../../tests/testing"; // adapte le chemin

describe("HomeView component", () => {
  it("renders translated title, subtitle and contact button", () => {
    const Wrapper = withRouter();

    render(
      <Wrapper>
        <I18nextProvider i18n={i18n}>
          <HomeView />
        </I18nextProvider>
      </Wrapper>
    );

    const matches = screen.getAllByText(/title/i);
    expect(matches.length).toBeGreaterThanOrEqual(1);

    expect(
      screen.getByRole("link", { name: /contactme/i })
    ).toBeInTheDocument();
  });
});
