import React from "react";

import SectionRenderer from "./SectionRenderer";

import { cn } from "@/utils/cn";
import { getDeviconClassName } from "@/utils/devicon";
import api from "@/utils/api";

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
      <div className="container mx-auto grid grid-cols-6 gap-10">
        {skills.map((x) => (
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
