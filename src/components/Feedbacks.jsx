import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="p-10 rounded-3xl xs:w-[320px] w-full"
    style={{
      background: "var(--bg-card)",
      border: "1px solid rgba(47,156,149,0.2)",
    }}
  >
    <p
      className="font-black text-[48px]"
      style={{ color: "var(--accent-primary)" }}
    >
      "
    </p>

    <div className="mt-1">
      <p
        className="tracking-wider text-[18px]"
        style={{ color: "var(--text-primary)" }}
      >
        {testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="font-medium text-[16px]" style={{ color: "var(--text-primary)" }}>
            <span style={{ color: "var(--accent-secondary)" }}>@</span>{" "}
            {name}
          </p>
          <p className="mt-1 text-[12px]" style={{ color: "var(--text-muted)" }}>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
          style={{ border: "2px solid var(--accent-secondary)" }}
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div
      className="mt-12 rounded-[20px]"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px]`}
        style={{ background: "var(--bg-card)" }}
      >
        <motion.div variants={textVariant()}>
          <p
            className={styles.sectionSubText}
            style={{ color: "var(--accent-secondary)" }}
          >
            What others say
          </p>
          <h2
            className={styles.sectionHeadText}
            style={{ color: "var(--text-primary)" }}
          >
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");