import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--bg-card)",
        color: "var(--text-primary)",
        border: "1px solid rgba(47,156,149,0.25)",
        boxShadow: "0 4px 24px rgba(31,99,99,0.2)",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--bg-card)" }}
      date={experience.date}
      dateClassName="text-[var(--text-muted)]"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px var(--color-teal), inset 0 2px 0 rgba(0,0,0,.08)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3
          className="text-[24px] font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {experience.title}
        </h3>
        <p
          className="text-[16px] font-semibold"
          style={{ margin: 0, color: "var(--accent-secondary)" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] pl-1 tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} text-center`}
          style={{ color: "var(--accent-secondary)" }}
        >
          What I have done so far
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center`}
          style={{ color: "var(--text-primary)" }}
        >
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");