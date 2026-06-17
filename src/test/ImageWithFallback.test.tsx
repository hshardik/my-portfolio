import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

describe("ImageWithFallback", () => {
  it("renders an img with the given src and alt", () => {
    render(<ImageWithFallback src="/photo.jpg" alt="A photo" />);
    const img = screen.getByRole("img", { name: "A photo" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/photo.jpg");
  });

  it("passes className to the img element", () => {
    render(<ImageWithFallback src="/photo.jpg" alt="photo" className="w-full h-full" />);
    expect(screen.getByRole("img", { name: "photo" })).toHaveClass("w-full", "h-full");
  });

  it("shows fallback UI when image fails to load", () => {
    render(<ImageWithFallback src="/bad.jpg" alt="Broken" />);
    const img = screen.getByRole("img", { name: "Broken" });
    fireEvent.error(img);

    expect(screen.queryByRole("img", { name: "Broken" })).not.toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Error loading image" })).toBeInTheDocument();
  });

  it("stores original src on the fallback element", () => {
    render(<ImageWithFallback src="/bad.jpg" alt="Broken" />);
    fireEvent.error(screen.getByRole("img", { name: "Broken" }));
    expect(screen.getByRole("img", { name: "Error loading image" })).toHaveAttribute(
      "data-original-url",
      "/bad.jpg"
    );
  });

  it("applies className to the fallback container div, not img", () => {
    const { container } = render(
      <ImageWithFallback src="/bad.jpg" alt="Broken" className="custom-class" />
    );
    fireEvent.error(screen.getByRole("img", { name: "Broken" }));
    const wrapper = container.querySelector(".custom-class");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.tagName).toBe("DIV");
  });
});
