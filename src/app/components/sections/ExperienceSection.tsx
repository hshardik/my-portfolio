import { HoverCard } from "../HoverCard";

interface ExperienceItem {
  emoji: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    emoji: "🏗️",
    role: "Product Manager, AI",
    company: "Swivu",
    period: "May 2025 – Present",
    description: "Leading 0-to-1 product launches  for a construction tech startup by turning customer pain points into practical AI-enabled workflows like job-site photo intelligence, inspection workflows, and  AI systems that help teams make faster, more reliable decisions.",
    tags: ["Data Analytics", "Design ", "User Research", "AI/ML", "SaaS","SQL", "Python"],
  },
  {
    emoji: "💻",
    role: "Software Engineer",
    company: "Amazon",
    period: "2022 – 2023",
    description: "Worked for AlexaforApps iOS to bring conversational AI to third-party apps. Led the design and development of Chat with Alexa that increased user engagement by 25%. Collaborated with cross-functional teams to define product requirements and deliver a seamless user experience.",
    tags: ["Conversational AI", "Mobile", "iOS", "SwiftUI", "Microservices", "AWS"],
  },
  {
    emoji: "💡",
    role: "Technical Product Manager",
    company: "CodePath",
    period: "2021 – 2022",
    description: "Owned roadmap and delivery for Android learning products serving 200+ students, synthesized recurring student pain points into roadmap improvements across UI/UX, REST APIs, cloud messaging, and databases; used usage patterns and support data to defend prioritization decisions.",
    tags: ["Agile/Scrum", "Android", "JAVA", "Kotlin", "SQL", "Firebase"],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span
      className="px-3 py-1 rounded-full text-xs"
      style={{ background: "#f0f0f0", color: "#1e1e1e", fontFamily: "'Roboto', sans-serif", fontWeight: 600 }}
    >
      {label}
    </span>
  );
}

export function ExperienceSection() {
  return (
    <section className="w-full">
      <h2 style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", fontWeight: 600, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "24px" }}>
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((item) => (
          <HoverCard key={item.company} className="w-full p-8 flex gap-8 items-start">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#f5f5f5", fontSize: "28px" }}
            >
              {item.emoji}
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "22px", fontWeight: 700, color: "#1e1e1e" }}>
                    {item.role}
                  </span>
                  <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "18px", fontWeight: 400, color: "#757575" }}>
                    {" "}· {item.company}
                  </span>
                </div>
                <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", fontWeight: 400, color: "#aaa" }}>
                  {item.period}
                </span>
              </div>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "16px", fontWeight: 400, color: "#757575", lineHeight: "1.7" }}>
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {item.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
            </div>
          </HoverCard>
        ))}
      </div>
    </section>
  );
}
