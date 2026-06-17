import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTheme } from "@/app/hooks/useTheme";

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

const mockMatchMedia = (prefersDark: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: prefersDark && query === "(prefers-color-scheme: dark)",
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
};

beforeEach(() => {
  localStorageMock.clear();
  mockMatchMedia(false);
});

describe("useTheme", () => {
  it("defaults to light when no storage and OS is light", () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");
  });

  it("defaults to dark when no storage and OS prefers dark", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("dark");
  });

  it("reads saved theme from localStorage", () => {
    localStorageMock.setItem("portfolio-theme", "dark");
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("dark");
  });

  it("ignores invalid localStorage values and falls back to OS preference", () => {
    localStorageMock.setItem("portfolio-theme", "banana");
    mockMatchMedia(false);
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");
  });

  it("toggleTheme switches light → dark", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe("dark");
  });

  it("toggleTheme switches dark → light", () => {
    localStorageMock.setItem("portfolio-theme", "dark");
    const { result } = renderHook(() => useTheme());
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe("light");
  });

  it("persists theme to localStorage after toggle", () => {
    const { result } = renderHook(() => useTheme());
    act(() => result.current.toggleTheme());
    expect(localStorageMock.getItem("portfolio-theme")).toBe("dark");
  });

  it("persists initial theme to localStorage on mount", () => {
    renderHook(() => useTheme());
    expect(localStorageMock.getItem("portfolio-theme")).toBe("light");
  });
});
