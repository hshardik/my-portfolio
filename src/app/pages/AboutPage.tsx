import { PageTransition } from "../components/PageTransition";
import { AboutSection } from "../components/sections/AboutSection";

export function AboutPage() {
  return (
    <PageTransition>
      <div className="max-w-[1120px] mx-auto px-8 pt-32 pb-16">
        <AboutSection />
      </div>
    </PageTransition>
  );
}
