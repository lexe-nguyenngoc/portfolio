import React from "react";
import * as motion from "motion/react-client";

import api from "@/utils/api";
import ANIMATION from "@/constants/animation";

import SectionRenderer from "./SectionRenderer";
import ProjectCard from "./cards/ProjectCard";

const Projects = async () => {
  const response = await api.getProjects();

  if (!response.success) return <p>Something went wrong!</p>;

  const { projects } = response.data!;

  return (
    <SectionRenderer id="projects" name="Featured Projects" caption="Check out some of my recent projects">
      <motion.div
        variants={ANIMATION.group}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: "some", once: true }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </SectionRenderer>
  );
};

export default Projects;
