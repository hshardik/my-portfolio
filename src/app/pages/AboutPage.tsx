import { PageTransition } from "../components/PageTransition";
import { AboutSection } from "../components/sections/AboutSection";
import { usePageTitle } from "../hooks/usePageTitle";

export function AboutPage() {
  usePageTitle("About");
  return (
    <PageTransition>
      <div className="max-w-[1120px] mx-auto px-8 pt-32 pb-16">
        <AboutSection />
      </div>
    </PageTransition>
  );
}
