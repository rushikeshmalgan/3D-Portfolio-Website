import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card"
      style={{
        background: "linear-gradient(90.13deg, var(--color-gold) 1.9%, var(--color-teal) 97.5%)",
      }}
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ background: "var(--bg-card)" }}
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3
          className="text-[20px] font-bold text-center"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={styles.sectionSubText}
          style={{ color: "var(--accent-secondary)" }}
        >
          What I Do
        </p>
        <h2
          className={styles.sectionHeadText}
          style={{ color: "var(--text-primary)" }}
        >
          Services & Expertise.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] max-w-3xl leading-[30px]"
        style={{ color: "var(--text-muted)" }}
      >
        I build web and mobile products end to end, with a focus on features
        powered by LLM APIs such as Claude and Gemini: structured extraction,
        tool-using agents and retrieval. The day-to-day stack is React, Next.js,
        React Native and Node.js, with PostgreSQL, MongoDB or Firebase
        underneath.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "services");