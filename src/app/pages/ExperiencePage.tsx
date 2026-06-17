import { PageTransition } from "../components/PageTransition";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { usePageTitle } from "../hooks/usePageTitle";

export function ExperiencePage() {
  usePageTitle("Experience");
  return (
    <PageTransition>
      <div className="max-w-[1120px] mx-auto px-8 pt-32 pb-16">
        <ExperienceSection />
      </div>
    </PageTransition>
  );
}
