import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Vertical accent line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            className="w-5 h-5 rounded-full"
            style={{ background: "var(--accent-primary)" }}
          />
          <div
            className="w-1 sm:h-80 h-40"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-gold), transparent)",
            }}
          />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText}`}
            style={{ color: "var(--text-primary)" }}
          >
            Hi, I'm&nbsp;
            <span style={{ color: "var(--accent-primary)" }}>Rushikesh Malgan</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2`}
            style={{ color: "var(--text-muted)" }}
          >
            Full-stack developer building LLM-powered products
            <br className="sm:block hidden" />
            {/* Stack line is hidden on phones: a third wrapped line runs into the 3D monitor. */}
            <span className="hidden sm:inline" style={{ color: "var(--accent-secondary)" }}>
              {" "}React · Next.js · Node.js · Claude &amp; Gemini APIs
            </span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2"
            style={{ borderColor: "var(--accent-secondary)" }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full mb-1"
              style={{ background: "var(--accent-secondary)" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;