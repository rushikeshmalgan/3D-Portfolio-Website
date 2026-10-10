import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { profile } from "../constants";
import { textVariant } from "../utils/motion";

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 1, delay: 0.2 },
  },
};

const slideFromBottom = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1, delay: 0.4 },
  },
};

const AboutMe = () => {
  return (
    <>
      {/* Section heading */}
      <motion.div variants={textVariant()}>
        <p
          className={styles.sectionSubText}
          style={{ color: "var(--accent-secondary)" }}
        >
          Who I Am
        </p>
        <h2
          className={styles.sectionHeadText}
          style={{ color: "var(--accent-primary)" }}
        >
          About Me.
        </h2>
      </motion.div>

      {/* Photo + Bio grid */}
      <div className="about-me-grid mt-12">
        {/* ── Photo ── */}
        <motion.div
          variants={slideFromLeft}
          className="about-me-photo flex flex-col items-center gap-4"
        >
          <div className="relative">
            {/* Glow ring */}
            <motion.div
              animate={{ scale: [1.06, 1.1, 1.06], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(217,203,146,0.5), rgba(47,156,149,0.5))",
                zIndex: 0,
                borderRadius: "50%",
              }}
            />
            <img
              src="/pp.webp"
              alt="Portrait of Rushikesh Malgan"
              width={220}
              height={220}
              className="photo-glow relative z-10"
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>

          {/* Social icon row */}
          <div className="flex gap-4 mt-2">
            {[
              {
                href: `mailto:${profile.email}`,
                icon: "fas fa-envelope",
                title: "Email",
                borderColor: "var(--accent-primary)",
                color: "var(--accent-primary)",
              },
              {
                href: profile.github,
                icon: "fab fa-github",
                title: "GitHub",
                borderColor: "var(--accent-secondary)",
                color: "var(--accent-secondary)",
              },
              {
                href: profile.linkedin,
                icon: "fab fa-linkedin-in",
                title: "LinkedIn",
                borderColor: "var(--color-teal)",
                color: "var(--color-teal)",
              },
            ].map(({ href, icon, title, borderColor, color }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                title={title}
                aria-label={title}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-transform hover:scale-110"
                style={{
                  background: "var(--bg-card)",
                  border: `1.5px solid ${borderColor}`,
                  color,
                }}
              >
                <i className={`${icon} text-sm`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Bio ── */}
        <motion.div variants={slideFromBottom} className="flex flex-col gap-4">
          <div>
            <h3
              className="text-[28px] font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {profile.name}
            </h3>
            <p
              className="text-[15px] font-medium mt-1"
              style={{ color: "var(--accent-secondary)" }}
            >
              Freelance Full-Stack Developer &nbsp;|&nbsp; LLM-powered products
            </p>
          </div>

          <p
            className="text-[16px] leading-[30px] mt-2"
            style={{ color: "var(--text-muted)" }}
          >
            Final-year Computer Engineering student at ViMEET (University of
            Mumbai, batch of 2027), based in Pune. I freelance as a full-stack
            developer and build products on top of LLM APIs, like{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
              Codentry
            </span>
            , an AI code-review GitHub App,{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
              Unpack
            </span>
            , which turns Instagram reels into verified resources, and{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
              BroCode
            </span>
            , a terminal coding assistant. I'm open to SDE, Full Stack and AI
            Engineer roles.
          </p>

          {/* Quick fact pills */}
          <div className="flex flex-wrap gap-3 mt-2">
            {[
              { label: "Pune, India", icon: "📍" },
              { label: "Batch of 2027", icon: "🎓" },
              { label: "Claude & Gemini APIs", icon: "🤖" },
              { label: "Open to SDE / Full Stack / AI Engineer roles", icon: "💼" },
            ].map(({ label, icon }) => (
              <span
                key={label}
                className="text-[13px] font-medium px-3 py-1 rounded-full"
                style={{
                  background: "rgba(47,156,149,0.15)",
                  border: "1px solid var(--accent-secondary)",
                  color: "var(--accent-secondary)",
                }}
              >
                {icon} {label}
              </span>
            ))}
          </div>

          {/* Email + resume (resume button only renders once profile.resumeUrl is set) */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-1">
            <a
              href={`mailto:${profile.email}`}
              className="text-[14px] hover:underline transition-opacity hover:opacity-80"
              style={{ color: "var(--accent-primary)" }}
            >
              ✉ {profile.email}
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold px-4 py-1.5 rounded-full transition-transform hover:scale-105"
                style={{
                  background: "var(--accent-primary)",
                  color: "var(--bg-primary)",
                }}
              >
                Resume ↗
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(AboutMe, "about");
