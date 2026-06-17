import { PageTransition } from "../components/PageTransition";
import { InterestsSection } from "../components/sections/InterestsSection";
import { usePageTitle } from "../hooks/usePageTitle";

export function InterestsPage() {
  usePageTitle("Interests");
  return (
    <PageTransition>
      <div className="max-w-[1120px] mx-auto px-8 pt-32 pb-16">
        <InterestsSection />
      </div>
    </PageTransition>
  );
}
