import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

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
              src="/pp.png"
              alt="Rushikesh Malgan — Full Stack Developer"
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
                href: "mailto:malganrushikesh02@gmail.com",
                icon: "fas fa-envelope",
                title: "Email",
                borderColor: "var(--accent-primary)",
                color: "var(--accent-primary)",
              },
              {
                href: "https://github.com/rushikeshmalgan",
                icon: "fab fa-github",
                title: "GitHub",
                borderColor: "var(--accent-secondary)",
                color: "var(--accent-secondary)",
              },
              {
                href: "https://www.linkedin.com/in/rushikesh-malgan-010756319/",
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
                className="flex items-center justify-center w-10 h-10 rounded-full transition-transform hover:scale-110"
                style={{
                  background: "var(--bg-card)",
                  border: `1.5px solid ${borderColor}`,
                  color,
                }}
              >
                <i className={`${icon} text-sm`} />
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
              Rushikesh Malgan
            </h3>
            <p
              className="text-[15px] font-medium mt-1"
              style={{ color: "var(--accent-secondary)" }}
            >
              Full Stack Developer &nbsp;|&nbsp; Backend Engineer &nbsp;|&nbsp;
              React Native &nbsp;|&nbsp; Node.js &nbsp;|&nbsp; AI Integration
            </p>
          </div>

          <p
            className="text-[16px] leading-[30px] mt-2"
            style={{ color: "var(--text-muted)" }}
          >
            Full Stack and Backend Engineer (Computer Engineering, University of
            Mumbai) with hands-on experience building production-grade mobile and
            web apps. Led development of{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
              Sattava
            </span>
            , a health-tech platform integrating 5+ AI APIs for real-time food
            scanning and nutrition tracking. Shipped{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
              5+ full-stack apps
            </span>{" "}
            with 100+ active users.
          </p>

          {/* Quick stat pills */}
          <div className="flex flex-wrap gap-3 mt-2">
            {[
              { label: "5+ Apps Shipped", icon: "🚀" },
              { label: "100+ Active Users", icon: "👥" },
              { label: "99.2% Uptime", icon: "⚡" },
              { label: "AI Integration", icon: "🤖" },
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

          {/* Email */}
          <a
            href="mailto:malganrushikesh02@gmail.com"
            className="text-[14px] mt-1 hover:underline transition-opacity hover:opacity-80"
            style={{ color: "var(--accent-primary)" }}
          >
            ✉ malganrushikesh02@gmail.com
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(AboutMe, "about");
