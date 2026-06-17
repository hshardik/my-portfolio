import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Education", path: "/education" },
  { label: "Experience", path: "/experience" },
  { label: "Interests", path: "/interests" },
  { label: "Contact", path: "/contact" },
];

export function DynamicIslandNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  const activePath = location.pathname;

  return (
    <motion.div
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      animate={{ scale: isExpanded ? 1.03 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div
        className="relative flex items-center gap-1 px-2 py-2 rounded-full"
        style={{
          background: "rgba(30, 30, 30, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {NAV_ITEMS.map(({ label, path }) => {
          const isActive = activePath === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="relative px-5 py-2.5 rounded-full cursor-pointer outline-none"
              style={{
                color: isActive ? "#1e1e1e" : "rgba(255,255,255,0.65)",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "15px",
                fontWeight: isActive ? 600 : 400,
                zIndex: 1,
                transition: "color 0.2s",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="bubble"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
