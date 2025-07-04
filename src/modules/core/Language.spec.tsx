import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Languages from "./Languages";
import { describe, it, expect, beforeEach } from "vitest";
import { I18nextProvider } from "react-i18next";
import i18n from "../../tests/i18nForTests";

describe("Languages component", () => {
  beforeEach(() => {
    i18n.changeLanguage("en"); // reset to English before each test
  });

  it("renders both language buttons", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Languages />
      </I18nextProvider>
    );

    expect(screen.getByRole("button", { name: "FR" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "EN" })).toBeInTheDocument();
  });

  it("changes language to French when clicking FR", async () => {
    const user = userEvent.setup();
    render(
      <I18nextProvider i18n={i18n}>
        <Languages />
      </I18nextProvider>
    );

    await user.click(screen.getByRole("button", { name: "FR" }));
    expect(i18n.language).toBe("fr");
  });

  it("changes language to English when clicking EN", async () => {
    const user = userEvent.setup();
    i18n.changeLanguage("fr"); // start in French

    render(
      <I18nextProvider i18n={i18n}>
        <Languages />
      </I18nextProvider>
    );

    await user.click(screen.getByRole("button", { name: "EN" }));
    expect(i18n.language).toBe("en");
  });
});
