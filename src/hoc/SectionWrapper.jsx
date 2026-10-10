import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// `amount` is the fraction of the section that must be on screen before it
// animates in. A section taller than viewport / amount can never reach it and
// would stay hidden, so very tall sections (e.g. Projects on a phone) pass a lower value.
const StarWrapper = (Component, idName, amount = 0.25) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;