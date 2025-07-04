import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../tests/i18nForTests";
import { withRouter } from "../../../tests/testing";

// Mock global de showModal pour éviter l'erreur JSDOM
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn();
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe("NotFound component", () => {
  it("renders the modal with translated content and calls showModal", () => {
    const Wrapper = withRouter();

    render(
      <Wrapper>
        <I18nextProvider i18n={i18n}>
          <NotFound />
        </I18nextProvider>
      </Wrapper>
    );

    expect(screen.getByText(/nftitle/i)).toBeInTheDocument();
    expect(screen.getByText(/nfdescript/i)).toBeInTheDocument();

    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });
});
