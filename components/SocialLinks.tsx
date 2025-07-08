import React from "react";

import { cn } from "@/utils/cn";

const SOCIAL_LINKS = [
  { id: "1", icon: "github", link: "https://github.com/lexe-nguyenngoc" },
  { id: "2", icon: "linkedin", link: "https://www.linkedin.com/" }
];

interface SocialLinks {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinks) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {SOCIAL_LINKS.map((x) => (
        <a key={x.id} href={x.link} target="_blank" className="text-white text-xl">
          <i className={`devicon-${x.icon}-plain`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
