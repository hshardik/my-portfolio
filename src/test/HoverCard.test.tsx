import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HoverCard } from "@/app/components/HoverCard";

describe("HoverCard", () => {
  it("renders its children", () => {
    render(<HoverCard>Hello world</HoverCard>);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("applies a custom className alongside the base styles", () => {
    const { container } = render(<HoverCard className="p-8 cursor-pointer">Content</HoverCard>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("p-8", "cursor-pointer");
    expect(card).toHaveClass("rounded-[20px]");
  });

  it("renders without a className prop without error", () => {
    const { container } = render(<HoverCard>Content</HoverCard>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders arbitrary nested elements", () => {
    render(
      <HoverCard>
        <h2>Title</h2>
        <p>Body</p>
      </HoverCard>
    );
    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
  });
});
