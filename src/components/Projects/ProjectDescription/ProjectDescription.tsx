"use client";

import { motion } from "framer-motion";
import { BasicProjectDisplayProps } from "../Project";
import Fields from "../ProjectCard/Fields";
import ProjectIntroduction from "../ProjectCard/ProjectIntroduction";
import Technologies from "../ProjectCard/Technologies";

export default function ProjectDescription({
  project,
}: BasicProjectDisplayProps) {
  return (
    <div>
      <Fields project={project} />
      <ProjectIntroduction project={project} />
      <Technologies project={project} center />
      {project.language ? (
        <span className="block m-4 w-max bg-red-800 bg-opacity-20 p-2 rounded-xl mx-auto">
          Language: <b className="text-red-300">{project.language}</b>
        </span>
      ) : null}
      <motion.span
        className="block m-8 max-w-3xl px-4 mx-auto text-center text-lg"
        initial={{ translateY: 100, opacity: 0, filter: "blur(100px)" }}
        whileInView={{ translateY: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 1 }}
      >
        {project.description}
      </motion.span>
    </div>
  );
}
