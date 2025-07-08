import React from "react";
import Image from "next/image";

import { cn } from "@/utils/cn";

import SectionRenderer from "./SectionRenderer";

const PROJECTS: Project[] = [
  {
    id: "1",
    name: "E-Commerce Platform",
    description: "A complete e-commerce solution with admin dashboard, inventory management, and analytics.",
    techStacks: ["React", "Node.js", "PostgreSQL"],
    link: "https://vocabspace.io.vn",
    sourceLink: "https://vocabspace.io.vn",
    thumbnail: "https://storage.googleapis.com/uxpilot-auth.appspot.com/eada77c41d-c19e7c3d7cd6a25831d7.png"
  },
  {
    id: "2",
    name: "E-Commerce Platform",
    description: "A complete e-commerce solution with admin dashboard, inventory management, and analytics.",
    techStacks: ["React", "Node.js", "PostgreSQL"],
    link: "https://vocabspace.io.vn",
    sourceLink: "https://vocabspace.io.vn",
    thumbnail: "https://storage.googleapis.com/uxpilot-auth.appspot.com/eada77c41d-c19e7c3d7cd6a25831d7.png"
  },
  {
    id: "3",
    name: "E-Commerce Platform",
    description: "A complete e-commerce solution with admin dashboard, inventory management, and analytics.",
    techStacks: ["React", "Node.js", "PostgreSQL"],
    thumbnail: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2ed896fa8b-efed667499a3121e6b39.png"
  }
];

const Projects = () => {
  return (
    <SectionRenderer id="projects" name="Featured Projects" caption="Check out some of my recent projects">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-background-2nd rounded-md">
            <div className="relative h-[200px] ">
              <Image src={project.thumbnail} fill alt={project.name} className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl text-white">{project.name}</h3>
              <p className="text-gray-400 mt-2 mb-3">{project.description}</p>
              <div className="flex gap-2 mb-5">
                {project.techStacks.map((tech) => (
                  <div key={tech} className="text-primary bg-primary/15 px-2 py-1 rounded-md text-xs">
                    {tech}
                  </div>
                ))}
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
                  "text-gray-500 hover:border-gray-500 hover:text-gray-500 cursor-not-allowed": !project.link
                })}
              >
                <i className="devicon-github-original mr-2"></i>
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionRenderer>
  );
};

export default Projects;
