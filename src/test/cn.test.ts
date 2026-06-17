import { describe, it, expect } from "vitest";
import { cn } from "@/app/components/ui/utils";

describe("cn", () => {
  it("returns a single class unchanged", () => {
    expect(cn("foo")).toBe("foo");
  });

  it("joins multiple classes", () => {
    expect(cn("foo", "bar", "baz")).toBe("foo bar baz");
  });

  it("ignores falsy values", () => {
    expect(cn("foo", false, undefined, null, "bar")).toBe("foo bar");
  });

  it("resolves Tailwind conflicts — last wins", () => {
    expect(cn("p-4", "p-8")).toBe("p-8");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("handles conditional object syntax", () => {
    expect(cn({ "font-bold": true, "font-normal": false })).toBe("font-bold");
  });

  it("returns empty string for no args", () => {
    expect(cn()).toBe("");
  });
});
