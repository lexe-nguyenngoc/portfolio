import React from "react";

import { formatDate } from "@/utils/format";
import { getDeviconClassName } from "@/utils/devicon";

import SectionRenderer from "./SectionRenderer";

const data: {
  id: string;
  role: string;
  projectName: string;
  startAt: Date | string;
  finishAt?: Date | string;
  company: string;
  description: string;
  techStacks: string[];
}[] = [
  {
    id: "1",
    role: "FrontEnd Engineer",
    projectName: "BetterPlace",
    startAt: "1/1/2026",
    company: "FPT Software Ho Chi Minh, Vietnam",
    description:
      "This project, [Your Project Name], is a [type of application, e.g., full-stack web application, mobile-first platform, SaaS solution] designed to [core problem it solves or main objective]. It provides users with a [describe main benefit, e.g., seamless, intuitive, efficient] experience by [briefly explain how it works or key features].",
    techStacks: ["Next.js", "React", "TypeScript", "Tailwindcss", "Prisma", "HTML"]
  },
  {
    id: "2",
    role: "FrontEnd Engineer",
    projectName: "BetterPlace",
    startAt: "1/1/2021",
    finishAt: "1/1/2022",
    company: "FPT Software Ho Chi Minh, Vietnam",
    description:
      "This project, [Your Project Name], is a [type of application, e.g., full-stack web application, mobile-first platform, SaaS solution] designed to [core problem it solves or main objective]. It provides users with a [describe main benefit, e.g., seamless, intuitive, efficient] experience by [briefly explain how it works or key features].",
    techStacks: ["Next.js", "React", "TypeScript", "Tailwindcss", "Prisma", "HTML"]
  },
  {
    id: "3",
    role: "FrontEnd Engineer",
    projectName: "BetterPlace",
    startAt: "1/1/2021",
    finishAt: "1/1/2022",
    company: "FPT Software Ho Chi Minh, Vietnam",
    description:
      "This project, [Your Project Name], is a [type of application, e.g., full-stack web application, mobile-first platform, SaaS solution] designed to [core problem it solves or main objective]. It provides users with a [describe main benefit, e.g., seamless, intuitive, efficient] experience by [briefly explain how it works or key features].",
    techStacks: ["Next.js", "React", "TypeScript", "Tailwindcss", "Prisma", "HTML"]
  }
];

const WorkingExperiences = () => {
  return (
    <SectionRenderer id="experiences" name="My Experiences" caption="Where I've Been Employed">
      <div className="w-full max-w-[820px] px-4 mx-auto">
        {data.map((x) => (
          <div key={x.id} className="grid grid-cols-2 gap-20 py-4 not-last:border-b not-last:border-gray-800">
            <div className="">
              <h3 className="text-lg font-bold tracking-wider">
                {x.role}, <span className="text-accent">{x.projectName}</span>
              </h3>

              <p className="text-gray-400 italic mt-2">
                {formatDate(new Date(x.startAt))} - {x.finishAt ? formatDate(new Date(x.finishAt)) : "Present"}
              </p>
              <p className="text-gray-400 italic mt-2">{x.company}</p>

              <div className="flex items-center gap-4 mt-4 flex-wrap">
                {x.techStacks.map((x) => (
                  <div className="text-primary bg-primary/15 px-2 py-1 rounded-md text-xs" key={x}>
                    <i className={getDeviconClassName(x)}></i>
                  </div>
                ))}
              </div>
            </div>

            <p>{x.description}</p>
          </div>
        ))}
      </div>
    </SectionRenderer>
  );
};

export default WorkingExperiences;
