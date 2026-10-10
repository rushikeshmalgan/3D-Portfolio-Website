import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <ul
      className='flex flex-row flex-wrap justify-center gap-10 list-none'
      aria-label="Technologies I work with"
    >
      {technologies.map((technology) => (
        <li
          className='w-28 flex flex-col items-center'
          key={technology.name}
        >
          <div className='w-28 h-28' aria-hidden="true">
            <BallCanvas icon={technology.icon} />
          </div>
          <span
            className='mt-2 text-[12px] font-medium text-center'
            style={{ color: "var(--text-muted)" }}
          >
            {technology.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SectionWrapper(Tech, "");