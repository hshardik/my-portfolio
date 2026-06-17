import { HoverCard } from "../HoverCard";

interface Interest {
  emoji: string;
  label: string;
  description: string;
}

const INTERESTS: Interest[] = [
  { emoji: "🏋🏻‍♂️", label: "Exercise", description: "I enjoy calisthenics and weight training to stay fit and energized." },
  { emoji: "🎵", label: "Music", description: "Indie folk and lo-fi hip-hop keep me focused during long work sessions." },
  { emoji: "🏎️", label: "Travel", description: "I love cars, fun roadtrips and exploring new places." },
  { emoji: "🧘", label: "Mindfulness", description: "Daily meditation helps me approach problems with clarity and calm." },
  { emoji: "⛰️", label: "Hiking", description: "Hiking brings me peace and inspiration, i have been to 12/63 National Parks." },
  { emoji: "👨🏻‍🍳", label: "Cooking", description: "Experimenting in the kitchen, creating my own fusions and preparing elaborate meals from scratch." },
];

export function InterestsSection() {
  return (
    <section className="w-full">
      <h2 style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", fontWeight: 600, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "24px" }}>
        Interests
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {INTERESTS.map((item) => (
          <HoverCard key={item.label} className="p-6 flex flex-col gap-3">
            <span style={{ fontSize: "36px", lineHeight: 1 }}>{item.emoji}</span>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "18px", fontWeight: 700, color: "#1e1e1e" }}>
              {item.label}
            </p>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", fontWeight: 400, color: "#757575", lineHeight: "1.6" }}>
              {item.description}
            </p>
          </HoverCard>
        ))}
      </div>
    </section>
  );
}
