import { Linkedin, Instagram, Github, Mail } from "lucide-react";
import { HoverCard } from "../HoverCard";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const LINKS: SocialLink[] = [
  {
    icon: <Linkedin size={32} strokeWidth={1.5} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hshardik",
  },
  {
    icon: <Instagram size={32} strokeWidth={1.5} />,
    label: "Instagram",
    href: "https://www.instagram.com/herzliche_mann",
  },
  {
    icon: <Github size={32} strokeWidth={1.5} />,
    label: "GitHub",
    href: "https://github.com/hshardik",
  },
  {
    icon: <Mail size={32} strokeWidth={1.5} />,
    label: "Gmail",
    href: "mailto:hs.hardikshukla@gmail.com",
  },
];

export function ContactSection() {
  return (
    <section className="w-full pb-16">
      {/* Hero */}
      <div className="flex flex-wrap gap-6 items-start w-full py-8 mb-6">
        <div className="flex-1 min-w-[240px]">
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "64px", fontWeight: 700, color: "#1e1e1e", lineHeight: "1" }}>
            Connect
          </p>
        </div>
        <p className="flex-1 min-w-[280px]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "28px", fontWeight: 400, color: "#757575", lineHeight: "1.6" }}>
          I'm always open to new opportunities and collaborations. Whether you're looking to start a project or just want to chat, feel free to reach out.
        </p>
      </div>

      {/* 2×2 social link grid */}
      <div className="grid grid-cols-2 gap-6">
        {LINKS.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline"
          >
            <HoverCard className="w-full flex items-center justify-center gap-5 px-6 py-5 cursor-pointer">
              <span style={{ color: "#1e1e1e" }}>{icon}</span>
              <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "22px", fontWeight: 400, color: "#1e1e1e" }}>
                {label}
              </span>
            </HoverCard>
          </a>
        ))}
      </div>
    </section>
  );
}
