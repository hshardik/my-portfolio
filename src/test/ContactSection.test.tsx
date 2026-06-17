import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContactSection } from "@/app/components/sections/ContactSection";

describe("ContactSection", () => {
  it("renders the section heading", () => {
    render(<ContactSection />);
    expect(screen.getByText("Connect")).toBeInTheDocument();
  });

  it("renders all four social links", () => {
    render(<ContactSection />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /gmail/i })).toBeInTheDocument();
  });

  it("links point to correct destinations", () => {
    render(<ContactSection />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/hshardik"
    );
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/hshardik"
    );
    expect(screen.getByRole("link", { name: /gmail/i })).toHaveAttribute(
      "href",
      "mailto:hs.hardikshukla@gmail.com"
    );
    expect(screen.getByRole("link", { name: /instagram/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/herzliche_mann"
    );
  });

  it("all external links have rel=noopener noreferrer", () => {
    render(<ContactSection />);
    const links = screen.getAllByRole("link");
    for (const link of links) {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("all links open in a new tab", () => {
    render(<ContactSection />);
    const links = screen.getAllByRole("link");
    for (const link of links) {
      expect(link).toHaveAttribute("target", "_blank");
    }
  });

  it("renders exactly 4 links", () => {
    render(<ContactSection />);
    expect(screen.getAllByRole("link")).toHaveLength(4);
  });
});
