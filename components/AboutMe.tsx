import React from "react";
import Image from "next/image";

import { formatDate } from "@/utils/format";
import api from "@/utils/api";

import SectionRenderer from "./SectionRenderer";

const AboutMe = async () => {
  const response = await api.getAboutMe();

  if (!response.success) return <p>Something went wrong!</p>;

  const { summaries, timelines } = response.data!;

  return (
    <SectionRenderer id="about" name="About Me">
      <div className="container mx-auto flex gap-10">
        <div className="min-w-[400px] h-[380px] relative border-primary/30 border rounded">
          <Image src="/avatar.jpg" fill alt="avatar" className="object-cover object-center" />
        </div>
        <div className="flex-1">
          <div>
            <h4 className="font-bold text-2xl"> Who am I?</h4>
            {summaries.map((x, index) => (
              <p className="not-last:mb-3 text-gray-300 my-3" key={index}>
                {x}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <h4 className="font-bold text-2xl"> Experience Timeline</h4>

            <div className="">
              {timelines.map((item, index) => (
                <div key={index} className="pl-10 py-2 relative">
                  {index < timelines.length - 1 && (
                    <div className="h-[90px] w-[1px] bg-primary/80 absolute left-4 top-7 -translate-x-1/2"></div>
                  )}
                  <div className="size-4 rounded-full border-2 border-primary mr-2 absolute left-4 top-[21px] -translate-x-1/2 -translate-y-1/2"></div>

                  <p className="text-xl font-bold">{item.role}</p>

                  <p className="text-primary text-sm my-2">
                    {formatDate(item.startAt)} - {item.finishAt ? formatDate(item.finishAt) : "Present"}
                  </p>

                  <p className="text-gray-300">{item.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionRenderer>
  );
};

export default AboutMe;
