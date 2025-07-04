import type { ReactNode } from "react";
import { MemoryRouter, type MemoryRouterProps } from "react-router-dom";

/**
 * A noop function that does nothing.
 */
export function noop() {
  /* do nothing */
}

type RouterParams = {
  initialEntries?: MemoryRouterProps["initialEntries"];
};

export function withRouter(params: RouterParams = {}) {
  return ({ children }: { readonly children: ReactNode }) => {
    return (
      <MemoryRouter initialEntries={params.initialEntries}>
        {children}
      </MemoryRouter>
    );
  };
}
