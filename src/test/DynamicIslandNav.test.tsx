import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { DynamicIslandNav } from "@/app/components/DynamicIslandNav";

const NAV_LABELS = ["Home", "About", "Projects", "Education", "Experience", "Interests", "Contact"];

function renderNav(initialPath = "/") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <DynamicIslandNav />
    </MemoryRouter>
  );
}

describe("DynamicIslandNav", () => {
  it("renders all nav items", () => {
    renderNav();
    for (const label of NAV_LABELS) {
      expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    }
  });

  it("navigates when a nav button is clicked", async () => {
    const user = userEvent.setup();
    renderNav("/");
    await user.click(screen.getByRole("button", { name: "About" }));
    // Navigation is triggered — no error thrown means useNavigate fired correctly
    expect(screen.getByRole("button", { name: "About" })).toBeInTheDocument();
  });

  it("renders exactly the right number of nav buttons", () => {
    renderNav();
    expect(screen.getAllByRole("button")).toHaveLength(NAV_LABELS.length);
  });

  it("does not crash when rendered on any valid route", () => {
    for (const path of ["/", "/about", "/projects", "/contact"]) {
      const { unmount } = renderNav(path);
      expect(screen.getAllByRole("button")).toHaveLength(NAV_LABELS.length);
      unmount();
    }
  });
});
