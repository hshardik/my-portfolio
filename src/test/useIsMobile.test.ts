import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "@/app/components/ui/use-mobile";

const MOBILE_WIDTH = 767;
const DESKTOP_WIDTH = 1024;

function mockWindowWidth(width: number) {
  Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: width });
}

function makeMql(matches: boolean) {
  const listeners: Array<() => void> = [];
  return {
    matches,
    addEventListener: vi.fn((_: string, cb: () => void) => listeners.push(cb)),
    removeEventListener: vi.fn(),
    _fire: () => listeners.forEach((cb) => cb()),
  };
}

beforeEach(() => {
  mockWindowWidth(DESKTOP_WIDTH);
});

describe("useIsMobile", () => {
  it("returns false on desktop (≥768px)", () => {
    mockWindowWidth(DESKTOP_WIDTH);
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn(() => makeMql(false)),
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("returns true on mobile (<768px)", () => {
    mockWindowWidth(MOBILE_WIDTH);
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn(() => makeMql(true)),
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("updates when matchMedia fires a change event", () => {
    mockWindowWidth(DESKTOP_WIDTH);
    const mql = makeMql(false);
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn(() => mql),
    });

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      mockWindowWidth(MOBILE_WIDTH);
      mql._fire();
    });

    expect(result.current).toBe(true);
  });

  it("cleans up the matchMedia listener on unmount", () => {
    const mql = makeMql(false);
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn(() => mql),
    });

    const { unmount } = renderHook(() => useIsMobile());
    unmount();
    expect(mql.removeEventListener).toHaveBeenCalledOnce();
  });
});
