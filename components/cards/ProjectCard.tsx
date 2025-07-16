import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

import { cn } from "@/utils/cn";
import ANIMATION from "@/constants/animation";

const ProjectCard = ({ project }: { project: Project }) => {
  const { techStacks } = project;

  return (
    <motion.article variants={ANIMATION.slideUp} className="bg-background-2nd rounded-md">
      <div className="relative h-[200px] ">
        <Image
          src={project.thumbnail || "/placeholder.svg"}
          fill
          alt={project.name}
          className="object-cover rounded-tl-md rounded-tr-md"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl text-white">{project.name}</h3>
        <p className="text-gray-400 mt-2 mb-3">{project.description}</p>
        <div className="flex gap-2 mb-5">
          {techStacks.slice(0, 4).map((tech) => (
            <div key={tech} className="text-primary bg-primary/15 px-2 py-1 rounded-md text-xs">
              {tech}
            </div>
          ))}

          {techStacks.length > 4 && (
            <div className="text-primary bg-primary/15 px-2 py-1 rounded-md text-xs">+{techStacks.length - 4}</div>
          )}
        </div>

        <a
          href={project.link}
          target="_blank"
          className={cn("primary-btn", {
            "bg-gray-500 text-gray-200 hover:bg-gray-500 hover:text-gray-200 cursor-not-allowed": !project.link
          })}
        >
          Access
        </a>
        <a
          href={project.sourceLink}
          target="_blank"
          className={cn("secondary-btn ml-5", {
            "text-gray-500 hover:border-gray-500 hover:text-gray-500 cursor-not-allowed": !project.sourceLink
          })}
        >
          <i className="devicon-github-original mr-2"></i>
          Code
        </a>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
