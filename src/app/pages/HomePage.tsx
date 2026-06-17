import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { HoverCard } from "../components/HoverCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ContactSection } from "../components/sections/ContactSection";
import { usePageTitle } from "../hooks/usePageTitle";
import imgPhoto1 from "../../imports/Home-1/Hardik_Home.jpg";
import imgThumbnail from "../../imports/Home-1/Knowslope.png";
import imgFrame from "../../imports/Home-1/FieldRails.png";

function Tag({ label }: { label: string }) {
  return (
    <span
      className="px-4 py-1.5 rounded-full"
      style={{ background: "#f0f0f0", color: "#1e1e1e", fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: "14px" }}
    >
      {label}
    </span>
  );
}

function ProjectCardImage({ title, tags, image, onClick }: { title: string; tags: string[]; image: string; onClick: () => void }) {
  return (
    <HoverCard className="flex-1 min-w-[280px] flex flex-col gap-5 p-8 h-[380px] cursor-pointer" onClick={onClick}>
      <div className="flex items-center justify-between">
        <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "28px", fontWeight: 700, color: "#1e1e1e" }}>{title}</span>
        <div className="w-9 h-9 rounded-full bg-[#f0f0f0] flex items-center justify-center flex-shrink-0">
          <ArrowRight size={16} color="#1e1e1e" />
        </div>
      </div>
      <div className="flex-1 rounded-2xl overflow-hidden min-h-0">
        <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => <Tag key={t} label={t} />)}
      </div>
    </HoverCard>
  );
}

function ProjectCardText({ title, emoji, description, tags, onClick }: { title: string; emoji: string; description: string; tags: string[]; onClick: () => void }) {
  return (
    <HoverCard className="flex-1 min-w-[280px] flex flex-col gap-5 p-8 cursor-pointer" onClick={onClick}>
      <div className="flex items-center justify-between">
        <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "28px", fontWeight: 700, color: "#1e1e1e" }}>{title}</span>
        <div className="w-9 h-9 rounded-full bg-[#f0f0f0] flex items-center justify-center flex-shrink-0">
          <ArrowRight size={16} color="#1e1e1e" />
        </div>
      </div>
      <span style={{ fontSize: "48px", lineHeight: 1 }}>{emoji}</span>
      <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "16px", fontWeight: 400, color: "#757575", lineHeight: "1.8", flex: 1 }}>
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => <Tag key={t} label={t} />)}
      </div>
    </HoverCard>
  );
}

export function HomePage() {
  usePageTitle("Hardik Shukla — Product, Data & Strategy", true);
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="max-w-[1120px] mx-auto px-8 pt-32 flex flex-col gap-16 pb-16">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap gap-6 items-start w-full py-8"
        >
          <p className="flex-1 min-w-[280px]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "64px", color: "#1e1e1e", lineHeight: "1" }}>
            <span style={{ fontWeight: 400 }}>Hi, I'm </span>
            <span style={{ fontWeight: 700 }}>Hardik</span>
          </p>
          <p className="flex-1 min-w-[280px]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "28px", color: "#757575", lineHeight: "1.6" }}>
            a{" "}
            <span style={{ fontWeight: 700, color: "#1e1e1e" }}>Product Manager</span>{" "}
            based in{" "}
            <span style={{ fontWeight: 700, color: "#1e1e1e" }}>Boston</span>.{" "}
            With over{" "}
            <span style={{ fontWeight: 700, color: "#1e1e1e" }}>3 years of experience</span>
            , I specialize in creating user-friendly digital products that solve real-world problems.
          </p>
        </motion.div>

        {/* About summary */}
        <div className="flex flex-wrap gap-6 items-start">
          <HoverCard className="flex-1 min-w-[300px] p-8 cursor-pointer" onClick={() => navigate("/about")}>
            <h3 style={{ fontFamily: "'Roboto', sans-serif", fontSize: "32px", fontWeight: 700, color: "#1e1e1e", marginBottom: "16px" }}>
              About Me
            </h3>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", color: "#757575", lineHeight: "1.8", marginBottom: "24px" }}>
              I'm a Product Manager with a passion for building AI-enabled products that solve complex operational challenges. My journey started 4 years ago, and since then, I've worked with startups and big-Tech to bring their product visions to life.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="flex items-center gap-2"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "15px", fontWeight: 600, color: "#1e1e1e", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              Read more <ArrowRight size={16} />
            </button>
          </HoverCard>

          <HoverCard className="w-[340px] min-w-[260px] h-[340px] overflow-hidden p-0 flex-shrink-0">
            <ImageWithFallback
              src={imgPhoto1}
              alt="Hardik — Product Manager"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </HoverCard>
        </div>

        {/* Top 3 projects */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", fontWeight: 600, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Featured Projects
            </h2>
            <button
              onClick={() => navigate("/projects")}
              className="flex items-center gap-1"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", fontWeight: 600, color: "#1e1e1e", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              View all <ArrowRight size={14} />
            </button>
          </div>
          <div className="flex flex-wrap gap-6">
            <ProjectCardImage
              title="Knowslope"
              tags={["Node.js", "React", "TypeScript", "PostgreSQL"]}
              image={imgThumbnail}
              onClick={() => navigate("/projects")}
            />
            <ProjectCardText
              title="March-Madness"
              emoji="⛹🏻‍♂️🏀"
              description="A data-driven analysis of NCAA March Madness tournament performance (2008–2025) and prediction model for the 2026 tournament."
              tags={["Python", "Machine Learning", "NCAA"]}
              onClick={() => navigate("/projects")}
            />
            <ProjectCardImage
              title="FieldRails"
              tags={["AI/ML","Anthropic API", "Node.js", "React", "TypeScript"]}
              image={imgFrame}
              onClick={() => navigate("/projects")}
            />
          </div>
        </div>

        {/* Contact */}
        <ContactSection />
      </div>
    </PageTransition>
  );
}
