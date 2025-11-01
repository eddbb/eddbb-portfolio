"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Underline from "@/components/Underline";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6 px-6 pb-10">
        <h1 className="text-4xl">My Projects</h1>
        <Underline />
        <p className="text-center max-w-xl">
          Here are some of the projects I've been working on recently.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
