import React from "react";
import Image from "next/image";

import SectionRenderer from "./SectionRenderer";
import { formatDate } from "@/utils/format";

const TIMELINE_DATA: WorkingTimeLine[] = [
  { startAt: new Date("1/1/2021"), finishAt: null, company: "FPT Software Ho Chi Minh", role: "Front End Engineer" }
];

const AboutMe = () => {
  return (
    <SectionRenderer id="about" name="About Me">
      <div className="container mx-auto flex gap-10">
        <div className="min-w-[400px] h-[380px] relative border-primary/30 border rounded">
          <Image src="/avatar.jpg" fill alt="avatar" className="object-cover object-center" />
        </div>
        <div className="flex-1">
          <div>
            <h4 className="font-bold text-2xl"> Who am I?</h4>
            <p className="mb-3 text-gray-300 my-3">
              I'm a passionate Full Stack Developer with a strong focus on creating elegant, efficient, and
              user-friendly web applications. With 5+ years of experience in web development, I specialize in React,
              Next.js, and Node.js ecosystems.
            </p>
            <p className="text-gray-300">
              My journey in tech began at MIT where I studied Computer Science. Since then, I've worked with startups
              and established companies to build scalable products that solve real-world problems. I'm constantly
              learning and exploring new technologies to stay at the cutting edge of web development.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="font-bold text-2xl"> Experience Timeline</h4>

            <div className="">
              {TIMELINE_DATA.map((item) => (
                <div key={item.company} className="pl-10">
                  <div className="relative">
                    <div className="size-4 rounded-full border-2 border-primary mr-2 absolute left-0 top-1/2 -translate-x-8 -translate-y-1/2"></div>
                    <p className="text-xl font-bold">{item.role}</p>
                  </div>

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
