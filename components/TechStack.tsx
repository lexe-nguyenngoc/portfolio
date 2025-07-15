import React from "react";
import * as motion from "motion/react-client";

import { cn } from "@/utils/cn";
import { getDeviconClassName } from "@/utils/devicon";
import api from "@/utils/api";
import ANIMATION from "@/constants/animation";

import SectionRenderer from "./SectionRenderer";

const TechStack = async () => {
  const response = await api.getSkills();

  if (!response.success) return <p>Something went wrong!</p>;
  const { skills } = response.data!;

  return (
    <SectionRenderer
      id="skills"
      name="Tech Stack"
      caption="The technologies I use to bring ideas to life"
      className="bg-background-2nd"
    >
      <motion.div
        variants={ANIMATION.group}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: "some", once: true }}
        className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6"
      >
        {skills.map((x) => (
          <motion.div
            variants={ANIMATION.slideUp}
            key={x}
            className="rounded-lg bg-background flex items-center flex-col justify-center p-6"
          >
            <i className={cn("colored text-3xl", getDeviconClassName(x))}></i>
            <p className="text-white mt-4">{x}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionRenderer>
  );
};

export default TechStack;
