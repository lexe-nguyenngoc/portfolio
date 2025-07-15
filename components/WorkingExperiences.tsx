import React from "react";
import * as motion from "motion/react-client";

import api from "@/utils/api";
import ANIMATION from "@/constants/animation";

import SectionRenderer from "./SectionRenderer";
import WorkingExperienceCard from "./cards/WorkingExperienceCard";

const WorkingExperiences = async () => {
  const response = await api.getWorkingExperiences();

  if (!response.success) return <p>Something went wrong!</p>;

  const { data } = response.data!;

  return (
    <SectionRenderer id="experiences" name="My Experiences" caption="Where I've Been Employed">
      <motion.div
        variants={ANIMATION.group}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: "some", once: true }}
        className="w-full max-w-[820px] px-4 mx-auto overflow-x-hidden"
      >
        {data.map((x, index) => (
          <motion.div variants={index % 2 === 0 ? ANIMATION.fadeInLeft : ANIMATION.fadeInRight} key={x.id}>
            <WorkingExperienceCard data={x} />
          </motion.div>
        ))}
      </motion.div>
    </SectionRenderer>
  );
};

export default WorkingExperiences;
