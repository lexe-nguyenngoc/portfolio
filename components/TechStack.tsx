import React from "react";

import SectionRenderer from "./SectionRenderer";

const TECHS: { label: string; name: string }[] = [
  { label: "React", name: "react" },
  { label: "Next.js", name: "nextjs" },
  { label: "JavaScript", name: "javascript" },
  { label: "TypeScript", name: "typescript" },
  { label: "SCSS", name: "sass" },
  { label: "CSS", name: "css3" },
  { label: "HTML", name: "html5" },
  { label: "NodeJS", name: "nodejs" },
  { label: "Webpack", name: "webpack" },
  { label: "PostgreSQL", name: "postgresql" },
  { label: "Git", name: "git" },
  { label: "Docker", name: "docker" }
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
          <div key={x.name} className="rounded-lg bg-background flex items-center flex-col justify-center p-6">
            <i className={`devicon-${x.name}-plain colored text-3xl`}></i>
            <p className="text-white mt-4">{x.label}</p>
          </div>
        ))}
      </div>
    </SectionRenderer>
  );
};

export default TechStack;
