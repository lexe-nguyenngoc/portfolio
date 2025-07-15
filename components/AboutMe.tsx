import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

import { formatDate } from "@/utils/format";
import api from "@/utils/api";
import ANIMATION from "@/constants/animation";

import SectionRenderer from "./SectionRenderer";

const AboutMe = async () => {
  const response = await api.getAboutMe();

  if (!response.success) return <p>Something went wrong!</p>;

  const { summaries, timelines } = response.data!;

  return (
    <SectionRenderer id="about" name="About Me">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: "some", once: true }}
        variants={ANIMATION.group}
        className="container mx-auto md:flex md:items-stretch gap-10"
      >
        <motion.div
          className="w-full md:min-w-[300px] lg:min-w-[400px] min-h-[400px] relative border-primary/30 border rounded"
          variants={ANIMATION.slideUp}
        >
          <Image src="/avatar.jpg" fill alt="avatar" className="object-cover object-center" />
        </motion.div>
        <div className="mt-4 md:mt-0">
          <div>
            <motion.h4 className="font-bold text-2xl" variants={ANIMATION.slideUp}>
              Who am I?
            </motion.h4>

            {summaries.map((x, index) => (
              <motion.p key={index} className="not-last:mb-3 text-gray-300 my-3" variants={ANIMATION.slideUp}>
                {x}
              </motion.p>
            ))}
          </div>

          <div className="mt-8">
            <motion.h4 className="font-bold text-2xl" variants={ANIMATION.slideUp}>
              Experience Timeline
            </motion.h4>

            <div>
              {timelines.map((item, index) => (
                <motion.div key={index} className="pl-10 py-2 relative" variants={ANIMATION.slideUp}>
                  {index < timelines.length - 1 && (
                    <div className="h-[90px] w-[1px] bg-primary/80 absolute left-4 top-7 -translate-x-1/2"></div>
                  )}
                  <div className="size-4 rounded-full border-2 border-primary mr-2 absolute left-4 top-[21px] -translate-x-1/2 -translate-y-1/2"></div>

                  <p className="text-xl font-bold">{item.role}</p>

                  <p className="text-primary text-sm my-2">
                    {formatDate(item.startAt)} - {item.finishAt ? formatDate(item.finishAt) : "Present"}
                  </p>

                  <p className="text-gray-300">{item.company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionRenderer>
  );
};

export default AboutMe;
