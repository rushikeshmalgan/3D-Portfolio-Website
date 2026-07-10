import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
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

        {/* Project image */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GitHub / source link — hidden if no link */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_code_link ? (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                style={{ background: "rgba(5,8,22,0.8)" }}
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            ) : (
              <div
                className="w-10 h-10 rounded-full flex justify-center items-center"
                title="Repository not public yet"
                style={{
                  background: "rgba(5,8,22,0.6)",
                  border: "1px solid rgba(217,203,146,0.3)",
                  cursor: "default",
                }}
              >
                <span className="text-[12px]" style={{ color: "var(--accent-primary)" }}>
                  🔒
                </span>
              </div>
            )}
          </div>
        </div>

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
            style={{ color: "var(--text-muted)" }}
          >
            {description}
          </p>
        </div>

        {/* Tags */}
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
          Production-grade apps that solve real problems — from AI-powered food
          tracking to virtual fashion try-ons. Each project ships with scalable
          backends, clean architecture, and measurable impact.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7" id="projects">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");