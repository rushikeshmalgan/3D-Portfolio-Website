import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements, education } from "../constants";

// ─── Achievement Badge Card ───────────────────────────────────────────────────
const BadgeCard = ({ title, subtitle, icon, color, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.7)}
    className="badge-card flex-1 min-w-[220px]"
  >
    <span className="text-3xl">{icon}</span>
    <div>
      <p className="font-bold text-[15px]" style={{ color: "var(--text-primary)" }}>
        {title}
      </p>
      <p className="text-[12px] mt-0.5" style={{ color: "var(--text-muted)" }}>
        {subtitle}
      </p>
    </div>
  </motion.div>
);

// ─── Education Card ───────────────────────────────────────────────────────────
const EducationCard = ({ degree, institution, date, cgpa, icon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-6"
    style={{
      background: "var(--bg-card)",
      border: "1px solid rgba(47,156,149,0.3)",
      boxShadow: "0 4px 24px rgba(31,99,99,0.25)",
    }}
  >
    <div
      className="text-4xl w-16 h-16 flex items-center justify-center rounded-xl flex-shrink-0"
      style={{ background: "rgba(47,156,149,0.15)" }}
    >
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="text-[18px] font-bold" style={{ color: "var(--text-primary)" }}>
        {degree}
      </h4>
      <p className="text-[15px] font-semibold mt-1" style={{ color: "var(--accent-secondary)" }}>
        {institution}
      </p>
      <div className="flex flex-wrap gap-4 mt-2">
        <span className="text-[13px]" style={{ color: "var(--text-muted)" }}>
          📅 {date}
        </span>
        <span
          className="text-[13px] font-semibold px-2 py-0.5 rounded-md"
          style={{
            background: "rgba(217,203,146,0.15)",
            color: "var(--accent-primary)",
            border: "1px solid rgba(217,203,146,0.35)",
          }}
        >
          CGPA {cgpa}
        </span>
      </div>
    </div>
  </motion.div>
);

// ─── Combined Section ─────────────────────────────────────────────────────────
const Achievements = () => {
  return (
    <>
      {/* ── Leadership & Achievements ── */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} style={{ color: "var(--accent-secondary)" }}>
          Recognition & Roles
        </p>
        <h2 className={styles.sectionHeadText} style={{ color: "var(--text-primary)" }}>
          Achievements.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-4">
        {achievements.map((item, index) => (
          <BadgeCard key={item.title} index={index} {...item} />
        ))}
      </div>

      {/* ── Education ── */}
      <motion.div variants={textVariant()} className="mt-16">
        <p className={styles.sectionSubText} style={{ color: "var(--accent-secondary)" }}>
          Academic Background
        </p>
        <h2 className={styles.sectionHeadText} style={{ color: "var(--text-primary)" }}>
          Education.
        </h2>
      </motion.div>

      <div>
        {education.map((edu, index) => (
          <EducationCard key={edu.institution} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
