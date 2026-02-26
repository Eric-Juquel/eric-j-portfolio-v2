/** biome-ignore-all lint/suspicious/noExplicitAny: Mock object requires any type */
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useEmblaNavigation } from "./useEmblaNavigation";

describe("useEmblaNavigation", () => {
  it("updates scroll state correctly", () => {
    const mockApi = {
      canScrollPrev: vi.fn(() => true),
      canScrollNext: vi.fn(() => false),
      on: vi.fn(),
      off: vi.fn(),
      scrollPrev: vi.fn(),
      scrollNext: vi.fn(),
    } as any;

    const { result } = renderHook(() => useEmblaNavigation(mockApi));

    expect(result.current.canScrollPrev).toBe(true);
    expect(result.current.canScrollNext).toBe(false);
  });
});
