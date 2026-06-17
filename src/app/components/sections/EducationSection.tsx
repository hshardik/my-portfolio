import { HoverCard } from "../HoverCard";

interface EducationItem {
  emoji: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const EDUCATION: EducationItem[] = [
  {
    emoji: "🎓",
    degree: "MBA in Finance and Product Management",
    institution: "Brandeis University, School of Business and Economics",
    period: "2024 – 2026",
    description: "Studied finance and product management principles, graduating with honors and distinction, recognized as a prestigious award winner and selected student speaker.",
  },
  {
    emoji: "👨🏻‍🎓",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Texas at Arlington",
    period: "2018 – 2022",
    description: "Graduated with a strong foundation in computer science principles, including algorithms, data structures, and software engineering practices.",
  },
];

export function EducationSection() {
  return (
    <section className="w-full">
      <h2 style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", fontWeight: 600, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "24px" }}>
        Education
      </h2>
      <div className="flex flex-wrap gap-6">
        {EDUCATION.map((item) => (
          <HoverCard key={item.degree} className="flex-1 min-w-[280px] p-8 flex flex-col gap-4">
            <span style={{ fontSize: "40px", lineHeight: 1 }}>{item.emoji}</span>
            <div>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "20px", fontWeight: 700, color: "#1e1e1e", marginBottom: "4px" }}>
                {item.degree}
              </p>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "16px", fontWeight: 400, color: "#1e1e1e" }}>
                {item.institution}
              </p>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", fontWeight: 400, color: "#aaa", marginTop: "4px" }}>
                {item.period}
              </p>
            </div>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "16px", fontWeight: 400, color: "#757575", lineHeight: "1.7" }}>
              {item.description}
            </p>
          </HoverCard>
        ))}
      </div>
    </section>
  );
}
