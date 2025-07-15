import React from "react";

import { getDeviconClassName } from "@/utils/devicon";
import { formatDate } from "@/utils/format";

const WorkingExperienceCard = ({ data }: { data: WorkingExperience }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12 py-4 not-last:border-b not-last:border-gray-800">
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold tracking-wider">
          {data.role}, <span className="text-accent">{data.projectName}</span>
        </h3>

        <p className="text-gray-400 italic mt-2">
          {formatDate(new Date(data.startAt))} - {data.finishAt ? formatDate(new Date(data.finishAt)) : "Present"}
        </p>
        <p className="text-gray-400 italic mt-2">{data.company}</p>

        <div className="flex items-center gap-4 mt-4 flex-wrap">
          {data.techStacks.map((x) => (
            <div className="text-primary bg-primary/15 px-2 py-1 rounded-md text-xs" key={x}>
              <i className={getDeviconClassName(x)}></i>
            </div>
          ))}
        </div>
      </div>

      <p>{data.description}</p>
    </div>
  );
};

export default WorkingExperienceCard;
