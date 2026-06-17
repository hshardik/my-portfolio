import { motion } from "motion/react";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      className={`bg-[#fffffe] rounded-[20px] border border-[#e5e5e5] ${className}`}
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 12px 40px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.08)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
