import { PageTransition } from "../components/PageTransition";
import { ContactSection } from "../components/sections/ContactSection";
import { usePageTitle } from "../hooks/usePageTitle";

export function ContactPage() {
  usePageTitle("Contact");
  return (
    <PageTransition>
      <div className="max-w-[1120px] mx-auto px-8 pt-32 pb-16">
        <ContactSection />
      </div>
    </PageTransition>
  );
}
