import React from "react";

import SectionRenderer from "./SectionRenderer";
import { cn } from "@/utils/cn";
import { getDeviconClassName } from "@/utils/devicon";

const TECHS: string[] = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "SCSS",
  "CSS",
  "HTML",
  "NodeJS",
  "Webpack",
  "PostgreSQL",
  "Git",
  "Docker"
];

const TechStack = () => {
  return (
    <SectionRenderer
      id="skills"
      name="Tech Stack"
      caption="The technologies I use to bring ideas to life"
      className="bg-background-2nd"
    >
      <div className="container mx-auto grid grid-cols-6 gap-10">
        {TECHS.map((x) => (
          <div key={x} className="rounded-lg bg-background flex items-center flex-col justify-center p-6">
            <i className={cn("colored text-3xl", getDeviconClassName(x))}></i>
            <p className="text-white mt-4">{x}</p>
          </div>
        ))}
      </div>
    </SectionRenderer>
  );
};

export default TechStack;
