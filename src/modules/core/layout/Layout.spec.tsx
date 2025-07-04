import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { describe, it, expect } from "vitest";

vi.mock("../Languages", () => ({
  default: () => <div data-testid="languages">Languages</div>,
}));

vi.mock("../navigation/Burger", () => ({
  default: () => <div data-testid="burger">Burger</div>,
}));

vi.mock("../navigation/SideMenu", () => ({
  default: () => <div data-testid="sidemenu">SideMenu</div>,
}));

describe("Layout component", () => {
  it("renders navigation components and children", () => {
    render(
      <Layout>
        <div data-testid="child-content">Page Content</div>
      </Layout>
    );

    expect(screen.getByTestId("languages")).toBeInTheDocument();
    expect(screen.getByTestId("burger")).toBeInTheDocument();
    expect(screen.getByTestId("sidemenu")).toBeInTheDocument();

    expect(screen.getByTestId("desktop-navigation")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-navigation")).toBeInTheDocument();

    expect(screen.getByTestId("child-content")).toBeInTheDocument();
  });
});
