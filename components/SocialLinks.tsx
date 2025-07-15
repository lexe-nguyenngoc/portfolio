import React from "react";
import * as motion from "motion/react-client";

import { cn } from "@/utils/cn";
import ANIMATION from "@/constants/animation";

const SOCIAL_LINKS = [
  { id: "1", icon: "github", link: "https://github.com/lexe-nguyenngoc" },
  { id: "2", icon: "linkedin", link: "https://www.linkedin.com/in/ngoc-le-nguyen-07ab44243" }
];

interface SocialLinks {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinks) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {SOCIAL_LINKS.map((x) => (
        <motion.a
          variants={ANIMATION.fadeInRight}
          key={x.id}
          href={x.link}
          target="_blank"
          className="text-white text-xl"
        >
          <i className={`devicon-${x.icon}-plain`}></i>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
