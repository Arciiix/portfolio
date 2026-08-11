"use client";

import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <motion.div
      className="my-5 flex flex-col gap-5 items-start"
      initial={{ translateY: -200, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="eyebrow">Selected work</span>
      <h2 className="section-heading max-w-3xl">
        Things I&apos;ve built, shipped, and learned from.
      </h2>
      <span className="max-w-xl text-base leading-relaxed text-white/45">
        A selection of experiments and products across full-stack development,
        IoT, automation, and computer vision.
      </span>
    </motion.div>
  );
}
