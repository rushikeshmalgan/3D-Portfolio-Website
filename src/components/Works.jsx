import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Up to two initials for the generated cover, e.g. "Morya Bappa Mode" -> "MB".
const initialsOf = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

const ProjectLink = ({ href, label, name }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${label} for ${name} (opens in a new tab)`}
    className="text-[13px] font-semibold underline-offset-4 hover:underline"
    style={{ color: "var(--accent-secondary)" }}
  >
    {label} ↗
  </a>
);

const ProjectCard = ({
  index,
  name,
  pitch,
  highlights,
  tags,
  image,
  source_code_link,
  live_link,
  in_development,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="p-5 rounded-2xl sm:w-[360px] w-full relative overflow-hidden"
        style={{ background: "var(--bg-card)" }}
      >
        {/* "In Development" badge */}
        {in_development && (
          <div
            className="absolute top-3 left-3 z-20 text-[11px] font-bold px-3 py-1 rounded-full"
            style={{
              background: "var(--color-teal)",
              color: "var(--bg-primary)",
              letterSpacing: "0.05em",
            }}
          >
            🔧 In Development
          </div>
        )}

        {/* Project image, or a generated cover until a screenshot is added */}
        {image ? (
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={`${name} screenshot`}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="w-full h-[150px] rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #1F6363 0%, #151030 100%)",
            }}
          >
            <span
              className="font-black text-[56px] tracking-wider select-none"
              style={{ color: "var(--color-gold)", opacity: 0.85 }}
            >
              {initialsOf(name)}
            </span>
          </div>
        )}

        {/* Card body */}
        <div className="mt-5">
          <h3
            className="font-bold text-[24px]"
            style={{ color: "var(--text-primary)" }}
          >
            {name}
          </h3>
          <p
            className="mt-2 text-[14px] leading-[22px]"
            style={{ color: "var(--text-primary)" }}
          >
            {pitch}
          </p>
          {highlights.length > 0 && (
            <ul
              className="mt-3 list-disc ml-4 space-y-1.5 text-[13px] leading-[20px]"
              style={{ color: "var(--text-muted)" }}
            >
              {highlights.map((point) => (
                <li key={`${name}-${point}`}>{point}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[13px] font-medium ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        )}

        {/* Links: only rendered when a URL exists */}
        {(source_code_link || live_link) && (
          <div className="mt-4 flex gap-5">
            {source_code_link && (
              <ProjectLink href={source_code_link} label="GitHub" name={name} />
            )}
            {live_link && (
              <ProjectLink href={live_link} label="Live demo" name={name} />
            )}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={styles.sectionSubText}
          style={{ color: "var(--accent-secondary)" }}
        >
          My Work
        </p>
        <h2
          className={styles.sectionHeadText}
          style={{ color: "var(--text-primary)" }}
        >
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] max-w-3xl leading-[30px]"
          style={{ color: "var(--text-muted)" }}
        >
          Seven projects, from an AI code-review GitHub App and a terminal
          coding assistant to a food-logging app and a Ganesh Chaturthi
          exploration game.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7" id="projects">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// Seven stacked cards make this section ~4,500px tall on a phone, so 25% of it
// never fits in the viewport. Reveal it once 5% is visible instead.
export default SectionWrapper(Works, "", 0.05);
