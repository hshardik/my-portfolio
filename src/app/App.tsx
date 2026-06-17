import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import { DynamicIslandNav } from "./components/DynamicIslandNav";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { EducationPage } from "./pages/EducationPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { InterestsPage } from "./pages/InterestsPage";
import { ContactPage } from "./pages/ContactPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/interests" element={<InterestsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full" style={{ background: "#f5f5f5" }}>
        <DynamicIslandNav />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
