import React from "react";

import { formatDate } from "@/utils/format";
import { getDeviconClassName } from "@/utils/devicon";
import api from "@/utils/api";

import SectionRenderer from "./SectionRenderer";

const WorkingExperiences = async () => {
  const response = await api.getWorkingExperiences();

  if (!response.success) return <p>Something went wrong!</p>;

  const { data } = response.data!;

  return (
    <SectionRenderer id="experiences" name="My Experiences" caption="Where I've Been Employed">
      <div className="w-full max-w-[820px] px-4 mx-auto">
        {data.map((x) => (
          <div
            key={x.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12 py-4 not-last:border-b not-last:border-gray-800"
          >
            <div className="text-center md:text-left">
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
