import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import { SKILLS } from "./SkillsDescriptions";

export default function Skills() {
  const technologies = useMemo(() => {
    return SKILLS.map((e, index) => {
      return (
        <motion.div
          className="group flex items-center flex-col m-2 gap-2 cursor-pointer relative"
          key={e.name}
          initial={{ translateY: -200, opacity: 0 }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: { duration: 0.8, delay: index * 0.1 },
          }}
        >
          <Image
            className="grayscale group-hover:grayscale-0 transition-all duration-500 w-[72px] h-[72px]"
            src={e.image}
            width={72}
            height={72}
            alt={e.name}
          />
          <span className="text-xl group-hover:text-teal-400 transition-all duration-500">
            {e.name}
          </span>
          <div className="hidden transition-all group-hover:flex absolute top-0 left-0">
            <CodeSnippet content={e.codeSnippetContent} />
          </div>
        </motion.div>
      );
    });
  }, []);
  return (
    <motion.div
      className="flex flex-col gap-3 text-center"
      initial={{ translateX: -200, opacity: 0 }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      }}
    >
      <span className="text-teal-100 text-lg">
        Those Make Dreams Reality. ✨
      </span>
      <span className="text-7xl font-bold text-teal-400">
        Skills & technologies
      </span>
      <div className="m-8">
        <span className="text-xl">
          description of skills Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quibusdam excepturi quo
        </span>
        <div className="max-w-2xl mx-auto flex flex-wrap gap-2 items-end justify-center">
          {technologies}
        </div>
        <span className="text-teal-100">
          Hover over the technology for a brief description.
        </span>
      </div>
    </motion.div>
  );
}
