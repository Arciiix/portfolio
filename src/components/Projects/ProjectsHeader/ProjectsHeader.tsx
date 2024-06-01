"use client";

import { motion } from "framer-motion";
import AnimatedHeader from "@/components/Animations/AnimatedHeader/AnimatedHeader";

export default function ProjectsHeader() {
  return (
    <motion.div
      className="flex flex-col gap-3 my-5 items-center"
      initial={{ translateY: -200, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatedHeader title="Projects" />
      <span className="font-semibold text-2xl px-3 text-center text-white text-opacity-80">
        A selection of my favorite work. Dig into my universe. 🌠
      </span>
      <span className="font-semibold text-lg px-3 text-center text-white text-opacity-80">
        Starting from my favorite ones
      </span>
    </motion.div>
  );
}
