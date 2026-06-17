import { PageTransition } from "../components/PageTransition";
import { EducationSection } from "../components/sections/EducationSection";
import { usePageTitle } from "../hooks/usePageTitle";

export function EducationPage() {
  usePageTitle("Education");
  return (
    <PageTransition>
      <div className="max-w-[1120px] mx-auto px-8 pt-32 pb-16">
        <EducationSection />
      </div>
    </PageTransition>
  );
}
