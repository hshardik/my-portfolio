import { ArrowRight } from "lucide-react";
import { HoverCard } from "../HoverCard";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgThumbnail from "../../../imports/Home-1/Knowslope.png";
import imgFrame from "../../../imports/Home-1/FieldRails.png";

function Tag({ label }: { label: string }) {
  return (
    <span
      className="px-4 py-1.5 rounded-full text-sm"
      style={{ background: "#f0f0f0", color: "#1e1e1e", fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: "14px" }}
    >
      {label}
    </span>
  );
}

function ProjectCardImage({ title, tags, image }: { title: string; tags: string[]; image: string }) {
  return (
    <HoverCard className="flex-1 min-w-[300px] flex flex-col gap-6 p-8 h-[400px]">
      <div className="flex items-center justify-between">
        <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "30px", fontWeight: 700, color: "#1e1e1e" }}>{title}</span>
        <div className="w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center flex-shrink-0">
          <ArrowRight size={18} color="#1e1e1e" />
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

function ProjectCardText({ title, emoji, description, tags }: { title: string; emoji: string; description: string; tags: string[] }) {
  return (
    <HoverCard className="flex-1 min-w-[300px] flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "30px", fontWeight: 700, color: "#1e1e1e" }}>{title}</span>
        <div className="w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center flex-shrink-0">
          <ArrowRight size={18} color="#1e1e1e" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span style={{ fontSize: "52px", lineHeight: 1 }}>{emoji}</span>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", fontWeight: 400, color: "#757575", lineHeight: "1.8" }}>
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => <Tag key={t} label={t} />)}
      </div>
    </HoverCard>
  );
}

export function ProjectsSection() {
  return (
    <section className="w-full">
      <h2 style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", fontWeight: 600, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "24px" }}>
        Projects
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-6">
          <ProjectCardImage
            title="Knowslope"
            tags={["Node.js", "React", "TypeScript", "PostgreSQL"]}
            image={imgThumbnail}
          />
          <ProjectCardText
            title="March Madness 2026"
            emoji="🏀"
            description= "A data-driven analysis of NCAA March Madness tournament performance (2008–2025) and prediction model for the 2026 tournament."
            tags={["Python", "Kaggle", "Machine Learning", "Data Visualization"]}
          />
        </div>
        <div className="flex flex-wrap gap-6">
          <ProjectCardText
            title="Benchmark Stock Portfolio"
            emoji="📈"
            description="A stock portfolio management tool that leverages the FRED Economic Data and historical return to create a balance portfolio with Markowitz mean-variance optimization and Black-Litterman model."
            tags={["R", "FRED", "Finance", "Stock Portfolio", "Data Analysis"]}
          />
          <ProjectCardImage
            title="FieldRails"
            tags={["Construction AI","Anthropic API", "Node.js", "React", "TypeScript"]}
            image={imgFrame}
          />
        </div>
      </div>
    </section>
  );
}
