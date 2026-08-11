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
    <div className="mx-auto mb-10 w-full max-w-5xl">
      <div className="glass-panel relative overflow-hidden rounded-[1.75rem] p-6 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: project.tag.color }}
        />
        <div className="relative">
          <Fields project={project} />
          <ProjectIntroduction project={project} />
          <Technologies project={project} center />
          {project.language ? (
            <span className="mx-auto mt-5 block w-max rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/60">
              Language:{" "}
              <b className="font-bold text-teal-300">{project.language}</b>
            </span>
          ) : null}
        </div>
        <motion.div
          className="relative mt-8"
          initial={{ translateY: 100, opacity: 0, filter: "blur(100px)" }}
          whileInView={{ translateY: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="border-t border-white/10 pt-8">
            <div className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/85">
              {project.description}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
