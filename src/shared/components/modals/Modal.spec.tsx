import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Modal, { type ModalContent } from "./Modal";

// Mock de useNavigate
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("Modal component", () => {
  const baseContent: ModalContent = {
    title: "Titre test",
    description: "Description test",
  };

  it("renders title and description", () => {
    const ref = React.createRef<HTMLDialogElement>();
    render(
      <MemoryRouter>
        <Modal ref={ref} modalContent={baseContent} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Titre test")).toBeInTheDocument();
    expect(screen.getByText("Description test")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sortir/i, hidden: true }),
    ).toBeInTheDocument();
  });

  it("renders download link if documentRef is provided", () => {
    const ref = React.createRef<HTMLDialogElement>();
    render(
      <MemoryRouter>
        <Modal
          ref={ref}
          modalContent={{
            ...baseContent,
            documentRef: "/dummy.pdf",
          }}
        />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", {
      name: /télecharger/i,
      hidden: true,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/dummy.pdf");
    expect(link).toHaveAttribute("download");
  });

  it("navigates to / when clicking 'Sortir' without documentRef", () => {
    const navigateMock = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(navigateMock);

    const ref = React.createRef<HTMLDialogElement>();
    render(
      <MemoryRouter>
        <Modal ref={ref} modalContent={baseContent} />
      </MemoryRouter>,
    );

    fireEvent.click(
      screen.getByRole("button", { name: /sortir/i, hidden: true }),
    );
    expect(navigateMock).toHaveBeenCalledWith("/");
  });
});
