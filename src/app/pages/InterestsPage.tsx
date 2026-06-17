import { PageTransition } from "../components/PageTransition";
import { InterestsSection } from "../components/sections/InterestsSection";

export function InterestsPage() {
  return (
    <PageTransition>
      <div className="max-w-[1120px] mx-auto px-8 pt-32 pb-16">
        <InterestsSection />
      </div>
    </PageTransition>
  );
}
