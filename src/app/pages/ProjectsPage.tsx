import { PageTransition } from "../components/PageTransition";
import { ProjectsSection } from "../components/sections/ProjectsSection";

export function ProjectsPage() {
  return (
    <PageTransition>
      <div className="max-w-[1120px] mx-auto px-8 pt-32 pb-16">
        <ProjectsSection />
      </div>
    </PageTransition>
  );
}
