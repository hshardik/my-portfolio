import { PageTransition } from "../components/PageTransition";
import { ExperienceSection } from "../components/sections/ExperienceSection";

export function ExperiencePage() {
  return (
    <PageTransition>
      <div className="max-w-[1120px] mx-auto px-8 pt-32 pb-16">
        <ExperienceSection />
      </div>
    </PageTransition>
  );
}
