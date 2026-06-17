import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="w-full pt-8 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-wrap gap-6 items-start w-full"
      >
        <p className="flex-1 min-w-[320px]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "64px", color: "#1e1e1e", lineHeight: "1" }}>
          <span style={{ fontWeight: 400 }}>Hi, I'm </span>
          <span style={{ fontWeight: 700 }}>Hardik</span>
        </p>
        <p className="flex-1 min-w-[320px]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "32px", color: "#757575", lineHeight: "1.6" }}>
          a{" "}
          <span style={{ fontWeight: 700, color: "#1e1e1e" }}>Product Manager</span>{" "}
          based in{" "}
          <span style={{ fontWeight: 700, color: "#1e1e1e" }}>Boston</span>.{" "}
          <span style={{ fontWeight: 400 }}>With over </span>
          <span style={{ fontWeight: 700, color: "#1e1e1e" }}>3 years of experience</span>
          <span style={{ fontWeight: 400 }}>, I specialize in creating user-friendly AI powered products that solve real-world problems.</span>
        </p>
      </motion.div>
    </section>
  );
}
// test
