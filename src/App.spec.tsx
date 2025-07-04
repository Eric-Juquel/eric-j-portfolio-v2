import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { describe, it, expect, beforeEach } from "vitest";
import { withRouter } from "./tests/testing";

describe("App routing", () => {
  beforeEach(() => {
    // Destktop
    window.innerWidth = 1200;
    window.dispatchEvent(new Event("resize"));
  });

  it("renders the home page by default", () => {
    const Wrapper = withRouter({ initialEntries: ["/"] });

    render(
      <Wrapper>
        <App />
      </Wrapper>
    );

    const nav = screen.getByTestId("desktop-navigation");

    const homeLink = within(nav).getByTestId("navigation-link-to-home");
    const achievementsLink = within(nav).getByTestId(
      "navigation-link-to-achievements"
    );
    const skillsLink = within(nav).getByTestId("navigation-link-to-skills");
    const contactLink = within(nav).getByTestId("navigation-link-to-contact");

    expect(homeLink).toBeInTheDocument();
    expect(achievementsLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
